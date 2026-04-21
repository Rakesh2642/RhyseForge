import { defineEventHandler, readMultipartFormData, createError } from 'h3'
import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event)
  
  if (!formData) {
    throw createError({ statusCode: 400, statusMessage: 'No multipart data received' })
  }

  const examIdField = formData.find(f => f.name === 'examId')
  const examId = examIdField ? examIdField.data.toString() : null

  if (!examId) {
    throw createError({ statusCode: 400, statusMessage: 'examId is required' })
  }

  const groqApiKey = process.env.GROQ_API_KEY
  if (!groqApiKey) {
    console.warn('GROQ_API_KEY not found in environment. Falling back to mock data.')
  }

  let parsedQuestions = []
  const fileField = formData.find(f => f.name === 'file')
  const filename = fileField?.filename?.toLowerCase() || ''
  const isDataFile = filename.endsWith('.json') || filename.endsWith('.js')

  if (isDataFile && fileField?.data) {
    try {
      let rawContent = fileField.data.toString().trim()
      
      // 1. Strip comments safely (line-based // and /* */)
      // Only strip // if it follows whitespace or is at start of line to avoid breaking URLs/code strings
      rawContent = rawContent.replace(/\/\*[\s\S]*?\*\//g, '')
      rawContent = rawContent.replace(/^(\s*)\/\/.*$/gm, '$1')
      rawContent = rawContent.replace(/(\s+)\/\/.*$/gm, '$1')
      
      // 2. Extract array part - be very aggressive finding the array
      let candidate = rawContent.trim()
      
      // Remove JS boilerplate if present (const x = ..., export default ..., etc)
      candidate = candidate.replace(/^(const|let|var|export\s+default)\s+[a-zA-Z0-9_]+\s*=\s*/, '')
      candidate = candidate.replace(/;$/, '') // Remove trailing semicolon
      
      const startIdx = candidate.indexOf('[')
      const endIdx = candidate.lastIndexOf(']')
      
      if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
        throw new Error('No array found in file')
      }
      
      candidate = candidate.substring(startIdx, endIdx + 1)
      
      try {
        // Try standard JSON parse first
        const jsonContent = JSON.parse(candidate)
        parsedQuestions = Array.isArray(jsonContent) ? jsonContent : (jsonContent.questions || [])
      } catch (e) {
        // Evaluate the JS content directly. This handles loose commas, single quotes, backticks, unquoted keys, and complicated string escapes natively.
        try {
           const evaluated = new Function('return ' + candidate)()
           parsedQuestions = Array.isArray(evaluated) ? evaluated : (evaluated.questions || [])
        } catch (evalErr) {
           throw new Error(`Robust evaluation failed: ${evalErr.message} (Original error: ${e.message})`)
        }
      }
      
      console.log(`Successfully parsed ${parsedQuestions.length} questions from ${filename} using loose parser.`)
    } catch (err) {
      console.error('Loose parsing failed final attempt:', err)
      throw createError({ statusCode: 400, statusMessage: `Invalid file format: ${err.message}` })
    }
  } else if (groqApiKey) {
    try {
      const response = await $fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${groqApiKey}`,
          'Content-Type': 'application/json'
        },
        body: {
          model: 'llama3-70b-8192',
          messages: [
            {
              role: 'system',
              content: 'You are an expert exam parser. Extract multiple-choice questions from the provided text and return ONLY a JSON array of objects inside a "questions" key. Keys: question, options (array of 4 strings), answer (0-3 index), explanation, topic, difficulty (easy/medium/hard).'
            },
            {
              role: 'user',
              content: 'Parse the following exam content: [Simulated OCR Text from upload]'
            }
          ],
          response_format: { type: 'json_object' }
        }
      })
      
      const content = response.choices[0].message.content
      const parsedData = typeof content === 'string' ? JSON.parse(content) : content
      parsedQuestions = parsedData.questions || []
    } catch (err) {
      console.error('Groq API Error:', err)
    }
  }

  if (parsedQuestions.length === 0) {
    parsedQuestions = [
      {
        question: "Which of the following is a managed Kubernetes service?",
        options: ["Amazon ECS", "Amazon EKS", "AWS Fargate", "AWS Lambda"],
        answer: 1,
        explanation: "Amazon EKS (Elastic Kubernetes Service) is the managed Kubernetes service provided by AWS.",
        topic: "Containers",
        difficulty: "medium",
        confidenceScore: 0.98
      }
    ]
  }

  const createdQuestions = await Promise.all(
    parsedQuestions.map(mq => 
      prisma.question.create({
        data: {
          examId,
          question: mq.question,
          options: JSON.stringify(mq.options),
          // Handle cases where 'answer' is an array (multi-select) by taking the first one for now
          answer: Array.isArray(mq.answer) ? mq.answer[0] : (mq.answer ?? 0),
          explanation: mq.explanation,
          topic: mq.topic,
          difficulty: mq.difficulty,
          source: 'ai_parsed',
          status: 'pending_review',
          confidenceScore: mq.confidenceScore
        }
      })
    )
  )

  return {
    jobId: 'simulated-job-' + Date.now(),
    questionsProcessed: createdQuestions.length
  }
})
