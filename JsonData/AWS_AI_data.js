const questions = [
    {
        "question": "Which term describes the numerical representations of real-world objects and concepts that AI and natural language processing (NLP) models use to improve understanding of textual information?",
        "options": [
            "Embeddings",
            "Tokens",
            "Models",
            "Binaries"
        ],
        "answer": 0
    },
    {
        "question": "A company is building an ML model to analyze archived data. The company must perform inference on large datasets that are multiple GBs in size. The company does not need to access the model predictions immediately. Which Amazon SageMaker inference option will meet these requirements?",
        "options": [
            "Batch transform",
            "Real-time inference",
            "Serverless inference",
            "Asynchronous inference"
        ],
        "answer": 0
    },
    {
        "question": "A company has built a chatbot that can respond to natural language questions with images. The company wants to ensure that the chatbot does not return inappropriate or unwanted images. Which solution will meet these requirements?",
        "options": [
            "Implement moderation APIs.",
            "Retrain the model with a general public dataset.",
            "Perform model validation.",
            "Automate user feedback integration."
        ],
        "answer": 0
    },
    {
        "question": "A company is preparing to launch a new web store that is expected to receive high traffic for an upcoming event. The web store runs only on AWS, and the company has an AWS Enterprise Support plan. Which AWS resource will provide guidance about how the company should scale its architecture and operational support during the event?",
        "options": [
            "AWS Abuse team",
            "The designated AWS technical account manager (TAM)",
            "AWS infrastructure event management",
            "AWS Professional Services"
        ],
        "answer": 2
    },
    {
        "question": "An AI practitioner is using an Amazon Bedrock base model to summarize session chats from the customer service department. The AI practitioner wants to store invocation logs to monitor model input and output data. Which strategy should the AI practitioner use?",
        "options": [
            "Configure AWS CloudTrail as the logs destination for the model.",
            "Enable invocation logging in Amazon Bedrock.",
            "Configure AWS Audit Manager as the logs destination for the model.",
            "Configure model invocation logging in Amazon EventBridge."
        ],
        "answer": 1
    },
    {
        "question": "A research company implemented a chatbot by using a foundation model (FM) from Amazon Bedrock. The chatbot searches for answers to questions from a large database of research papers. After multiple prompt engineering attempts, the company notices that the FM is performing poorly because of the complex scientific terms in the research papers. How can the company improve the performance of the chatbot?",
        "options": [
            "Use few-shot prompting to define how the FM can answer the questions.",
            "Use domain adaptation fine-tuning to adapt the FM to complex scientific terms.",
            "Change the FM inference parameters.",
            "Clean the research paper data to remove complex scientific terms."
        ],
        "answer": 1
    },
    {
        "question": "An education provider is building a question and answer application that uses a generative AI model to explain complex concepts. The education provider wants to automatically change the style of the model response depending on who is asking the question. The education provider will give the model the age range of the user who has asked the question. Which solution meets these requirements with the LEAST implementation effort?",
        "options": [
            "Fine-tune the model by using additional training data that is representative of the various age ranges that the application will support.",
            "Add a role description to the prompt context that instructs the model of the age range that the response should target.",
            "Use chain-of-thought reasoning to deduce the correct style and complexity for a response suitable for that user.",
            "Summarize the response text depending on the age of the user so that younger users receive shorter responses."
        ],
        "answer": 1
    },
    {
        "question": "A company wants to develop a large language model (LLM) application by using Amazon Bedrock and customer data that is uploaded to Amazon S3. The company’s security policy states that each team can access data for only the team’s own customers. Which solution will meet these requirements?",
        "options": [
            "Create an Amazon Bedrock custom service role for each team that has access to only the team’s customer data.",
            "Create a custom service role that has Amazon S3 access. Ask teams to specify the customer name on each Amazon Bedrock request.",
            "Redact personal data in Amazon S3. Update the S3 bucket policy to allow team access to customer data.",
            "Create one Amazon Bedrock role that has full Amazon S3 access. Create IAM roles for each team that have access to only each team’s customer folders."
        ],
        "answer": 0
    },
    {
        "question": "A company wants to use a large language model (LLM) on Amazon Bedrock for sentiment analysis. The company needs the LLM to produce more consistent responses to the same input prompt. Which adjustment to an inference parameter should the company make to meet these requirements?",
        "options": [
            "Decrease the temperature value.",
            "Increase the temperature value.",
            "Decrease the length of output tokens.",
            "Increase the maximum generation length."
        ],
        "answer": 0
    },
    {
        "question": "A company is deploying a machine learning (ML) research project that will require a lot of compute power over several months. The ML processing jobs do not need to run at specific times. Which Amazon EC2 instance purchasing option will meet these requirements at the lowest cost?",
        "options": [
            "On-Demand Instances",
            "Spot Instances",
            "Reserved Instances",
            "Dedicated Instances"
        ],
        "answer": 1
    },
    {
        "question": "Which strategy evaluates the accuracy of a foundation model (FM) that is used in image classification tasks?",
        "options": [
            "Calculate the total cost of resources used by the model.",
            "Measure the model's accuracy against a predefined benchmark dataset.",
            "Count the number of layers in the neural network.",
            "Assess the color accuracy of images processed by the model."
        ],
        "answer": 1
    },
    {
        "question": "A company is using few-shot prompting on a base model that is hosted on Amazon Bedrock. The model currently uses 10 examples in the prompt. The model is invoked once daily and is performing well. The company wants to lower the monthly cost. Which solution will meet these requirements?",
        "options": [
            "Customize the model by using fine-tuning.",
            "Decrease the number of tokens in the prompt.",
            "Increase the number of tokens in the prompt.",
            "Use Provisioned Throughput."
        ],
        "answer": 1
    },
    {
        "question": "A company has documents that are missing some words because of a database error. The company wants to build an ML model that can suggest potential words to fill in the missing text. Which type of model meets this requirement?",
        "options": [
            "Topic modeling",
            "Clustering models",
            "Prescriptive ML models",
            "BERT-based models"
        ],
        "answer": 3
    },
    {
        "question": "A company has built a solution by using generative AI. The solution uses large language models (LLMs) to translate training manuals from English into other languages. The company wants to evaluate the accuracy of the solution by examining the text generated for the manuals. Which model evaluation strategy meets these requirements?",
        "options": [
            "Bilingual Evaluation Understudy (BLEU)",
            "Root mean squared error (RMSE)",
            "Recall-Oriented Understudy for Gisting Evaluation (ROUGE)",
            "F1 score"
        ],
        "answer": 0
    },
    {
        "question": "A company is building an ML model. The company collected new data and analyzed the data by creating a correlation matrix, calculating statistics, and visualizing the data. Which stage of the ML pipeline is the company currently in?",
        "options": [
            "Data pre-processing",
            "Feature engineering",
            "Exploratory data analysis",
            "Hyperparameter tuning"
        ],
        "answer": 2
    },
    {
        "question": "A company is building a chatbot to improve user experience. The company is using a large language model (LLM) from Amazon Bedrock for intent detection. The company wants to use few-shot learning to improve intent detection accuracy. Which additional data does the company need to meet these requirements?",
        "options": [
            "Pairs of chatbot responses and correct user intents",
            "Pairs of user messages and correct chatbot responses",
            "Pairs of user messages and correct user intents",
            "Pairs of user intents and correct chatbot responses"
        ],
        "answer": 2
    },
    {
        "question": "An accounting firm wants to implement a large language model (LLM) to automate document processing. The firm must proceed responsibly to avoid potential harms. What should the firm do when developing and deploying the LLM? (Choose two)",
        "options": [
            "Include fairness metrics for model evaluation.",
            "Adjust the temperature parameter of the model.",
            "Modify the training data to mitigate bias.",
            "Avoid overfitting on the training data.",
            "Apply prompt engineering techniques."
        ],
        "answer": [0, 2]
    },
    {
        "question": "An AI practitioner is using a large language model (LLM) to create content for marketing campaigns. The generated content sounds plausible and factual but is incorrect. Which problem is the LLM having?",
        "options": [
            "Data leakage",
            "Hallucination",
            "Overfitting",
            "Underfitting"
        ],
        "answer": 1
    },
    {
        "question": "An AI practitioner trained a custom model on Amazon Bedrock by using a training dataset that contains confidential data. The AI practitioner wants to ensure that the custom model does not generate inference responses based on confidential data. How should the AI practitioner prevent responses based on confidential data?",
        "options": [
            "Delete the custom model. Remove the confidential data from the training dataset. Retrain the custom model.",
            "Mask the confidential data in the inference responses by using dynamic data masking.",
            "Encrypt the confidential data in the inference responses by using Amazon SageMaker.",
            "Encrypt the confidential data in the custom model by using AWS Key Management Service (AWS KMS)."
        ],
        "answer": 0
    },
    {
        "question": "A large retailer receives thousands of customer support inquiries about products every day. The customer support inquiries need to be processed and responded to quickly. The company wants to implement Agents for Amazon Bedrock. What are the key benefits of using Amazon Bedrock agents that could help this retailer?",
        "options": [
            "Generation of custom foundation models (FMs) to predict customer needs",
            "Automation of repetitive tasks and orchestration of complex workflows",
            "Automatically calling multiple foundation models (FMs) and consolidating the results",
            "Selecting the foundation model (FM) based on predefined criteria and metrics"
        ],
        "answer": 1
    },
    {
        "question": "Which prompting attack directly exposes the configured behavior of a large language model (LLM)?",
        "options": [
            "Prompt persona switches",
            "Exploiting friendliness and trust",
            "Ignoring the prompt template",
            "Extracting the prompt template"
        ],
        "answer": 3
    },
    {
        "question": "Which AWS service provides highly durable object storage?",
        "options": [
            "Amazon S3",
            "Amazon Elastic File System (Amazon EFS)",
            "Amazon Elastic Block Store (Amazon EBS)",
            "Amazon FSx"
        ],
        "answer": 0
    },
    {
        "question": "Which option is a benefit of ongoing pre-training when fine-tuning a foundation model (FM)?",
        "options": [
            "Helps decrease the model's complexity",
            "Improves model performance over time",
            "Decreases the training time requirement",
            "Optimizes model inference time"
        ],
        "answer": 1
    },
    {
        "question": "A retail store wants to predict the demand for a specific product for the next few weeks by using the Amazon SageMaker DeepAR forecasting algorithm. Which type of data will meet this requirement?",
        "options": [
            "Text data",
            "Image data",
            "Time series data",
            "Binary data"
        ],
        "answer": 2
    },
    {
        "question": "Which tool should a developer use to integrate AWS service features directly into an application?",
        "options": [
            "AWS Software Development Kit",
            "AWS CodeDeploy",
            "AWS Lambda",
            "AWS Batch"
        ],
        "answer": 0
    },
    {
        "question": "A company has a foundation model (FM) that was customized by using Amazon Bedrock to answer customer queries about products. The company wants to validate the model's responses to new types of queries. The company needs to upload a new dataset that Amazon Bedrock can use for validation. Which AWS service meets these requirements?",
        "options": [
            "Amazon S3",
            "Amazon Elastic Block Store (Amazon EBS)",
            "Amazon Elastic File System (Amazon EFS)",
            "AWS Snowcone"
        ],
        "answer": 0
    },
    {
        "question": "A company is using Amazon SageMaker Studio notebooks to build and train ML models. The company stores the data in an Amazon S3 bucket. The company needs to manage the flow of data from Amazon S3 to SageMaker Studio notebooks. Which solution will meet this requirement?",
        "options": [
            "Use Amazon Inspector to monitor SageMaker Studio.",
            "Use Amazon Macie to monitor SageMaker Studio.",
            "Configure SageMaker to use a VPC with an S3 endpoint.",
            "Configure SageMaker to use S3 Glacier Deep Archive."
        ],
        "answer": 2
    },
    {
        "question": "A company wants to assess the costs that are associated with using a large language model (LLM) to generate inferences. The company wants to use Amazon Bedrock to build generative AI applications. Which factor will drive the inference costs?",
        "options": [
            "Number of tokens consumed",
            "Temperature value",
            "Amount of data used to train the LLM",
            "Total training time to train the LLM"
        ],
        "answer": 0
    },
    {
        "question": "What are tokens in the context of generative AI models?",
        "options": [
            "Tokens are the basic units of input and output that a generative AI model operates on, representing words, subwords, or other linguistic units.",
            "Tokens are the mathematical representations of words or concepts used in generative AI models.",
            "Tokens are the pre-trained weights of a generative AI model that are fine-tuned for specific tasks.",
            "Tokens are the specific prompts or instructions given to a generative AI model to generate output."
        ],
        "answer": 0
    },
    {
        "question": "An ML research team develops custom ML models. The model artifacts are shared with other teams for integration into products and services. The ML team retains the model training code and data. The ML team wants to build a mechanism that the ML team can use to audit models. Which solution should the ML team use when publishing the custom ML models?",
        "options": [
            "Create documents with the relevant information. Store the documents in Amazon S3.",
            "Use AWS AI Service Cards for transparency and understanding models.",
            "Create Amazon SageMaker Model Cards with intended uses and training and inference details.",
            "Create model training scripts. Commit the model training scripts to a Git repository."
        ],
        "answer": 2
    },
    {
        "question": "A large retail bank wants to develop an ML system to help the risk management team decide on loan allocations for different demographics. What must the bank do to develop an unbiased ML model?",
        "options": [
            "Reduce the size of the training dataset.",
            "Ensure that the ML model predictions are consistent with historical results.",
            "Create a different ML model for each demographic group.",
            "Measure class imbalance on the training dataset. Adapt the training process accordingly."
        ],
        "answer": 3
    },
    {
        "question": "A company wants to implement a large language model (LLM) based chatbot to provide customer service agents with real-time contextual responses to customers’ inquiries. The company will use the company’s policies as the knowledge base. Which solution will meet these requirements MOST cost-effectively?",
        "options": [
            "Retrain the LLM on the company policy data.",
            "Fine-tune the LLM on the company policy data.",
            "Implement Retrieval Augmented Generation (RAG) for in-context responses.",
            "Use pre-training and data augmentation on the company policy data."
        ],
        "answer": 2
    },
    {
        "question": "A company is using Retrieval Augmented Generation (RAG) with Amazon Bedrock and Stable Diffusion to generate product images based on text descriptions. The results are often random and lack specific details. The company wants to increase the specificity of the generated images. Which solution meets these requirements?",
        "options": [
            "Increase the number of generation steps.",
            "Use the MASK_IMAGE_BLACK mask source option.",
            "Increase the classifier-free guidance (CFG) scale.",
            "Increase the prompt strength."
        ],
        "answer": 2
    },
    {
        "question": "A company is developing an ML model to make loan approvals. The company must implement a solution to detect bias in the model. The company must also be able to explain the model’s predictions. Which solution will meet these requirements?",
        "options": [
            "Amazon SageMaker Clarify",
            "Amazon SageMaker Data Wrangler",
            "Amazon SageMaker Model Cards",
            "AWS AI Service Cards"
        ],
        "answer": 0
    },
    {
        "question": "A company is developing a mobile ML app that uses a phone’s camera to diagnose and treat insect bites. The company wants to train an image classification model by using a diverse dataset of insect bite photos from different genders, ethnicities, and geographic locations around the world. Which principle of responsible AI does the company demonstrate in this scenario?",
        "options": [
            "Fairness",
            "Explainability",
            "Governance",
            "Transparency"
        ],
        "answer": 0
    },
    {
        "question": "A company wants to build a lead prioritization application for its employees to contact potential customers. The application must give employees the ability to view and adjust the weights assigned to different variables in the model based on domain knowledge and expertise. Which ML model type meets these requirements?",
        "options": [
            "Logistic regression model",
            "Deep learning model built on principal components",
            "K-nearest neighbors (k-NN) model",
            "Neural network"
        ],
        "answer": 0
    },
    {
        "question": "A company is implementing intelligent agents to provide conversational search experiences for its customers. The company needs a database service that will support storage and queries of embeddings from a generative AI model as vectors in the database. Which AWS service will meet these requirements?",
        "options": [
            "Amazon Athena",
            "Amazon Aurora PostgreSQL",
            "Amazon Redshift",
            "Amazon EMR"
        ],
        "answer": 1
    },
    {
        "question": "A pharmaceutical company wants to analyze user reviews of new medications and provide a concise overview for each medication. Which solution meets these requirements?",
        "options": [
            "Create a time-series forecasting model to analyze the medication reviews by using Amazon Personalize.",
            "Create medication review summaries by using Amazon Bedrock large language models (LLMs).",
            "Create a classification model that categorizes medications into different groups by using Amazon SageMaker.",
            "Create medication review summaries by using Amazon Rekognition."
        ],
        "answer": 1
    },
    {
        "question": "A company wants to use a large language model (LLM) to generate concise, feature-specific descriptions for the company’s products. Which prompt engineering technique meets these requirements?",
        "options": [
            "Create one prompt that covers all products. Edit the responses to make the responses more specific, concise, and tailored to each product.",
            "Create prompts for each product category that highlight the key features. Include the desired output format and length for each prompt response.",
            "Include a diverse range of product features in each prompt to generate creative and unique descriptions.",
            "Provide detailed, product-specific prompts to ensure precise and customized descriptions."
        ],
        "answer": 1
    },
    {
        "question": "A company wants to create a new solution by using AWS Glue. The company has minimal programming experience with AWS Glue. Which AWS service can help the company use AWS Glue?",
        "options": [
            "Amazon Q Developer",
            "AWS Config",
            "Amazon Personalize",
            "Amazon Comprehend"
        ],
        "answer": 0
    },
    {
        "question": "A manufacturing company uses AI to inspect products and find any damages or defects. Which type of AI application is the company using?",
        "options": [
            "Recommendation system",
            "Natural language processing (NLP)",
            "Computer vision",
            "Image processing"
        ],
        "answer": 2
    },
    {
        "question": "A company wants to create an ML model to predict customer satisfaction. The company needs fully automated model tuning. Which AWS service meets these requirements?",
        "options": [
            "Amazon Personalize",
            "Amazon SageMaker",
            "Amazon Athena",
            "Amazon Comprehend"
        ],
        "answer": 1
    },
    {
        "question": "Which strategy will determine if a foundation model (FM) effectively meets business objectives?",
        "options": [
            "Evaluate the model’s performance on benchmark datasets.",
            "Analyze the model’s architecture and hyperparameters.",
            "Assess the model’s training time.",
            "Measure the computational resources required for model deployment."
        ],
        "answer": 0
    },
    {
        "question": "A company needs to train an ML model to classify images of different types of animals. The company has a large dataset of labeled images and will not label more data. Which type of learning should the company use to train the model?",
        "options": [
            "Supervised learning",
            "Unsupervised learning",
            "Reinforcement learning",
            "Active learning"
        ],
        "answer": 0
    },
    {
        "question": "A company has developed an ML model to predict real estate sale prices. The company wants to deploy the model to make predictions without managing servers or infrastructure. Which solution meets these requirements?",
        "options": [
            "Deploy the model on an Amazon EC2 instance.",
            "Deploy the model on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster.",
            "Deploy the model by using Amazon CloudFront with an Amazon S3 integration.",
            "Deploy the model by using an Amazon SageMaker endpoint."
        ],
        "answer": 3
    },
    {
        "question": "Which phase of the ML lifecycle determines compliance and regulatory requirements?",
        "options": [
            "Feature engineering",
            "Model training",
            "Data collection",
            "Business goal identification"
        ],
        "answer": 3
    },
    {
        "question": "A food service company wants to develop an ML model to help decrease daily food waste and increase sales revenue. The company needs to continuously improve the model’s accuracy. Which solution meets these requirements?",
        "options": [
            "Use Amazon SageMaker and iterate with newer data.",
            "Use Amazon Personalize and iterate with historical data.",
            "Use Amazon CloudWatch to analyze customer orders.",
            "Use Amazon Rekognition to optimize the model."
        ],
        "answer": 0
    },
    {
        "question": "Which technique can a company use to lower bias and toxicity in generative AI applications during the post-processing ML lifecycle?",
        "options": [
            "Human-in-the-loop",
            "Data augmentation",
            "Feature engineering",
            "Adversarial training"
        ],
        "answer": 0
    },
    {
        "question": "A company wants to build an ML application. Select and order the correct steps from the following list to develop a well-architected ML workload. Each step should be selected one time.",
        "options": [
            "Step 1: Deploy model",
            "Step 2: Develop model",
            "Step 3: Monitor model",
            "Step 4: Define business goal and frame ML problem"
        ],
        "answer": [
            3, // Define business goal and frame ML problem
            1, // Develop model
            0, // Deploy model
            2  // Monitor model
        ]
    },
    {
        "question": "A company wants to develop an AI application to help its employees check open customer claims, identify details for a specific claim, and access documents for a claim. Which solution meets these requirements?",
        "options": [
            "Use Agents for Amazon Bedrock with Amazon Fraud Detector to build the application.",
            "Use Agents for Amazon Bedrock with Amazon Bedrock knowledge bases to build the application.",
            "Use Amazon Personalize with Amazon Bedrock knowledge bases to build the application.",
            "Use Amazon SageMaker to build the application by training a new ML model."
        ],
        "answer": 1
    },
    {
        "question": "A company needs to monitor the performance of its ML systems by using a highly scalable AWS service. Which AWS service meets these requirements?",
        "options": [
            "Amazon CloudWatch",
            "AWS CloudTrail",
            "AWS Trusted Advisor",
            "AWS Config"
        ],
        "answer": 0
    },
    {
        "question": "An ecommerce company wants to improve search engine recommendations by customizing the results for each user of the company’s ecommerce platform. Which AWS service meets these requirements?",
        "options": [
            "Amazon Personalize",
            "Amazon Kendra",
            "Amazon Rekognition",
            "Amazon Transcribe"
        ],
        "answer": 0
    },
    {
        "question": "An AI practitioner is developing a prompt for an Amazon Titan model. The model is hosted on Amazon Bedrock. The AI practitioner is using the model to solve numerical reasoning challenges. The AI practitioner adds the following phrase to the end of the prompt: “Ask the model to show its work by explaining its reasoning step by step.” Which prompt engineering technique is the AI practitioner using?",
        "options": [
            "Chain-of-thought prompting",
            "Prompt injection",
            "Few-shot prompting",
            "Prompt templating"
        ],
        "answer": 0
    },
    {
        "question": "Which AWS service makes foundation models (FMs) available to help users build and scale generative AI applications?",
        "options": [
            "Amazon Q Developer",
            "Amazon Bedrock",
            "Amazon Kendra",
            "Amazon Comprehend"
        ],
        "answer": 1
    },
    {
        "question": "A company wants to keep its foundation model (FM) relevant by using the most recent data. The company wants to implement a model training strategy that includes regular updates to the FM. Which solution meets these requirements?",
        "options": [
            "Batch learning",
            "Continuous pre-training",
            "Static training",
            "Latent training"
        ],
        "answer": 1
    },
    {
        "question": "A company wants to enhance response quality for a large language model (LLM) for complex problem-solving tasks. The tasks require detailed reasoning and a step-by-step explanation process. Which prompt engineering technique meets these requirements?",
        "options": [
            "Few-shot prompting",
            "Zero-shot prompting",
            "Directional stimulus prompting",
            "Chain-of-thought prompting"
        ],
        "answer": 3
    },
    {
        "question": "A hospital is developing an AI system to assist doctors in diagnosing diseases based on patient records and medical images. To comply with regulations, the sensitive patient data must not leave the country the data is located in. Which data governance strategy will ensure compliance and protect patient privacy?",
        "options": [
            "Data residency",
            "Data quality",
            "Data discoverability",
            "Data enrichment"
        ],
        "answer": 0
    },
    {
        "question": "A company is building a mobile app for users who have a visual impairment. The app must be able to hear what users say and provide voice responses. Which solution will meet these requirements?",
        "options": [
            "Use a deep learning neural network to perform speech recognition.",
            "Build ML models to search for patterns in numeric data.",
            "Use generative AI summarization to generate human-like text.",
            "Build custom models for image classification and recognition."
        ],
        "answer": 0
    },
    {
        "question": "A bank has fine-tuned a large language model (LLM) to expedite the loan approval process. During an external audit of the model, the company discovered that the model was approving loans at a faster pace for a specific demographic than for other demographics. How should the bank fix the issue MOST cost-effectively?",
        "options": [
            "Include more diverse training data. Fine-tune the model again by using the new data.",
            "Use Retrieval Augmented Generation (RAG) with the fine-tuned model.",
            "Use AWS Trusted Advisor checks to eliminate bias.",
            "Pre-train a new LLM with more diverse training data."
        ],
        "answer": 0
    },
    {
        "question": "A company has developed a large language model (LLM) and wants to make the LLM available to multiple internal teams. The company needs to select the appropriate inference mode for each use case. Each inference mode should be selected one or more times. The company’s chatbot needs predictions from the LLM to understand users’ intent with minimal latency. A data processing job needs to query the LLM to process gigabytes of text files on weekends. The company’s engineering team needs to create an API that can process small pieces of text content and provide low-latency predictions.",
        "options": [
            "The company’s chatbot needs predictions from the LLM to understand users’ intent with minimal latency: Batch transform, Real-time inference, Serverless inference",
            "A data processing job needs to query the LLM to process gigabytes of text files on weekends: Batch transform, Real-time inference, Serverless inference",
            "The company’s engineering team needs to create an API that can process small pieces of text content and provide low-latency predictions: Batch transform, Real-time inference, Serverless inference"
        ],
        "answer": [
            1, // Real-time inference (for chatbot with minimal latency)
            0, // Batch transform (for data processing job with large text files on weekends)
            1  // Real-time inference (for engineering team API with low-latency predictions)
        ]
    },
    {
        "question": "What does an F1 score measure in the context of foundation model (FM) performance?",
        "options": [
            "Model precision and recall",
            "Model speed in generating responses",
            "Financial cost of operating the model",
            "Energy efficiency of the model’s computations"
        ],
        "answer": 0
    },
    {
        "question": "Which option is a benefit of using Amazon SageMaker Model Cards to document AI models?",
        "options": [
            "Providing a visually appealing summary of a model’s capabilities",
            "Standardizing information about a model’s purpose, performance, and limitations",
            "Reducing the overall computational requirements of a model",
            "Physically storing models for archival purposes"
        ],
        "answer": 1
    },
    {
        "question": "A company’s employees provide product descriptions and recommendations to customers when customers call the customer service center. These recommendations are based on where the customers are located. The company wants to use foundation models (FMs) to automate this process. Which AWS service meets these requirements?",
        "options": [
            "Amazon Macie",
            "Amazon Transcribe",
            "Amazon Bedrock",
            "Amazon Textract"
        ],
        "answer": 2
    },
    {
        "question": "A company’s large language model (LLM) is experiencing hallucinations. How can the company decrease hallucinations?",
        "options": [
            "Set Agents for Amazon Bedrock to supervise the model training",
            "Use data pre-processing and remove any data that causes hallucinations",
            "Decrease the temperature inference parameter for the model",
            "Use a foundation model (FM) that is trained to not hallucinate"
        ],
        "answer": 2
    },
    {
        "question": "An ecommerce company is using a generative AI chatbot to respond to customer inquiries. The company wants to measure the financial effect of the chatbot on the company’s operations. Which metric should the company use?",
        "options": [
            "Number of customer inquiries handled",
            "Cost of training AI models",
            "Cost for each customer conversation",
            "Average handled time (AHT)"
        ],
        "answer": 2
    },
    {
        "question": "A company is using a large language model (LLM) on Amazon Bedrock to build a chatbot. The chatbot processes customer support requests. To resolve a request, the customer and the chatbot must interact a few times. Which solution gives the LLM the ability to use content from previous customer messages?",
        "options": [
            "Turn on model invocation logging to collect messages",
            "Add messages to the model prompt",
            "Use Amazon Personalize to save conversation history",
            "Use Provisioned Throughput for the LLM"
        ],
        "answer": 1
    },
    {
        "question": "A company wants to deploy some of its resources in the AWS Cloud. To meet regulatory requirements, the data must remain local and on premises. There must be low latency between AWS and the company resources. Which AWS service or feature can be used to meet these requirements?",
        "options": [
            "AWS Local Zones",
            "Availability Zones",
            "AWS Outposts",
            "AWS Wavelength Zones"
        ],
        "answer": 2
    },
    {
        "question": "A company wants to upload customer service email messages to Amazon S3 to develop a business analysis application. The messages sometimes contain sensitive data. The company wants to receive an alert every time sensitive information is found. Which solution fully automates the sensitive information detection process with the LEAST development effort?",
        "options": [
            "Configure Amazon Macie to detect sensitive information in the documents that are uploaded to Amazon S3",
            "Use Amazon SageMaker endpoints to deploy a large language model (LLM) to redact sensitive data",
            "Develop multiple regex patterns to detect sensitive data. Expose the regex patterns on an Amazon SageMaker notebook",
            "Ask the customers to avoid sharing sensitive information in their email messages"
        ],
        "answer": 0
    },
    {
        "question": "A company deployed an AI/ML solution to help customer service agents respond to frequently asked questions. The questions can change over time. The company wants to give customer service agents the ability to ask questions and receive automatically generated answers to common customer questions. Which strategy will meet these requirements MOST cost-effectively?",
        "options": [
            "Fine-tune the model regularly",
            "Train the model by using context data",
            "Pre-train and benchmark the model by using context data",
            "Use Retrieval Augmented Generation (RAG) with prompt engineering techniques"
        ],
        "answer": 3
    },
    {
        "question": "A company wants to develop ML applications to improve business operations and efficiency. Select the correct ML paradigm from the following list for each use case. Each ML paradigm should be selected one or more times.",
        "options": [
            "Binary classification: Supervised learning, Unsupervised learning",
            "Multi-class classification: Supervised learning, Unsupervised learning",
            "K-means clustering: Supervised learning, Unsupervised learning",
            "Dimensionality reduction: Supervised learning, Unsupervised learning"
        ],
        "answer": [
            0, // Binary classification: Supervised learning
            0, // Multi-class classification: Supervised learning
            1, // K-means clustering: Unsupervised learning
            1  // Dimensionality reduction: Unsupervised learning
        ]
    },
    {
        "question": "A global financial company has developed an ML application to analyze stock market data and provide stock market trends. The company wants to continuously monitor the application development phases and to ensure that company policies and industry regulations are followed. Which AWS services will help the company assess compliance requirements? (Choose two)",
        "options": [
            "AWS Audit Manager",
            "AWS Config",
            "Amazon Inspector",
            "Amazon CloudWatch",
            "AWS CloudTrail"
        ],
        "answer": [0, 1]
    },
    {
        "question": "A company wants to improve the accuracy of the responses from a generative AI application. The application uses a foundation model (FM) on Amazon Bedrock. Which solution meets these requirements MOST cost-effectively?",
        "options": [
            "Fine-tune the FM",
            "Retrain the FM",
            "Train a new FM",
            "Use prompt engineering"
        ],
        "answer": 3
    },
    {
        "question": "A company built an AI-powered resume screening system. The company used a large dataset to train the model. The dataset contained resumes that were not representative of all demographics. Which core dimension of responsible AI does this scenario present?",
        "options": [
            "Fairness",
            "Explainability",
            "Privacy and security",
            "Transparency"
        ],
        "answer": 0
    },
    {
        "question": "A manufacturing company wants to create product descriptions in multiple languages. Which AWS service will automate this task?",
        "options": [
            "Amazon Translate",
            "Amazon Transcribe",
            "Amazon Kendra",
            "Amazon Polly"
        ],
        "answer": 0
    },
    {
        "question": "A media company wants to analyze viewer behavior and demographics to recommend personalized content. The company wants to deploy a customized ML model in its production environment. The company also wants to observe if the model quality drifts over time. Which AWS service or feature meets these requirements?",
        "options": [
            "Amazon Rekognition",
            "Amazon SageMaker Clarify",
            "Amazon Comprehend",
            "Amazon SageMaker Model Monitor"
        ],
        "answer": 3
    },
    {
        "question": "A company wants to identify harmful language in the comments section of social media posts by using an ML model. The company will not use labeled data to train the model. Which strategy should the company use to identify harmful language?",
        "options": [
            "Use Amazon Rekognition moderation",
            "Use Amazon Comprehend toxicity detection",
            "Use Amazon SageMaker built-in algorithms to train the model",
            "Use Amazon Polly to monitor comments"
        ],
        "answer": 1
    },
    {
        "question": "A company wants to develop ML applications to improve business operations and efficiency. Select the correct ML paradigm from the following list for each use case. Each ML paradigm should be selected one or more times.",
        "options": [
            "Binary classification: Supervised learning, Unsupervised learning",
            "Multi-class classification: Supervised learning, Unsupervised learning",
            "K-means clustering: Supervised learning, Unsupervised learning",
            "Dimensionality reduction: Supervised learning, Unsupervised learning"
        ],
        "answer": [
            0, // Binary classification: Supervised learning
            0, // Multi-class classification: Supervised learning
            1, // K-means clustering: Unsupervised learning
            1  // Dimensionality reduction: Unsupervised learning
        ]
    }
]