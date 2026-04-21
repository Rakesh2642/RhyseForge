
const questions = [
    {
        "question": "Generative AI Engineer at an electronics company just deployed a RAG application for customers to ask questions about products that the company carries. However, they received feedback that the RAG response often returns information about an irrelevant product.\n\nWhat can the engineer do to improve the relevance of the RAG's response?",
        "options": [
            "Assess the quality of the retrieved context",
            "Implement caching for frequently asked questions",
            "Use a different LLM to improve the generated response",
            "Use a different semantic similarity search algorithm"
        ],
        "answer": 0
    },
    {
        "question": "A Generative AI Engineer is testing a simple prompt template in LangChain using the code below, but is getting an error.\n\n```python\nfrom langchain.chains import LLMChain\nfrom langchain_community.llms import OpenAI\nfrom langchain_core.prompts import PromptTemplate\n\nprompt_template = \"Tell me a {adjective} joke\"\n\nprompt = PromptTemplate(\n    input_variables=[\"adjective\"],\n    template=prompt_template\n)\n\nllm = LLMChain(prompt=prompt)\nllm.generate({\"adjective\": \"funny\"})\n```\n\nAssuming the API key was properly defined, what change does the Generative AI Engineer need to make to fix their chain?",
        "options": [
            "prompt = PromptTemplate(input_variables=[\"adjective\"], template=prompt_template)\nllm = LLMChain(prompt=prompt)\nllm.generate(\"funny\")",
            "prompt = PromptTemplate(input_variables=[\"adjective\"], template=prompt_template)\nllm = LLMChain(prompt=prompt.format(\"funny\"))\nllm.generate()",
            "prompt = PromptTemplate(input_variables=[\"adjective\"], template=prompt_template)\nllm=OpenAI()\nllm = LLMChain(prompt=prompt)\nllm.generate({\"adjective\": \"funny\"})",
            "prompt = PromptTemplate(input_variables=[\"adjective\"], template=prompt_template)\nllm = LLMChain(llm=OpenAI(), prompt=prompt)\nllm.generate({\"adjective\": \"funny\"})"
        ],
        "answer": 3
    },
    {
        "question": "A Generative AI Engineer has been asked to build an LLM-based question-answering application. The application should take into account new documents that are frequently published. The engineer wants to build this application with the least cost and least development effort and have it operate at the lowest cost possible.\n\nWhich combination of chaining components and configuration meets these requirements?",
        "options": [
            "For the application a prompt, a retriever, and an LLM are required. The retriever output is inserted into the prompt which is given to the LLM to generate answers.",
            "The LLM needs to be frequently fine-tuned with the new documents in order to provide most up-to-date answers.",
            "For the question-answering application, prompt engineering and an LLM are required to generate answers.",
            "For the application a prompt, an agent, and a fine-tuned LLM are required. The agent is used by the LLM to retrieve relevant content that is inserted into the prompt which is given to the LLM to generate answers."
        ],
        "answer": 0
    },
    {
        "question": "A Generative AI Engineer is creating an LLM system that will retrieve news articles from the year 1918 and related to a user's query and summarize them. The engineer has noticed that the summaries are generated well but often also include an explanation of how the summary was generated, which is undesirable.\n\nWhich change could the Generative AI Engineer perform to mitigate this issue?",
        "options": [
            "Split the LLM output by newline characters to truncate away the summarization explanation.",
            "Tune the chunk size of news articles or experiment with different embedding models.",
            "Revisit their document ingestion logic, ensuring that the news articles are being ingested properly.",
            "Provide few shot examples of desired output format to the system and/or user prompt."
        ],
        "answer": 3
    },
    {
        "question": "A Generative AI Engineer interfaces with an LLM with prompt/response behavior that has been trained on customer calls inquiring about product availability. The LLM is designed to output \"In Stock\" if the product is available or only the term \"Out of Stock\" if not.\n\nWhich prompt will work to allow the engineer to respond to call classification labels correctly?",
        "options": [
            "Respond with \"In Stock\" if the customer asks for a product.",
            "You will be given a customer call transcript where the customer asks about product availability. The outputs are either \"In Stock\" or \"Out of Stock\". Format the output in JSON, for example: {\"call_id\": \"123\", \"label\": \"In Stock\"}.",
            "Respond with \"Out of Stock\" if the customer asks for a product.",
            "You will be given a customer call transcript where the customer inquires about product availability. Respond with \"In Stock\" if the product is available or \"Out of Stock\" if not."
        ],
        "answer": 3
    },
    {
        "question": "A Generative AI Engineer is designing a chatbot for a gaming company that aims to engage users on its platform while its users play online video games.\n\nWhich metric would help them increase user engagement and retention for the platform?",
        "options": [
            "Randomness",
            "Diversity of responses",
            "Lack of relevance",
            "Repetition of responses"
        ],
        "answer": 1
    },
    {
        "question": "A Generative AI Engineer is creating an LLM-powered application that will need access to up-to-date news articles and stock prices.\n\nThe design requires the use of stock prices which are stored in Delta tables and finding the latest relevant news articles by searching the internet.\n\nHow should the Generative AI Engineer architect their LLM system?",
        "options": [
            "Use an LLM to summarize the latest news articles and lookup stock tickers from the summaries to find stock prices.",
            "Query the Delta table for volatile stock prices and use an LLM to generate a search query to investigate potential causes of the stock volatility.",
            "Download and store news articles and stock price information in a vector store. Use a RAG architecture to retrieve and generate at runtime.",
            "Create an agent with tools for SQL querying of Delta tables and web searching, provide retrieved values to an LLM for generation of response."
        ],
        "answer": 3
    },
    {
        "question": "A Generative AI Engineer is developing a patient-facing healthcare-focused chatbot. If the patient's question is not a medical emergency, the chatbot should solicit more information from the patient to pass to the doctor's office and suggest a few relevant pre-approved medical articles for reading. If the patient's question is urgent, direct the patient to calling their local emergency services.\n\nGiven the following user input:\n\n'I have been experiencing severe headaches and dizziness for the past two days.'\n\nWhich response is most appropriate for the chatbot to generate?",
        "options": [
            "Here are a few relevant articles for your browsing. Let me know if you have questions after reading them.",
            "Please call the local emergency services.",
            "Headaches can be tough. Hope you feel better soon!",
            "Please provide your age, recent activities, and any other symptoms you have noticed along with your headaches and dizziness."
        ],
        "answer": 3
    },
    {
        "question": "A Generative AI Engineer is building an LLM to generate article summaries in the form of a type of poem, such as a haiku, given the article content. However, the initial output from the LLM does not match the desired tone or style.\n\nWhich approach will NOT improve the LLM's response to achieve the desired response?",
        "options": [
            "Provide the LLM with a prompt that explicitly instructs it to generate text in the desired tone and style",
            "Use a neutralizer to normalize the tone and style of the underlying documents",
            "Include few-shot examples in the prompt to the LLM",
            "Fine-tune the LLM on a dataset of desired tone and style"
        ],
        "answer": 1
    },
    {
        "question": "A company has a typical RAG-enabled, customer-facing chatbot on its website.\n\nSelect the correct sequence of components a user's questions will go through before the final output is returned. Use the diagram above for reference.",
        "options": [
            "1. embedding model, 2. vector search, 3. context-augmented prompt, 4. response-generating LLM",
            "1. context-augmented prompt, 2. vector search, 3. embedding model, 4. response-generating LLM",
            "1. response-generating LLM, 2. vector search, 3. context-augmented prompt, 4. embedding model",
            "1. response-generating LLM, 2. context-augmented prompt, 3. vector search, 4. embedding model"
        ],
        "answer": 0
    },
    {
        "question": "A Generative AI Engineer has successfully ingested unstructured documents and chunked them by document sections. They would like to store the chunks in a Vector Search index. The current format of the dataframe has two columns: (i) original document file name (ii) an array of text chunks for each document.\n\nWhat is the most performant way to store this dataframe?",
        "options": [
            "Split the data into train and test set, create a unique identifier for each document, then save to a Delta table",
            "Flatten the dataframe to one chunk per row, create a unique identifier for each row, and save to a Delta table",
            "First create a unique identifier for each document, then save to a Delta table",
            "Store each chunk as an independent JSON file in Unity Catalog Volume. For each JSON file, the key is the document section name and the value is the array of text chunks for that section"
        ],
        "answer": 1
    },
    {
        "question": "A Generative AI Engineer is building a system which will answer questions on latest stock news articles.\n\nWhich will NOT help with ensuring the outputs are relevant to financial news?",
        "options": [
            "Implement a comprehensive guardrail framework that includes policies for content filters tailored to the finance sector.",
            "Increase the compute to improve processing speed of questions to allow greater relevancy analysis",
            "Implement a profanity filter to screen out offensive language.",
            "Incorporate manual reviews to correct any problematic outputs prior to sending to the users"
        ],
        "answer": 2
    },
    {
        "question": "A Generative AI Engineer developed an LLM application using the provisioned throughput Foundation Model API. Now that the application is ready to be deployed, they realize their volume of requests are not sufficiently high enough to create their own provisioned throughput endpoint. They want to choose a strategy that ensures the best cost-effectiveness for their application.\n\nWhat strategy should the Generative AI Engineer use?",
        "options": [
            "Switch to using External Models instead",
            "Deploy the model using pay-per-token throughput as it comes with cost guarantees",
            "Change to a model with a fewer number of parameters in order to reduce hardware constraint issues",
            "Throttle the incoming batch of requests manually to avoid rate limiting issues"
        ],
        "answer": 1
    },
    {
        "question": "A Generative AI Engineer is using the code below to test setting up a vector store:\n\n```python\nfrom databricks.vector_search.client import VectorSearchClient\n\nvsc = VectorSearchClient()\n\nvsc.create_endpoint(\n    name=\"vector_search_test\",\n    endpoint_type=\"STANDARD\"\n)\n```\n\nAssuming they intend to use Databricks managed embeddings with the default embedding model, what should be the next logical function call?",
        "options": [
            "vsc.get_index()",
            "vsc.create_delta_sync_index()",
            "vsc.create_direct_access_index()",
            "vsc.similarity_search()"
        ],
        "answer": 1
    },
    {
        "question": "A Generative AI Engineer has created a RAG application which can help employees retrieve answers from an internal knowledge base, such as Confluence pages or Google Drive. The prototype application is now working with some positive feedback from internal company testers. Now the Generative AI Engineer wants to formally evaluate the system's performance and understand where to focus their efforts to further improve the system.\n\nHow should the Generative AI Engineer evaluate the system?",
        "options": [
            "Use cosine similarity score to comprehensively evaluate the quality of the final generated answers.",
            "Curate a dataset that can test the retrieval and generation components of the system separately. Use MLflow's built in evaluation metrics to perform the evaluation on the retrieval and generation components.",
            "Benchmark multiple LLMs with the same data and pick the best LLM for the job.",
            "Use an LLM-as-a-judge to evaluate the quality of the final answers generated."
        ],
        "answer": 1
    },
    {
        "question": "Which indicator should be considered to evaluate the safety of the LLM outputs when qualitatively assessing LLM responses for a translation use case?",
        "options": [
            "The ability to generate responses in code",
            "The similarity to the previous language",
            "The latency of the response and the length of text generated",
            "The accuracy and relevance of the responses"
        ],
        "answer": 3
    },
    {
        "question": "A Generative AI Engineer received the following business requirements for an external chatbot.\n\nThe chatbot needs to know what types of questions the user asks and routes to appropriate models to answer the questions. For example, the user might ask about upcoming event details. Another user might ask about purchasing tickets for a particular event.\n\nWhat is an ideal workflow for such a chatbot?",
        "options": [
            "The chatbot should only look at previous event information",
            "There should be two different chatbots handling different types of user queries.",
            "The chatbot should be implemented as a multi-step LLM workflow. First, identify the type of question asked, then route the question to the appropriate model. If it's an upcoming event question, send the query to a text-to-SQL model. If it's about ticket purchasing, the customer should be redirected to a payment platform.",
            "The chatbot should only process payments"
        ],
        "answer": 2
    },
    {
        "question": "A Generative AI Engineer just deployed an LLM application at a digital marketing company that assists with answering customer service inquiries.\n\nWhich metric should they monitor for their customer service LLM application in production?",
        "options": [
            "Number of customer inquiries processed per unit of time",
            "Energy usage per query",
            "Final perplexity scores for the training of the model",
            "HuggingFace Leaderboard values for the base LLM"
        ],
        "answer": 0
    },
    {
        "question": "A Generative AI Engineer is designing an LLM-powered live sports commentary platform. The platform provides real-time updates and LLM-generated analyses for any users who would like to have live summaries, rather than reading a series of potentially outdated news articles.\n\nWhich tool below will give the platform access to real-time data for generating game analyses based on the latest game scores?",
        "options": [
            "DatabricksIQ",
            "Foundation Model APIs",
            "Feature Serving",
            "AutoML"
        ],
        "answer": 2
    },
    {
        "question": "Generative AI Engineer at an electronics company just deployed a RAG application for customers to ask questions about products that the company carries. However, they received feedback that the RAG response often returns information about an irrelevant product.\n\nWhat can the engineer do to improve the relevance of the RAG's response?",
        "options": [
            "Assess the quality of the retrieved context",
            "Implement caching for frequently asked questions",
            "Use a different LLM to improve the generated response",
            "Use a different semantic similarity search algorithm"
        ],
        "answer": 0
    },
    {
        "question": "A Generative AI Engineer is building a Generative AI system that suggests the best matched employee team member to newly scoped projects. The team member is selected from a very large team. The match should be based upon project date availability and how well their employee profile matches the project scope. Both the employee profile and project scope are unstructured text.\n\nHow should the Generative AI Engineer architect their system?",
        "options": [
            "Create a tool for finding available team members given project dates. Embed all project scopes into a vector store, perform a retrieval using team member profiles to find the best team member.",
            "Create a tool for finding team member availability given project dates, and another tool that uses an LLM to extract keywords from project scopes. Iterate through available team members' profiles and perform keyword matching to find the best available team member.",
            "Create a tool to find available team members given project dates. Create a second tool that can calculate a similarity score for a combination of team member profile and the project scope. Iterate through the team members and rank by best score to select a team member.",
            "Create a tool for finding available team members given project dates. Embed team profiles into a vector store and use the project scope and filtering to perform retrieval to find the available best matched team members."
        ],
        "answer": 3
    },
    {
        "question": "A Generative AI Engineer has created a RAG application to look up answers to questions about a series of fantasy novels that are being asked on the author’s web forum. The fantasy novel texts are chunked and embedded into a vector store with metadata (page number, chapter number, book title), retrieved with the user’s query, and provided to an LLM for response generation. The Generative AI Engineer used their intuition to pick the chunking strategy and associated configurations but now wants to more methodically choose the best values.\n\nWhich TWO strategies should the Generative AI Engineer take to optimize their chunking strategy and parameters? (Choose two.)",
        "options": [
            "Change embedding models and compare performance.",
            "Add a classifier for user queries that predicts which book will best contain the answer. Use this to filter retrieval.",
            "Choose an appropriate evaluation metric (such as recall or NDCG) and experiment with changes in the chunking strategy, such as splitting chunks by paragraphs or chapters. Choose the strategy that gives the best performance metric.",
            "Pass known questions and best answers to an LLM and instruct the LLM to provide the best token count. Use a summary statistic (mean, median, etc.) of the best token counts to choose chunk size.",
            "Create an LLM-as-a-judge metric to evaluate how well previous questions are answered by the most appropriate chunk. Optimize the chunking parameters based upon the values of the metric."
        ],
        "answer": [2, 4]
    },
    {
        "question": "A Generative AI Engineer is designing a RAG application for answering user questions on technical regulations as they learn a new sport.\n\nWhat are the steps needed to build this RAG application and deploy it?",
        "options": [
            "Ingest documents from a source –> Index the documents and saves to Vector Search –> User submits queries against an LLM –> LLM retrieves relevant documents –> Evaluate model –> LLM generates a response –> Deploy it using Model Serving",
            "Ingest documents from a source –> Index the documents and save to Vector Search –> User submits queries against an LLM –> LLM retrieves relevant documents –> LLM generates a response -> Evaluate model –> Deploy it using Model Serving",
            "Ingest documents from a source –> Index the documents and save to Vector Search –> Evaluate model –> Deploy it using Model Serving",
            "User submits queries against an LLM –> Ingest documents from a source –> Index the documents and save to Vector Search –> LLM retrieves relevant documents –> LLM generates a response –> Evaluate model –> Deploy it using Model Serving"
        ],
        "answer": 1
    },
    {
        "question": "A Generative AI Engineer just deployed an LLM application at a digital marketing company that assists with answering customer service inquiries.\n\nWhich metric should they monitor for their customer service LLM application in production?",
        "options": [
            "Number of customer inquiries processed per unit of time",
            "Energy usage per query",
            "Final perplexity scores for the training of the model",
            "HuggingFace Leaderboard values for the base LLM"
        ],
        "answer": 0
    },
    {
        "question": "A Generative AI Engineer is building a Generative AI system that suggests the best matched employee team member to newly scoped projects. The team member is selected from a very large team. The match should be based upon project date availability and how well their employee profile matches the project scope. Both the employee profile and project scope are unstructured text.\n\nHow should the Generative AI Engineer architect their system?",
        "options": [
            "Create a tool for finding available team members given project dates. Embed all project scopes into a vector store, perform a retrieval using team member profiles to find the best team member.",
            "Create a tool for finding team member availability given project dates, and another tool that uses an LLM to extract keywords from project scopes. Iterate through available team members’ profiles and perform keyword matching to find the best available team member.",
            "Create a tool to find available team members given project dates. Create a second tool that can calculate a similarity score for a combination of team member profile and the project scope. Iterate through the team members and rank by best score to select a team member.",
            "Create a tool for finding available team members given project dates. Embed team profiles into a vector store and use the project scope and filtering to perform retrieval to find the available best matched team members."
        ],
        "answer": 3
    },
    {
        "question": "A Generative AI Engineer is designing an LLM-powered live sports commentary platform. The platform provides real-time updates and LLM-generated analyses for any users who would like to have live summaries, rather than reading a series of potentially outdated news articles.\n\nWhich tool below will give the platform access to real-time data for generating game analyses based on the latest game scores?",
        "options": [
            "DatabricksIQ",
            "Foundation Model APIs",
            "Feature Serving",
            "AutoML"
        ],
        "answer": 2
    },
    {
        "question": "A Generative AI Engineer has a provisioned throughput model serving endpoint as part of a RAG application and would like to monitor the serving endpoint’s incoming requests and outgoing responses. The current approach is to include a micro-service in between the endpoint and the user interface to write logs to a remote server.\n\nWhich Databricks feature should they use instead which will perform the same task?",
        "options": [
            "Vector Search",
            "Lakeview",
            "DBSQL",
            "Inference Tables"
        ],
        "answer": 3
    },
    {
        "question": "A Generative AI Engineer is tasked with improving the RAG quality by addressing its inflammatory outputs.\n\nWhich action would be most effective in mitigating the problem of offensive text outputs?",
        "options": [
            "Increase the frequency of upstream data updates",
            "Inform the user of the expected RAG behavior",
            "Restrict access to the data sources to a limited number of users",
            "Curate upstream data properly that includes manual review before it is fed into the RAG system"
        ],
        "answer": 3
    },
    {
        "question": "A Generative AI Engineer is creating an LLM-based application. The documents for its retriever have been chunked to a maximum of 512 tokens each. The Generative AI Engineer knows that cost and latency are more important than quality for this application. They have several context length levels to choose from.\n\nWhich will fulfill their need?",
        "options": [
            "context length 514; smallest model is 0.44GB and embedding dimension 768",
            "context length 2048: smallest model is 11GB and embedding dimension 2560",
            "context length 32768: smallest model is 14GB and embedding dimension 4096",
            "context length 512: smallest model is 0.13GB and embedding dimension 384"
        ],
        "answer": 3
    },
    {
        "question": "A small and cost-conscious startup in the cancer research field wants to build a RAG application using Foundation Model APIs.\n\nWhich strategy would allow the startup to build a good-quality RAG application while being cost-conscious and able to cater to customer needs?",
        "options": [
            "Limit the number of relevant documents available for the RAG application to retrieve from",
            "Pick a smaller LLM that is domain-specific",
            "Limit the number of queries a customer can send per day",
            "Use the largest LLM possible because that gives the best performance for any general queries"
        ],
        "answer": 1
    },
    {
        "question": "A Generative AI Engineer is responsible for developing a chatbot to enable their company’s internal HelpDesk Call Center team to more quickly find related tickets and provide resolution. While creating the GenAI application work breakdown tasks for this project, they realize they need to start planning which data sources (either Unity Catalog volume or Delta table) they could choose for this application. They have collected several candidate data sources for consideration: call_rep_history: a Delta table with primary keys representative_id, call_id. This table is maintained to calculate representatives’ call resolution from fields call_duration and call start_time. transcript Volume: a Unity Catalog Volume of all recordings as a *.wav files, but also a text transcript as *.txt files. call_cust_history: a Delta table with primary keys customer_id, call_id. This table is maintained to calculate how much internal customers use the HelpDesk to make sure that the charge back model is consistent with actual service use. call_detail: a Delta table that includes a snapshot of all call details updated hourly. It includes root_cause and resolution fields, but those fields may be empty for calls that are still active. maintenance_schedule – a Delta table that includes a listing of both HelpDesk application outages as well as planned upcoming maintenance downtimes.\n\nThey need sources that could add context to best identify ticket root cause and resolution.\n\nWhich TWO sources do that? (Choose two.)",
        "options": [
            "call_cust_history",
            "maintenance_schedule",
            "call_rep_history",
            "call_detail",
            "transcript Volume"
        ],
        "answer": [3, 4]
    },
    {
        "question": "A Generative AI Engineer is tasked with improving the safety and reliability of a RAG system used in a public-facing application. The system has occasionally produced outputs containing biased or inappropriate content, which has raised concerns.\n\nWhich approach would best reduce the likelihood of generating such harmful content?\n\nChoose only ONE best answer.",
        "options": [
            "Implement a feedback loop where users can report offensive content, and the system learns to avoid similar outputs in the future.",
            "Increase the diversity of the training data to ensure the RAG system is exposed to a wider range of perspectives.",
            "Conduct a thorough review and filtering of the external data sources before they are used in the RAG system.",
            "Limit the complexity of the user inputs to prevent the RAG system from generating unpredictable responses."
        ],
        "answer": 2
    },
    {
        "question": "A Generative AI Engineer is designing an AI-driven virtual assistant for a hotel chain to improve the online booking experience by automating responses to frequently asked questions. The aim is to reduce the reliance on human staff for routine inquiries while ensuring interactions feel personalized. What design choice should the developer make to best achieve this?\n\nChoose only ONE best answer.",
        "options": [
            "Input: Guest feedback forms; Output: Analyze feedback to identify common issues",
            "Input: Customer chat interactions; Output: Interactive prompts options for selecting reservation details",
            "Input: Email queries; Output: Standardized responses for booking cancellations",
            "Input: Phone call transcriptions; Output: Summarize key topics discussed in calls"
        ],
        "answer": 1
    },
    {
        "question": "When developing an AI application, it’s important to ensure that the data used for training the model is compliant with copyright and licensing regulations to avoid potential legal issues.\n\nWhich of the following practices is LEAST effective in mitigating legal risks associated with data usage?\n\nChoose only ONE best answer.",
        "options": [
            "Conduct a thorough review of the data sources to confirm that all content used is under appropriate open licenses and comply with their terms.",
            "Obtain explicit permission from data owners or curators before utilizing their data for model training.",
            "Assume that any publicly accessible data on the internet is free to use for training purposes without needing to check licensing terms.",
            "Use only datasets that you or your organization have created and have full rights to use, ensuring clear documentation of ownership."
        ],
        "answer": 2
    },
    {
        "question": "A Generative AI Engineer is tasked with developing an AI-powered system for a recruiting firm that matches candidates to contract job openings with fixed ending dates. The system must consider the availability of candidates based on the end date of their current contracts, ensuring they are not currently committed to another contract that overlaps with the new job. Additionally, the system needs to assess the relevance of the candidates' expertise, as described in their unstructured resumes, to the job descriptions.\n\nWhat is the most effective approach the engineer should use to design this candidate matching system for contract jobs?",
        "options": [
            "Develop a system that first filters candidates based on their contract end dates to ensure availability, then applies a NLP model to directly compare job descriptions and candidate resumes for a match.",
            "Build a system where candidate resumes are embedded into a vector store and job descriptions are converted into keywords. The system then performs keyword matching and filters based on contract end dates to find the best candidate.",
            "Create an architecture that first filters candidates by their contract end dates, ensuring no overlap with the new job, and then uses a combination of keyword extraction from job descriptions and Exact Neighbor Searches of candidate resumes to find the best match.",
            "Design a system that embeds both candidate resumes and job descriptions into a shared vector space, enabling semantic search. The system first filters candidates based on their contract end dates to ensure they are available, then performs a vector similarity search to identify the best matching candidate."
        ],
        "answer": 3
    },
    {
        "question": "An AI Engineer is working on a project to enhance an internal system with a chatbot that can assist in troubleshooting issues by analyzing past call center interactions. The chatbot needs to be trained on data that will allow it to understand the nature of the problems reported and how they were resolved.\n\nThe engineer has access to the following datasets:\n\nagent_performance: Contains metrics related to chatbot agent efficiency, including call resolution times and customer satisfaction ratings.\nissue_resolutions: A Delta table that logs the issues reported in each call, including timestamps, issue descriptions, and resolution steps. It is updated in real-time as new issues are logged and resolved.\ncall_transcripts: A Unity Catalog Volume containing the text of call transcripts, capturing the dialogue between customers and chatbot agents.\nsystem_logs: Logs detailing the operational status of the IT systems supported by the chatbot, including outages and maintenance schedules.\ncustomer_interactions: A Delta table tracking the history of interactions each customer has had with the chatbot, including prior issues and outcomes.\n\nTo effectively train the chatbot to diagnose and resolve issues, which TWO datasets should the engineer focus on using?\n\nChoose ALL answers that apply.",
        "options": [
            "agent_performance",
            "issue_resolutions",
            "call_transcripts",
            "system_logs",
            "customer_interactions"
        ],
        "answer": [1, 2]
    },
    {
        "question": "A Generative AI Engineer is tasked with developing an AI-driven assistant for a social media platform aimed at enhancing user interaction during live streaming sessions. To optimize user engagement and retention, which characteristic of the AI assistant's responses should they prioritize?\n\nChoose only ONE best answer.",
        "options": [
            "Consistent repetition",
            "Variety in responses",
            "Predictable patterns",
            "Hallucination but Creative Responses"
        ],
        "answer": 1
    },
    {
        "question": "A Generative AI Engineer is tasked with building a low-cost, low-maintenance LLM-based system that can answer questions by incorporating the latest information from regularly updated documents. The goal is to ensure that the system remains current without requiring frequent updates or costly tuning.\n\nWhich setup would best achieve this balance of cost efficiency and up-to-date information?\n\nChoose only ONE best answer.",
        "options": [
            "Utilize a retriever to dynamically fetch the most recent documents, and integrate its output with the LLM’s prompt to generate answers.",
            "Implement a pipeline where the LLM is continuously fine-tuned with new documents to ensure the most accurate responses.",
            "Rely on static embeddings created from the initial set of documents and pass these to the LLM for generating responses.",
            "Build the system with a pre-trained LLM and manually update the model every time new documents are published."
        ],
        "answer": 0
    },
    {
        "question": "What is the purpose of using mlflow.pyfunc.spark_udf in the context of a registered model in Unity Catalog?\n\nChoose only ONE best answer.",
        "options": [
            "None of the options",
            "To parallelize the model inference for faster processing",
            "To compress the model for storage using apache arrows",
            "To reduce the model's response time",
            "To generate feature importance scores"
        ],
        "answer": 1
    },
    {
        "question": "A Generative AI Engineer is optimizing a LLM pipeline that processes customer feedback for sentiment analysis. They recently replaced their Closed source LLM model with a custom LLM model that has a shorter context length. Since this change, they have encountered issues with the pipeline failing due to input data exceeding the token limit.\n\nWhich adjustments should the Generative AI Engineer consider to resolve the token limit issues without modifying the custom LLM model itself?\n\nChoose only ONE best answer.",
        "options": [
            "Fine-tune the response generating model to handle longer inputs.",
            "Reduce the chunk size of the input document to ensure the token count stays within the model's limit.",
            "Implement a sliding window approach to reduce the length of each context chunk.",
            "Increase the computational resources allocated to the custom model.",
            "Use a more advanced tokenizer that produces fewer tokens."
        ],
        "answer": 2
    },
    {
        "question": "In a typical LangChain workflow, which component is responsible for getting back relevant documents or information?\n\nChoose only ONE best answer.",
        "options": [
            "The prompt",
            "The model",
            "The retriever",
            "The tool",
            "The optimizer"
        ],
        "answer": 2
    },
    {
        "question": "A Generative AI Engineer is tasked with developing a system that provides users with accurate and relevant summaries of the latest financial market trends based on recent news articles.\n\nWhich of the following actions would be LEAST effective in ensuring that the system generates relevant and accurate financial summaries?\n\nChoose only ONE best answer.",
        "options": [
            "Curate a specialized dataset of financial news articles to fine-tune the language model for better financial content understanding.",
            "Integrate a keyword-based relevance filter to ensure that the summaries focus on key financial terms and topics.",
            "Implement a sentiment analysis component to ensure that the generated summaries reflect the overall market sentiment.",
            "Increase the frequency of model updates to incorporate the latest news data for more timely and relevant outputs."
        ],
        "answer": 2
    },
    {
        "question": "A Generative AI Engineer at a retail company recently launched a RAG system to assist customers in finding information about the company's products. Customers have reported that the RAG system frequently provides details about products that don't match their queries.\n\nWhich action should the engineer prioritize to enhance the accuracy of the RAG system’s responses?\n\nChoose only ONE best answer.",
        "options": [
            "Increase the frequency of model retraining to incorporate the latest product data.",
            "Evaluate and refine the relevance of the retrieved documents or data snippets used by the RAG system.",
            "Enhance the system’s UI to allow customers to manually filter the products before asking a question.",
            "Integrate a more comprehensive product database to improve the variety of available information."
        ],
        "answer": 1
    },
    {
        "question": "A team of AI engineers is developing a chatbot powered by a large language model (LLM) for customer service. The team is concerned about the potential for users to input harmful or offensive language, which could lead to inappropriate responses from the model.\n\nWhich of the following strategies would be most effective in preventing the LLM from generating harmful content in response to such inputs?\n\nChoose only ONE best answer.",
        "options": [
            "Apply Safety Filter switch that filters out harmful or offensive language.",
            "Increase the training data to include a diverse range of topics, including sensitive content.",
            "Set a lower response time threshold for the LLM to discourage the use of complex or offensive language.",
            "Reduce the length of the user inputs allowed to limit the potential for harmful content."
        ],
        "answer": 0
    },
    {
        "question": "An AI developer is tasked with constructing a complex conversational AI system that involves multiple stages, such as retrieving documents, generating text, and post-processing the output. The developer needs a library that can efficiently manage and orchestrate these multi-step workflows involving language models.\n\nWhich library would be the most appropriate choice for building this multi-step workflow?",
        "options": [
            "LangChain",
            "Scikit-learn",
            "Apache Kafka",
            "SparkML"
        ],
        "answer": 0
    },
    {
        "question": "A Generative AI Engineer has developed a RAG (Retrieval-Augmented Generation) application to answer fan questions about a series of science fiction novels on an author’s web forum. The novels have been chunked into segments and embedded into a vector store with metadata (e.g., page number, chapter number, book title). These chunks are retrieved based on the user's query and fed into an LLM to generate answers. The engineer initially chose the chunking strategy and parameters based on intuition but now seeks to optimize these choices systematically.\n\nWhich TWO strategies should the engineer use to refine the chunking approach and improve the application’s performance?\n\nChoose ALL answers that apply.",
        "options": [
            "Conduct experiments using different chunk sizes and splitting methods (e.g., by paragraph, page, or chapter), and evaluate them using metrics such as recall score. Select the strategy that yields the best results.",
            "Integrate a document-level retrieval filter that first identifies the most relevant book before retrieving specific chunks.",
            "Develop a feedback mechanism where the LLM evaluates how accurately previous questions were answered based on the chunks retrieved. Using that optimize the chunking parameters and rerun",
            "Adjust the vector store indexing parameters and assess their impact on retrieval quality before optimizing chunk size.",
            "Use a heuristic based on the average number of tokens in known user queries to decide on a standard chunk size for all documents."
        ],
        "answer": [0, 2]
    },
    {
        "question": "An engineer has developed a large language model (LLM). The model is ready for deployment, but the expected volume of requests is relatively low, and maintaining a dedicated provisioned throughput endpoint would be cost-prohibitive. The Generative AI Engineer seeks a deployment strategy that optimizes for cost-effectiveness given the low request volume.\n\nWhich deployment strategy should the Generative AI Engineer adopt to achieve this goal?\n\nChoose only ONE best answer.",
        "options": [
            "Manually manage the request rate to prevent exceeding usage limits and incurring extra costs.",
            "Opt for a different API service that supports more flexible deployment models.",
            "Use a smaller model variant to decrease computational demands and associated costs.",
            "Deploy using pay-per-token throughput that charges based on the number of tokens processed."
        ],
        "answer": 3
    },
    {
        "question": "A Generative AI Engineer is developing a RAG system for a legal team within their company. The application must provide accurate and detailed answers using a proprietary internal knowledge base. The legal information handled is highly confidential, and strict regulations prohibit any data from being transmitted outside the company. The team is not concerned about response time, but they prioritize the accuracy and quality of the generated answers.\n\nWhich model would best meet the engineer’s requirements?",
        "options": [
            "GPT-4o",
            "Claude 3.5 Sonnet",
            "Llama 3.1-405B",
            "Llama2-70B"
        ],
        "answer": 3
    },
    {
        "question": "An Generative AI Engineer is tasked with building a RAG application that must extract text from a large collection of documents stored as PDFs. These documents include a mix of text, tables, and embedded images. The goal is to implement this solution efficiently, minimizing the complexity of the code required.\n\nWhich Python library should the Generative AI Engineer choose to efficiently extract text from these PDF documents with the least amount of manual processing?\n\nChoose only ONE best answer.",
        "options": [
            "beautifulsoup",
            "unstructured",
            "requests",
            "pandas"
        ],
        "answer": 1
    },
    {
        "question": "A tech company wants to deploy an AI assistant to help their software engineers with code generation and debugging across various programming languages. Ensuring the highest quality of generated code is the top priority.\n\nWhich of the following AI models or APIs available in Databricks would be the best choice for this task?\n\nChoose only ONE best answer.",
        "options": [
            "CodeLlama-34B",
            "Dolly-v2-12B",
            "Falcon-40B",
            "T5-11B",
            "OLMo-1.5B"
        ],
        "answer": 0
    },
    {
        "question": "A Generative AI Engineer is developing a complex application that requires an open-source large language model (LLM) capable of handling extensive input data within a single query. The model needs to support a large context window to accommodate long documents or detailed instructions.\n\nWhich model is best suited for this requirement?\n\nChoose only ONE best answer.",
        "options": [
            "GPT-4o",
            "Claude 2 Free",
            "MPT-30B",
            "Dolly"
        ],
        "answer": 2
    },
    {
        "question": "What does the 'Faithfulness' metric evaluate in generation metrics?\n\nChoose only ONE best answer.",
        "options": [
            "Relevance of the answer to the query",
            "Accuracy of the answer compared to ground truth",
            "Factual accuracy of the answer in relation to the provided context",
            "Completeness of the retrieved information",
            "Formality of the generated response"
        ],
        "answer": 2
    },
    {
        "question": "A Generative AI Engineer is tasked with developing an intelligent chatbot for a company that manages various types of user queries. The chatbot needs to recognize the intent behind each query and direct the user to the appropriate service. For instance, users might inquire about available products, request customer support, or ask for information on shipping policies.\n\nWhich workflow would best meet these requirements?\n\nChoose only ONE best answer.",
        "options": [
            "Implement a multi-step LLM workflow where the chatbot first identifies the user's intent and then routes the query to the relevant LLM model. For product inquiries, route to the inventory LLM; for support queries, direct to the support LLM; and for shipping information, provide details from the shipping LLM model.",
            "Design separate chatbots for each type of query: one for product inquiries, one for customer support, and one for shipping information.",
            "Use a simple keyword-based system to answer all queries with predefined responses, without routing to different models.",
            "Limit the chatbot to handling only customer support queries, directing all other types of questions to a human operator."
        ],
        "answer": 0
    },
    {
        "question": "A Generative AI Engineer has developed an application that assists employees in extracting relevant information from a vast internal knowledge base. This application leverages both retrieval techniques and language generation to provide concise and accurate responses. After a successful prototype phase with initial user feedback, the engineer is ready to conduct a thorough assessment of the system’s performance to identify areas for improvement.\n\nWhich approach should the Generative AI Engineer take to accurately assess the effectiveness of both the retrieval and generation components of the system?\n\nChoose only ONE best answer.",
        "options": [
            "Develop a specific evaluation framework that tests retrieval Precision independently, followed by a separate assessment of the generated text's faithfulness and relevance.",
            "Continuously monitor user feedback during the application's use and rely solely on qualitative analysis to guide further development.",
            "Compare the performance of the application with a baseline model that only uses retrieval techniques without any generative component.",
            "Apply a weighted average of different evaluation metrics, including retrieval precision, language model perplexity, and user satisfaction ratings, to derive a single performance score."
        ],
        "answer": 0
    },
    {
        "question": "A startup is developing a RAG application for providing specialized legal advice to its clients. The company has a limited budget and needs to ensure that the application is both cost-effective and capable of delivering high-quality, relevant legal information.\n\nWhich approach would best balance the need for quality and cost efficiency in developing the RAG application?",
        "options": [
            "Use the most comprehensive legal database available and large LLM to ensure the highest accuracy, serving cost will automatically be low on Databricks.",
            "Implement a query throttling system to limit the number of queries each user can make per day.",
            "Utilize a smaller, domain-specific LLM fine-tuned on legal documents to provide targeted, relevant advice.",
            "Opt for a general-purpose LLM and manually review outputs to ensure they meet legal standards."
        ],
        "answer": 2
    },
    {
        "question": "A Generative AI Engineer is developing an LLM-based tool designed to help employees find answers to HR-related queries by leveraging information from HR manuals stored in PDF format.\n\nWhich set of high-level tasks should the system be designed to perform in order to effectively meet this business objective?\n\nChoose only ONE best answer.",
        "options": [
            "Preprocess HR documents to extract only key topics, create topic chunks, and match these to employee queries to retrieve the most relevant information. Pass this information to the LLM to generate a response.",
            "Convert HR documents into a sequence of text blocks or chunks, encode these blocks into a vector database, retrieve relevant blocks based on employee queries, and use the LLM to generate a response informed by the retrieved text.",
            "Implement a keyword-based search over the HR documents, retrieve full documents that match the query, and use the LLM to summarize the content in response to the query.",
            "Use a clustering algorithm to group similar sections of HR documents, match employee queries to these clusters, and pass the most relevant cluster to the LLM for generating a response."
        ],
        "answer": 1
    },
    {
        "question": "A Generative AI Engineer has successfully launched an LLM-based tool for automating content creation in a digital marketing firm. The tool generates product descriptions and responses to customer queries.\n\nWhich of the following metrics would be most critical to monitor to ensure the tool's effectiveness in a production setting?\n\nChoose only ONE best answer.",
        "options": [
            "The LLM’s token generation speed during inference.",
            "The Thumbs up score as measured by user satisfaction scores.",
            "The number of training epochs completed during model fine-tuning.",
            "The frequency of updates and new releases from the original LLM repository.",
            "Final BLEU scores for the model training."
        ],
        "answer": 1
    },
    {
        "question": "Which MLflow function is commonly used to log a pyfunc model?\n\nChoose only ONE best answer.",
        "options": [
            "mlflow.log_metric",
            "mlflow.save_model",
            "mlflow.log_artifact",
            "mlflow.pyfunc.log_model",
            "mlflow.load_model"
        ],
        "answer": 3
    },
    {
        "question": "Which Databricks feature can be used to manage the lifecycle, versioning, and deployment of a foundation model API?\n\nChoose only ONE best answer.",
        "options": [
            "Apache Spark",
            "Delta Lake",
            "MLflow integration",
            "Lakeview integration",
            "DBSQL Warehouse tracking"
        ],
        "answer": 2
    },
    {
        "question": "A Generative AI Engineer has fine-tuned a pretrained language model using Databricks, and now the team is ready to deploy the model into production to serve predictions in real-time.\n\nWhat is the most efficient way to deploy a fine-tuned model on Databricks to serve real-time predictions with minimal manual intervention?\n\nChoose only ONE best answer.",
        "options": [
            "Export the trained model to a local machine, wrap it into a REST API using FastAPI, and deploy it on a virtual machine.",
            "Save the model as an HDFS file, upload it to an AWS S3 bucket, and create a Lambda function to load the model and serve predictions.",
            "Use Databricks' Model Registry to register the trained model, deploy it as an API endpoint directly within Databricks using MLflow, and manage the serving infrastructure automatically.",
            "Package the model into a JAR file, deploy it on an Apache Spark cluster, and use Spark's structured streaming for real-time predictions."
        ],
        "answer": 2
    },
    {
        "question": "Which of the following represents the correct order of operations for this AI-powered chatbot to process a user query?\n\nChoose only ONE best answer.",
        "options": [
            "1. Transform the user query into a vector, 2. Conduct a vector search, 3. Add relevant context to the query, 4. Generate the response using the LLM",
            "1. Generate the response using the LLM, 2. Add context to the response, 3. Search the database using vector search, 4. Convert the response to a vector",
            "1. Conduct a vector search, 2. Convert the search results into an embedding, 3. Add context to the original query, 4. Generate the response using the LLM",
            "1. Add context to the original query, 2. Convert the query into a vector, 3. Conduct a vector search, 4. Generate the response using the LLM"
        ],
        "answer": 0
    },
    {
        "question": "A Generative AI Engineer is developing a system that automatically generates concise summaries of historical speeches from the early 20th century based on user requests. Although the summaries are accurate, the system sometimes includes unnecessary details about how the summary was created, which is not needed. What approach should the engineer take to prevent this issue?\n\nChoose only ONE best answer.",
        "options": [
            "Adjust the segment length of the speeches or test different embedding techniques.",
            "Re-evaluate the preprocessing steps to ensure the speeches are being handled correctly.",
            "Filter the output by removing sections after specific delimiters to cut off the unwanted details.",
            "Provide the model with example summaries that clearly illustrate the desired output format."
        ],
        "answer": 3
    },
    {
        "question": "A Generative AI Engineer is developing an LLM-powered financial analysis application that requires real-time access to stock prices and the latest news articles. The stock prices are maintained in Delta tables, and the most recent news articles need to be fetched from the internet for analysis and report generation.\n\nWhat is the most effective system architecture for integrating these data sources into the LLM-powered application?\n\nChoose only ONE best answer.",
        "options": [
            "Implement a multi-agent system where one agent queries the Delta tables for stock prices, another agent searches the internet for the latest news articles, and both agents pass their findings to the LLM for generating a comprehensive analysis.",
            "Set up a scheduled batch process to download and cache stock prices and news articles in a local database. Use the LLM to access this database and generate reports.",
            "Configure the LLM to generate search queries for both the stock prices and news articles, allowing user to directly pull and summarize the data from the web using SearchGPT or Perplexity.",
            "Develop an LLM-centric architecture where the model uses pre-trained capabilities to extract and analyze stock prices and news articles directly from raw text data streams."
        ],
        "answer": 0
    },
    {
        "question": "A Generative AI Engineer is tasked with creating an AI-powered customer support chatbot for an e-commerce platform. The chatbot must handle a wide range of tasks, including answering frequently asked questions, checking the status of customer orders via an API, and helping customers troubleshoot common issues with their purchases.\n\nWhat is the best strategy the engineer should employ to ensure the chatbot efficiently handles these varied tasks?\n\nChoose only ONE best answer.",
        "options": [
            "Use a single LLM model to handle all tasks by training it on a large dataset of FAQs, order statuses, and troubleshooting guides, without the need for external tools.",
            "Integrate an agent-based system where the chatbot uses different tools such as an FAQ knowledge base, API calls for order status, and a troubleshooting guide to respond to queries dynamically.",
            "Pre-program the chatbot with a set of fixed responses for all possible queries, ensuring it can answer without needing any external data sources or API calls.",
            "Use an LLM that generates responses by querying a comprehensive database that contains all FAQs, order statuses, and troubleshooting information in one place."
        ],
        "answer": 1
    },
    {
        "question": "A data engineer is developing a prompt for a generative AI model that will be used in a financial advisory chatbot. The chatbot is designed to provide investment advice based on the user's risk tolerance level. The AI needs to categorize users as 'Low Risk,' 'Medium Risk,' or 'High Risk' based on their responses to a series of questions about their financial goals and comfort with risk.\n\nWhich of the following prompts would most effectively guide the AI model to accurately classify users based on their risk tolerance?\n\nChoose only ONE best answer.",
        "options": [
            "'Classify the user as \'Low Risk,\' \'Medium Risk,\' or \'High Risk\' after analyzing their financial goals and risk preferences.'",
            "'After reviewing the user\'s responses about their financial goals, categorize them based on their risk level: \'Low Risk\', \'Medium Risk, and \'High Risk\''",
            "'For each user\'s response, assign a risk level: \'Low Risk\' if they prefer minimal risk, \'Medium Risk\' if they are comfortable with some risk, and \'High Risk\' if they are willing to take significant risks.'",
            "'Respond to each user by labeling their risk tolerance as \'Low Risk,\' \'Medium Risk,\' or \'High Risk\' based on how much risk they are willing to take with their investments.'"
        ],
        "answer": 2
    },
    {
        "question": "A Generative AI Engineer is running an LLM - language generation model as part of a RAG application and wants to efficiently log and monitor the incoming requests and outgoing responses from the model serving endpoint. Currently, the team uses an external service to log these transactions, but they are looking for a more integrated solution within Databricks.\n\nWhich Databricks feature should they utilize to achieve this goal?\n\nChoose only ONE best answer.",
        "options": [
            "Inference Tables",
            "Databricks Workflows",
            "MLflow",
            "Delta Live Tables"
        ],
        "answer": 0
    },
    {
        "question": "An AI Engineer is working on improving the input quality for a large language model (LLM) by performing custom preprocessing on the prompts before they are fed into the model. The goal is to ensure that the prompts are clean, standardized, and optimized for better model performance.\n\nWhich approach would be most effective for implementing this preprocessing step?\n\nChoose only ONE best answer.",
        "options": [
            "Develop a custom MLflow PyFunc model that preprocesses prompts before they are sent to the LLM.",
            "Avoid preprocessing and rely entirely on the LLM's ability to handle raw prompts.",
            "Focus on postprocessing the LLM's output to correct any issues, rather than preprocessing the prompts.",
            "Modify the LLM’s core weights and embed the preprocessing logic directly within the Transformer architecture."
        ],
        "answer": 0
    },
    {
        "question": "What is the primary purpose of the ai_query() function in Databricks SQL?\n\nChoose only ONE best answer.",
        "options": [
            "To create new machine learning models from scratch",
            "To sql query existing model serving endpoints",
            "To perform data visualization tasks",
            "To manage SQL databases",
            "To encrypt data for secure storage"
        ],
        "answer": 1
    },
    {
        "question": "A Generative AI Engineer is building a live financial market analysis platform that uses an LLM to provide users with real-time insights and summaries based on the latest stock prices and market movements.\n\nWhich tool would be most effective for integrating real-time stock market data into the LLM for generating accurate and timely analyses?\n\nChoose only ONE best answer.",
        "options": [
            "Foundation Model APIs - Ready for direct use",
            "Model Registry",
            "Feature Serving",
            "MLflow"
        ],
        "answer": 2
    },
    {
        "question": "A Generative AI Engineer is developing a Generative AI-based search tool for internal use at a large corporation, Tekmastery Enterprises. The goal is to provide accurate responses to queries related to the company's proprietary information stored in a variety of document formats. However, the document repository also contains irrelevant content, such as external news articles, employee newsletters, and non-work-related memos.\n\nWhich of the following strategies is most effective for ensuring that the Generative AI model provides accurate and relevant information exclusively related to Tekmastery Enterprises' content?\n\nChoose only ONE best answer.",
        "options": [
            "Pre-process the document repository to filter out and exclude any content that does not contain key phrases or keywords associated with Tekmastery Enterprises' proprietary information.",
            "Rely on the AI model's built-in capabilities to discern relevant content without any pre-processing, allowing it to learn from the entire document corpus.",
            "Manually tag each document with metadata indicating whether it is relevant to Tekmastery Enterprises' proprietary information, and use these tags to guide the search process.",
            "Implement a feedback loop where users can flag irrelevant responses, and use this feedback to continually fine-tune the model's training data."
        ],
        "answer": 0
    },
    {
        "question": "A company is deploying a large language model (LLM) to translate customer support documents into multiple languages. To ensure the translations are both safe and effective, the team needs to qualitatively assess the LLM's outputs.\n\nWhich of the following criteria is most important when evaluating thewebkit. safety of the LLM's translation outputs?\n\nChoose only ONE best answer.",
        "options": [
            "The model's ability to handle multiple programming languages in its responses",
            "The speed of response and the amount of text generated during translation",
            "The correctness and contextual appropriateness of the translated text",
            "The extent to which the translation mirrors the structure of the source language"
        ],
        "answer": 2
    },
    {
        "question": "A Generative AI Engineer is developing an LLM-based search application where documents have been preprocessed into chunks of approximately 500 tokens each. The main priorities for this application are minimizing cost and latency, even if it means sacrificing some quality. The engineer has several model options to choose from, each with different context lengths and model sizes.\n\nWhich model should they select to best meet their requirements?\n\nChoose only ONE best answer.",
        "options": [
            "Context length 16384: Model size is 16GB",
            "Context length 1024: Model size is 8GB",
            "Context length 512: Model size is 0.5GB",
            "Context length 4096: Model size is 12GB"
        ],
        "answer": 2
    },
    {
        "question": "A Generative AI Engineer has deployed an LLM-based application to assist employees with inquiries regarding company policies. The engineer needs to ensure that the system does not generate incorrect information (hallucinations) or reveal sensitive internal data.\n\nWhich strategy would be LEAST effective in preventing hallucinations and protecting confidential data?\n\nChoose only ONE best answer.",
        "options": [
            "Implement access controls to restrict the LLM’s access to sensitive data based on the user’s role.",
            "Use a system prompt that clearly instructs the LLM on the boundaries of acceptable responses.",
            "Regularly update the model’s training data with the latest company policies to reduce the chances of outdated or incorrect information.",
            "Apply post-processing filters to review and modify the LLM’s outputs before they are displayed to the user."
        ],
        "answer": 3
    },
    {
        "question": "A Generative AI Engineer is deploying a web service that utilizes a custom generative model for producing text outputs based on user inputs. The service requires access to several secure APIs for generating content. What is the most appropriate method to securely provide the necessary API keys to the service?\n\nChoose only ONE best answer.",
        "options": [
            "Store the API keys directly in the code repository",
            "Use environment variables to pass the API keys",
            "Include the API keys in the service’s URL parameters",
            "Pass the API keys within the generated content"
        ],
        "answer": 1
    },
    {
        "question": "A Generative AI Developer is tasked with creating a system that helps users understand complex legal documents by answering their queries with accurate, context-specific responses. The developer decides to use a RAG approach. What sequence of steps should they follow to build and deploy this system?\n\nChoose only ONE best answer.",
        "options": [
            "Collect legal documents -> Index and store them in a vector database -> Evaluate -> Deploy using Model Serving",
            "Collect legal documents -> Index and store them in a vector database -> User submits queries to the LLM -> LLM retrieves relevant documents -> LLM generates answers -> Evaluate -> Deploy using Model Serving",
            "Collect legal documents -> Index and store them in a vector database -> User submits queries to the LLM -> LLM retrieves relevant documents -> Evaluate -> LLM generates answers -> Deploy using Model Serving",
            "User submits queries to the LLM -> Collect legal documents -> Index and store them in a vector database -> LLM retrieves relevant documents -> LLM generates answers -> Evaluate -> Deploy using Model Serving"
        ],
        "answer": 1
    },
    {
        "question": "A Generative AI Engineer is designing a chatbot for a mental health support application. The chatbot should distinguish between urgent and non-urgent mental health concerns. For non-urgent concerns, it should gather more information and offer helpful resources. If the user expresses an urgent concern, the chatbot should immediately advise contacting emergency services.\n\nUser input: 'I’ve been feeling extremely depressed and just don't see a way out anymore.'\n\nWhich response would be most appropriate for the chatbot to give?\n\nChoose only ONE best answer.",
        "options": [
            "I’m sorry to hear that. Let’s talk more about what’s been bothering you lately.",
            "Depression can be tough. Here’s a helpful article that might offer some perspective.",
            "Please reach out to emergency services or a mental health professional immediately.",
            "Could you describe how long you've been feeling this way and if there are any specific triggers?"
        ],
        "answer": 2
    }
]

