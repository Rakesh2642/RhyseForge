import { ref, computed } from 'vue'

interface Question {
  id: string
  examId: string
  question: string
  options: string[]
  answer: number
  explanation?: string
  topic?: string
  difficulty: string
}

export const useExam = (examId: string) => {
  const questions = ref<Question[]>([])
  const currentIndex = ref(0)
  const currentQuestion = computed(() => questions.value[currentIndex.value])
  const answers = ref<Record<string, number>>({})
  const isFinished = ref(false)
  const score = ref(0)
  const sessionId = ref<string | null>(null)

  const loadQuestions = async (options = { shuffle: false }) => {
    try {
      const data = await $fetch<Question[]>(`/api/exams/${examId}/questions`, {
        params: options
      })
      questions.value = data
    } catch (error) {
      console.error('Failed to load questions:', error)
      throw error
    }
  }

  const startSession = async (userId: string, mode = 'practice') => {
    try {
      const session = await $fetch<{ id: string }>('/api/sessions', {
        method: 'POST',
        body: { examId, userId, mode }
      })
      sessionId.value = session.id
    } catch (error) {
      console.error('Failed to start session:', error)
      throw error
    }
  }

  const submitAnswer = (questionId: string, optionIndex: number) => {
    answers.value[questionId] = optionIndex
  }

  const nextQuestion = () => {
    if (currentIndex.value < questions.value.length - 1) {
      currentIndex.value++
    }
  }

  const prevQuestion = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--
    }
  }

  const finishExam = async (passingScore = 70.0) => {
    if (questions.value.length === 0) return

    let correctCount = 0
    questions.value.forEach(q => {
      if (answers.value[q.id] === q.answer) {
        correctCount++
      }
    })
    
    score.value = (correctCount / questions.value.length) * 100
    const passed = score.value >= passingScore
    isFinished.value = true

    if (sessionId.value) {
      try {
        await $fetch(`/api/sessions/${sessionId.value}`, {
          method: 'PATCH',
          body: {
            score: score.value,
            passed
          }
        })
      } catch (error) {
        console.error('Failed to update session:', error)
      }
    }
  }

  return {
    questions,
    currentIndex,
    currentQuestion,
    answers,
    isFinished,
    score,
    loadQuestions,
    startSession,
    submitAnswer,
    nextQuestion,
    prevQuestion,
    finishExam
  }
}
