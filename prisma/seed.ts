import { PrismaClient } from '@prisma/client'
import { createHash } from 'crypto'

const prisma = new PrismaClient()

function hashPassword(password: string): string {
  const salt = 'rhyseforge-salt-2024'
  return createHash('sha256').update(password + salt).digest('hex')
}

async function main() {
  console.log('🌱 Seeding database with production-grade data...\n')

  // ── Create Admin User ──
  await prisma.user.upsert({
    where: { email: 'admin@rhyseforge.com' },
    update: {},
    create: {
      email: 'admin@rhyseforge.com',
      password: hashPassword('admin123'),
      name: 'Admin',
      role: 'ADMIN',
      plan: 'ENTERPRISE',
      planPurchasedAt: new Date(),
      boundDeviceId: null
    }
  })

  // ── Create Test User ──
  await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      password: hashPassword('test123'),
      name: 'Test User',
      phone: '+91 98765 43210',
      role: 'USER',
      plan: 'FREE',
      boundDeviceId: null
    }
  })

  // ── Exam 1: Data Engineer Associate (Databricks) ──
  await prisma.exam.create({
    data: {
      title: 'Data Engineer Associate',
      certificationCode: 'DE-ASSOC',
      provider: 'Databricks',
      categoryTags: JSON.stringify(['Data Engineering', 'Databricks', 'SQL']),
      passingScore: 70.0,
      timeLimit: 90,
      status: 'published',
      questions: {
        create: [
          {
            question: 'Which of the following describes a benefit of a data lakehouse that is unavailable in a traditional data warehouse?',
            options: JSON.stringify(['Relational system of data management', 'Snapshots of data for time travel queries', 'Support for machine learning and AI workloads on open formats', 'Secure sharing of data across organizations']),
            answer: 2,
            explanation: 'Data lakehouses support ML/AI directly on open data formats, combining warehouse and lake capabilities.',
            topic: 'Architecture',
            difficulty: 'easy',
            status: 'published'
          },
          {
            question: 'Which command restores a Delta table to a prior version?',
            options: JSON.stringify(['RESTORE TABLE ... VERSION AS OF ...', 'VACUUM TABLE ...', 'OPTIMIZE TABLE ...', 'DESCRIBE HISTORY ...']),
            answer: 0,
            explanation: 'The RESTORE command is used for version recovery in Delta Lake.',
            topic: 'Delta Lake',
            difficulty: 'medium',
            status: 'published'
          },
          {
            question: 'What is the purpose of the Silver layer in a Medallion architecture?',
            options: JSON.stringify(['Raw data ingestion', 'Cleaned, filtered, and augmented data', 'Business-level aggregates', 'Archived data']),
            answer: 1,
            explanation: 'The Silver layer provides refined and cleaned data ready for consumption.',
            topic: 'Medallion Architecture',
            difficulty: 'medium',
            status: 'published'
          },
          {
            question: 'Which tool is used for orchestrating production ETL pipelines in Databricks?',
            options: JSON.stringify(['Databricks SQL', 'Workflows (Job Clusters)', 'Unity Catalog', 'MLflow']),
            answer: 1,
            explanation: 'Databricks Workflows is the primary orchestration service.',
            topic: 'Orchestration',
            difficulty: 'easy',
            status: 'published'
          },
          {
            question: 'What does "ACID" stand for in database transactions?',
            options: JSON.stringify(['Accuracy, Consistency, Isolation, Durability', 'Atomicity, Consistency, Isolation, Durability', 'Atomicity, Clarity, Integration, Data', 'Availability, Consistency, Isolation, Durability']),
            answer: 1,
            explanation: 'Atomicity, Consistency, Isolation, Durability are the standard transaction properties.',
            topic: 'Fundamentals',
            difficulty: 'medium',
            status: 'published'
          },
          {
            question: 'Which component of Unity Catalog provides centralized access control?',
            options: JSON.stringify(['Metastore', 'Catalog', 'Schema', 'Volume']),
            answer: 0,
            explanation: 'The Unity Catalog Metastore is the top-level container for metadata and access control.',
            topic: 'Unity Catalog',
            difficulty: 'medium',
            status: 'published'
          },
          {
            question: 'Which file format is the default for Databricks tables?',
            options: JSON.stringify(['CSV', 'JSON', 'Parquet', 'Delta']),
            answer: 3,
            explanation: 'Delta Lake is the default storage format for Databricks.',
            topic: 'Delta Lake',
            difficulty: 'easy',
            status: 'published'
          },
          {
            question: 'What is the primary benefit of using `Z-ORDERING` in Delta Lake?',
            options: JSON.stringify(['Compresses the data', 'Faster data skipping', 'Randomizes the data', 'Changes the primary key']),
            answer: 1,
            explanation: 'Z-ORDERING groups related information in the same set of files to enable faster data skipping.',
            topic: 'Optimization',
            difficulty: 'hard',
            status: 'published'
          },
          {
            question: 'Which feature of Delta Lake allows you to view the history of changes?',
            options: JSON.stringify(['Time Travel', 'Data Ingestion', 'Schema Evolution', 'Auto Loader']),
            answer: 0,
            explanation: 'Delta Time Travel allows you to query older snapshots of data.',
            topic: 'Delta Lake',
            difficulty: 'medium',
            status: 'published'
          },
          {
            question: 'What does Auto Loader use to identify new files in a cloud storage location?',
            options: JSON.stringify(['SQL Triggers', 'File Notification or Directory Listing', 'Kafka Streams', 'Manual Refresh']),
            answer: 1,
            explanation: 'Auto Loader can use either cloud notifications or directory polling.',
            topic: 'Ingestion',
            difficulty: 'medium',
            status: 'published'
          }
        ]
      }
    }
  })

  // ── Exam 2: Generative AI Fundamentals (Databricks) ──
  await prisma.exam.create({
    data: {
      title: 'Generative AI Fundamentals',
      certificationCode: 'GEN-AI-FUND',
      provider: 'Databricks',
      categoryTags: JSON.stringify(['AI', 'Generative AI', 'Databricks', 'LLM']),
      passingScore: 80.0,
      timeLimit: 60,
      status: 'published',
      questions: {
        create: [
          {
            question: 'What is a "Foundation Model" in the context of Generative AI?',
            options: JSON.stringify(['A small model trained for one specific task', 'A large model trained on vast data that can be adapted to many tasks', 'An open-source database', 'A hardware accelerator for AI']),
            answer: 1,
            explanation: 'Foundation models (like GPT) are broad base models that can be fine-tuned.',
            topic: 'Fundamentals',
            difficulty: 'medium',
            status: 'published'
          },
          {
            question: 'What does LLM stand for?',
            options: JSON.stringify(['Line-Level Mapping', 'Logic Loop Machine', 'Large Language Model', 'Linked Log Memory']),
            answer: 2,
            explanation: 'LLM stands for Large Language Model.',
            topic: 'Terminology',
            difficulty: 'easy',
            status: 'published'
          },
          {
            question: 'What is "Prompt Engineering"?',
            options: JSON.stringify(['Writing the code for an LLM', 'Crafting and optimizing inputs to get better outputs from an AI', 'Designing the GPU architecture', 'Setting up the training server']),
            answer: 1,
            explanation: 'Prompt engineering is the art of designing inputs to guide model behavior.',
            topic: 'Interaction',
            difficulty: 'easy',
            status: 'published'
          },
          {
            question: 'Which Databricks feature allows you to serve LLMs as REST endpoints?',
            options: JSON.stringify(['Model Serving', 'SQL Warehouse', 'Feature Store', 'Delta Live Tables']),
            answer: 0,
            explanation: 'Databricks Model Serving provides low-latency inference for LLMs.',
            topic: 'Deployment',
            difficulty: 'medium',
            status: 'published'
          },
          {
            question: 'What is RAG (Retrieval-Augmented Generation)?',
            options: JSON.stringify(['A way to delete old data', 'A method to enhance LLM responses with external data', 'A type of video compression', 'A government regulation for AI']),
            answer: 1,
            explanation: 'RAG combines LLM capabilities with internal data retrieval for accuracy.',
            topic: 'Architecture',
            difficulty: 'hard',
            status: 'published'
          },
          {
            question: 'What is "Hallucination" in LLMs?',
            options: JSON.stringify(['A software crash', 'When a model generates confident but false information', 'A security exploit', 'When a model runs too fast']),
            answer: 1,
            explanation: 'Hallucination is when a model predicts something factually incorrect.',
            topic: 'Ethics & Safety',
            difficulty: 'medium',
            status: 'published'
          },
          {
            question: 'What is the purpose of fine-tuning a model?',
            options: JSON.stringify(['To make it smaller', 'To adapt a pre-trained model to a specific domain or task', 'To change its programming language', 'To increase its power usage']),
            answer: 1,
            explanation: 'Fine-tuning updates a pre-trained model with task-specific data.',
            topic: 'Training',
            difficulty: 'medium',
            status: 'published'
          },
          {
            question: 'Which of the following is a key risk of GenAI?',
            options: JSON.stringify(['High latency', 'Bias and toxicity in outputs', 'Lack of colors', 'Incompatibility with SQL']),
            answer: 1,
            explanation: 'Bias and toxicity are major safety concerns in LLM deployment.',
            topic: 'Safety',
            difficulty: 'easy',
            status: 'published'
          },
          {
            question: 'What does "Context Window" mean?',
            options: JSON.stringify(['The size of the screen', 'The amount of text an LLM can "read" at once', 'The server uptime', 'The login window duration']),
            answer: 1,
            explanation: 'The context window refers to the token limit the model can process in one go.',
            topic: 'Architecture',
            difficulty: 'medium',
            status: 'published'
          },
          {
            question: 'Is Databricks an open-source platform for AI?',
            options: JSON.stringify(['Yes, entirely', 'No, but it is built on open source standards like Delta and MLflow', 'No, it is 100% proprietary', 'Yes, it is a Linux distribution']),
            answer: 1,
            explanation: 'Databricks leverages open standards like Spark, Delta, and MLflow.',
            topic: 'Databricks Ecosystem',
            difficulty: 'easy',
            status: 'published'
          }
        ]
      }
    }
  })

  // ── Exam 3: AWS Certified AI Practitioner ──
  await prisma.exam.create({
    data: {
      title: 'AWS Certified AI Practitioner',
      certificationCode: 'AIF-C01',
      provider: 'Amazon Web Services',
      categoryTags: JSON.stringify(['AI', 'AWS', 'Machine Learning']),
      passingScore: 70.0,
      timeLimit: 120,
      status: 'published',
      questions: {
        create: [
          {
            question: 'Which AWS service provides a web-based interface for building, training, and deploying ML models?',
            options: JSON.stringify(['Amazon Comprehend', 'Amazon SageMaker', 'AWS Glue', 'Amazon Rekognition']),
            answer: 1,
            explanation: 'SageMaker is the flagship end-to-end ML platform on AWS.',
            topic: 'SageMaker',
            difficulty: 'easy',
            status: 'published'
          },
          {
            question: 'Which service is used for automated video and image analysis using ML?',
            options: JSON.stringify(['Amazon Lex', 'Amazon Polly', 'Amazon Rekognition', 'Amazon Translate']),
            answer: 2,
            explanation: 'Rekognition makes it easy to add image and video analysis to your applications.',
            topic: 'Computer Vision',
            difficulty: 'easy',
            status: 'published'
          },
          {
            question: 'What is the purpose of Amazon Bedrock?',
            options: JSON.stringify(['To store petabytes of data', 'To build and scale generative AI applications with FMs', 'To manage relational databases', 'To monitor cloud infrastructure']),
            answer: 1,
            explanation: 'Bedrock is the easiest way to build GenAI apps using foundation models.',
            topic: 'Generative AI',
            difficulty: 'medium',
            status: 'published'
          },
          {
            question: 'Which service allows you to convert text into life-like speech?',
            options: JSON.stringify(['Amazon Polly', 'Amazon Transcribe', 'Amazon Comprehend', 'Amazon Kendra']),
            answer: 0,
            explanation: 'Polly is a text-to-speech service.',
            topic: 'Speech',
            difficulty: 'easy',
            status: 'published'
          },
          {
            question: 'What is "Responsible AI" in the context of AWS?',
            options: JSON.stringify(['AI that runs at the lowest cost', 'Developing AI in a safe, trustworthy, and ethical manner', 'AI that only uses AWS hardware', 'AI that can fix its own bugs']),
            answer: 1,
            explanation: 'Responsible AI focuses on fairness, explainability, and safety.',
            topic: 'Ethics',
            difficulty: 'medium',
            status: 'published'
          },
          {
            question: 'Which service provides on-demand natural language processing (NLP)?',
            options: JSON.stringify(['Amazon Forecast', 'Amazon Comprehend', 'Amazon Personalize', 'Amazon Textract']),
            answer: 1,
            explanation: 'Amazon Comprehend uncovers insights and relationships in text.',
            topic: 'NLP',
            difficulty: 'easy',
            status: 'published'
          },
          {
            question: 'What is AWS HealthScribe used for?',
            options: JSON.stringify(['Fixing broken servers', 'Automating clinical documentation', 'Writing emails', 'Monitoring server health']),
            answer: 1,
            explanation: 'HealthScribe uses GenAI to help healthcare providers document patient visits.',
            topic: 'Specialized AI',
            difficulty: 'medium',
            status: 'published'
          },
          {
            question: 'Which tool helps visualize and explain how ML models make predictions?',
            options: JSON.stringify(['SageMaker Clarify', 'SageMaker Canvas', 'SageMaker Studio', 'SageMaker Debugger']),
            answer: 0,
            explanation: 'Clarify provides bias detection and explainability for ML models.',
            topic: 'Model Insights',
            difficulty: 'hard',
            status: 'published'
          },
          {
            question: 'What is Amazon Q?',
            options: JSON.stringify(['A physical robot', 'A generative AI-powered assistant for work', 'A search engine', 'A cold storage service']),
            answer: 1,
            explanation: 'Amazon Q is a GenAI assistant tailored for business and developers.',
            topic: 'Generative AI',
            difficulty: 'medium',
            status: 'published'
          },
          {
            question: 'Which service generates highly accurate transcripts from audio file inputs?',
            options: JSON.stringify(['Amazon Lex', 'Amazon Translate', 'Amazon Transcribe', 'Amazon Comprehend']),
            answer: 2,
            explanation: 'Amazon Transcribe uses ML to provide speech-to-text capabilities.',
            topic: 'Speech',
            difficulty: 'easy',
            status: 'published'
          }
        ]
      }
    }
  })

  // ── Exam 4: SAP Certified Associate — ABAP Cloud Back-End Developer ──
  await prisma.exam.create({
    data: {
      title: 'SAP Certified Associate — ABAP Cloud Back-End Developer',
      certificationCode: 'C_ABAPD',
      provider: 'SAP',
      categoryTags: JSON.stringify(['SAP', 'ABAP', 'Cloud']),
      passingScore: 65.0,
      timeLimit: 180,
      status: 'published',
      questions: {
        create: [
          {
            question: 'In the ABAP RESTful Application Programming Model (RAP), what defines the transactional behavior?',
            options: JSON.stringify(['CDS Projection View', 'Behavior Definition (BDEF)', 'Service Binding', 'Metadata Extension']),
            answer: 1,
            explanation: 'The Behavior Definition (BDEF) specifies create/update/delete actions.',
            topic: 'ABAP RAP',
            difficulty: 'hard',
            status: 'published'
          },
          {
            question: 'Which tool is used for ABAP Cloud development?',
            options: JSON.stringify(['SAP GUI ADT', 'ABAP Development Tools (ADT) in Eclipse', 'Web IDE', 'Business Application Studio']),
            answer: 1,
            explanation: 'ADT in Eclipse is the standard tool for ABAP Cloud.',
            topic: 'Tools',
            difficulty: 'medium',
            status: 'published'
          },
          {
            question: 'What is the primary difference between ABAP Cloud and Classic ABAP?',
            options: JSON.stringify(['ABAP Cloud has no syntax checks', 'ABAP Cloud uses a restricted language scope and public APIs only', 'Classic ABAP is faster', 'There is no difference']),
            answer: 1,
            explanation: 'ABAP Cloud enforces a cloud-ready development model with restricted syntax.',
            topic: 'Fundamentals',
            difficulty: 'medium',
            status: 'published'
          },
          {
            question: 'Which statement is true about CDS Views in ABAP Cloud?',
            options: JSON.stringify(['They are only for reporting', 'They are the foundation for the data model and RAP', 'They cannot be used with OData', 'They replace all ABAP classes']),
            answer: 1,
            explanation: 'CDS views are the core of the data modeling layer.',
            topic: 'Data Modeling',
            difficulty: 'medium',
            status: 'published'
          },
          {
            question: 'What is a "Service Binding" in ABAP RAP?',
            options: JSON.stringify(['A way to connect to a printer', 'It defines the protocol (e.g., OData V4) and exposes the service', 'A database constraint', 'An internal ABAP table']),
            answer: 1,
            explanation: 'Service Bindings expose the business logic to the outside world via OData.',
            topic: 'Service Exposure',
            difficulty: 'medium',
            status: 'published'
          },
          {
            question: 'Which ABAP Cloud API level is intended for customers to build cloud-ready extensions?',
            options: JSON.stringify(['Tier 1 (ABAP Cloud)', 'Tier 2 (Classic)', 'Tier 3 (SAP Internal)', 'Tier 4 (Legacy)']),
            answer: 0,
            explanation: 'Tier 1 is the official stable release for Cloud development.',
            topic: 'Architecture',
            difficulty: 'medium',
            status: 'published'
          },
          {
            question: 'What is the purpose of a "Draft" in ABAP RAP?',
            options: JSON.stringify(['To delete data', 'To save intermediate states of data without affecting the main table', 'To speed up the database', 'To provide colors to UI']),
            answer: 1,
            explanation: 'Draft allows users to save progress without completing validation or persisting to the core table.',
            topic: 'Transactional UI',
            difficulty: 'hard',
            status: 'published'
          },
          {
            question: 'How is a CDS view exposed as an OData service?',
            options: JSON.stringify(['Via Excel export', 'Via a Service Definition and Service Binding', 'Via SAP GUI', 'It happens automatically']),
            answer: 1,
            explanation: 'A Service Definition selects components, and a Binding specifies the exposure protocol.',
            topic: 'Full Stack',
            difficulty: 'medium',
            status: 'published'
          },
          {
            question: 'Can you use the "COMMIT WORK" statement in ABAP Cloud?',
            options: JSON.stringify(['Yes, everywhere', 'No, it is restricted; transaction control is handled by the framework (RAP)', 'Yes, but only on Fridays', 'Only in OData V2']),
            answer: 1,
            explanation: 'Explicit COMMITs are restricted in RAP to preserve framework integrity.',
            topic: 'Language scope',
            difficulty: 'hard',
            status: 'published'
          },
          {
            question: 'What is the successor of the Business Object Processing Framework (BOPF) in the cloud?',
            options: JSON.stringify(['ABAP RAP', 'Web Dynpro', 'SAP Scripts', 'ALV Grid']),
            answer: 0,
            explanation: 'RAP is the modern evolution and successor to BOPF for cloud development.',
            topic: 'Architecture',
            difficulty: 'medium',
            status: 'published'
          }
        ]
      }
    }
  })

  console.log('✅ Seeded 4 exams with 10 questions each.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
