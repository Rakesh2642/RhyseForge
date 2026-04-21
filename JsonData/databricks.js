const questions = [
      
    {
        question: "A data organization leader is upset about the data analysis team's reports being different from the data engineering team's reports. The leader believes the siloed nature of their organization's data engineering and data analysis architectures is to blame. Which of the following describes how a data lakehouse could alleviate this issue?",
        options: ["Both teams would autoscale their work as data size evolves", "Both teams would use the same source of truth for their work ", "Both teams would reorganize to report to the same department", "Both teams would be able to collaborate on projects in real-time E. Both teams would respond more quickly to ad-hoc requests "],
        answer: 1
      },
      {
        question: "Which of the following describes a scenario in which a data team will want to utilize cluster pools? ",
        options: ["An automated report needs to be refreshed as quickly as possible. ", " An automated report needs to be made reproducible", " An automated report needs to be tested to identify errors", "An automated report needs to be version-controlled across multiple collaborators", "An automated report needs to be runnable by all stakeholders."],
        answer: 0
      },
      {
        question: "Which of the following is hosted completely in the control plane of the classic Databricks architecture? ",
        options: ["Worker node", "JDBC data source", "Databricks web application", "Databricks Filesystem", " Driver node "],
        answer: 2
      },
      {
        question: "Which of the following describes the storage organization of a Delta table?",
        options: ["Delta tables are stored in a single file that contains data, history, metadata, and other attributes", "Delta tables store their data in a single file and all metadata in a collection of files in a separate location", "Delta tables are stored in a collection of files that contain data, history, metadata, and other attributes.", "Deltatables are stored in a collection of files that contain onlythe datastored within the table.", "Deltatablesarestored ina singlefilethat containsonlythedata stored withinthetable."],
        answer: 2
      },
      {
        question: "A Generative Al Engineer has a provisioned throughput model serving endpoint as part of a RAG application and would like to monitor the serving endpoint's incoming requests and outgoing responses. The current approach is to include a micro-service in between the endpoint and the user interface to write logs to a remote server. Which Databricks feature should they use instead which will perform the same task?",
        options: ["Vector Search", "Lakeview", "DBSQL", "Inference Tables"],
        answer: 3
      }, {
        question: "A data engineer has realized that they made a mistake when making a daily update to a table. They need to use Delta time travel to restore the table to a version that is 3 days old. However, when the data engineer attempts to time travel to the older version, they are unable to restore the data because the data files have been deleted. Which of the following explains why the data files are no longer present?",
        options: [" The VACUUM command was run on the table", "The TIME TRAVEL command was run on the table", "The DELETE HISTORY command was run on the table", "The OPTIMIZE command was nun on the table", "The HISTORY command was run on the table"],
        answer: 0
      }, {
        question: "Which of the following Git operations must be performed outside of Databricks Repos?",
        options: ["Commit", "pull", "Push", "Clone", "Merge"],
        answer: 4
      }
      , {
        question: "Which of the following data lakehouse features results in improved data quality over a traditional data lake?",
        options: ["A data lakehouse provides storage solutions for structured and unstructured data.", "A data lakehouse supports ACID-compliant transactions.", "A data lakehouse allows the use of SQL queries to examine data.", "A data lakehouse stores data in open formats.", "A data lakehouse enables machine learning and artificial Intelligence workloads."],
        answer: 1
      }
      , {
        question: "A data engineer needs to determine whether to use the built-in Databricks Notebooks versioning or version their project using Databricks Repos. Which of the following is an advantage of using Databricks Repos over the Databricks Notebooks versioning?",
        options: ["Databricks Repos automatically saves development progress", "Databricks Repos supports the use of multiple branches", "Databricks Repos allows users to revert to previous versions of a notebook", "Databricks Repos provides the ability to comment on specific changes", "Databricks Repos is wholly housed within the Databricks Lakehouse Platform"],
        answer: 1
      }, {
        question: "A data engineer has left the organization. The data team needs to transfer ownership of the data engineer’s Delta tables to a new data engineer. The new data engineer is the lead engineer on the data team. Assuming the original data engineer no longer has access, which of the following individuals must be the one to transfer ownership of the Delta tables in Data Explorer?",
        options: [
          "Databricks account representative",
          "This transfer is not possible",
          "Workspace administrator",
          "New lead data engineer",
          "Original data engineer"
        ],
        answer: 2
      }, {
        question: "A data analyst has created a Delta table sales that is used by the entire data analysis team. They want help from the data engineering team to implement a series of tests to ensure the data is clean. However, the data engineering team uses Python for its tests rather than SQL. Which of the following commands could the data engineering team use to access sales in PySpark?",
        options: ["SELECT * FROM sales", "There is no way to share data between PySpark and SQL.", "spark.sql(\"sales\")", " spark.delta.table(\"sales\")", "spark.table(\"sales\")"],
        answer: 4
      },
      {
        question: "Which of the following commands will return the location of database customer360?",
        options: ["DESCRIBE LOCATION customer360;", "DROP DATABASE customer360;", "DESCRIBE DATABASE customer360;", "ALTER DATABASE customer360 SET DBPROPERTIES ('location' = '/user');", "USE DATABASE customer360;"],
        answer: 2
      }, {
        question: "A data engineer wants to create a new table containing the names of customers that live in France. They have written the following command:\n\n```sql\nCREATE TABLE customersInFrance\nAS\nSELECT id,\n       firstName,\n       lastName\nFROM customerLocations\nWHERE country = 'FRANCE';\n```\nA senior data engineer mentions that it is organization policy to include a table property indicating that the new table includes personally identifiable information (PII). Which of the following lines of code fills in the above blank to successfully complete the task?",
        options: ["There is no way to indicate whether a table contains PII.", "COMMENT PII", "TBLPROPERTIES PII", "COMMENT 'Contains PII'", "PII"],
        answer: 3
      }, {
        question: "Which of the following benefits is provided by the array functions from Spark SQL?",
        options: ["An ability to work with data in a variety of types at once", "An ability to work with data within certain partitions and windows", "An ability to work with time-related data in specified intervals", "An ability to work with complex, nested data ingested from JSON files", "An ability to work with an array of tables for procedural automation"],
        answer: 3
      }, {
        question: "Which of the following commands can be used to write data into a Delta table while avoiding the writing of duplicate records?",
        options: ["DROP", "IGNORE", "MERGE", "APPEND", "INSERT"],
        answer: 2
      }, {
        question: "A data engineer needs to apply custom logic to string column city in table stores for a specific use case. In order to apply this custom logic at scale, the data engineer wants to create a SQL user-defined function (UDF). Which of the following code blocks creates this SQL UDF?",
        options: [
          "CREATE FUNCTION combine_nyc(city STRING)\nRETURNS STRING\nRETURN CASE\n         WHEN city = \"brooklyn\" THEN \"new york\"\n         ELSE city\n       END;",
          "CREATE UDF combine_nyc(city STRING)\nRETURNS STRING\nCASE\n  WHEN city = \"brooklyn\" THEN \"new york\"\n  ELSE city\nEND;",
          "CREATE UDF combine_nyc(city STRING)\nRETURN CASE\n       WHEN city = \"brooklyn\" THEN \"new york\"\n       ELSE city\nEND;",
          "CREATE FUNCTION combine_nyc(city STRING)\nRETURN CASE\n       WHEN city = \"brooklyn\" THEN \"new york\"\n       ELSE city\nEND;",
          "CREATE UDF combine_nyc(city STRING)\nRETURNS STRING\nRETURN CASE\n       WHEN city = \"brooklyn\" THEN \"new york\"\n       ELSE city\nEND;"
        ],
        answer: 0
      }, {
        question: "A data analyst has a series of queries in a SQL program. The data analyst wants this program to run every day. They only want the final query in the program to run on Sundays. They ask for help from the data engineering team to complete this task. Which of the following approaches could be used by the data engineering team to complete this task?",
        options: [
          "They could submit a feature request with Databricks to add this functionality.",
          "They could wrap the queries using PySpark and use Python's control flow system to determine when to run the final query.",
          "They could only run the entire program on Sundays.",
          "They could automatically restrict access to the source table in the final query so that it is only accessible on Sundays.",
          "They could redesign the data model to separate the data used in the final query into a new table."
        ],
        answer: 1
      }, {
        question: "A data engineer runs a statement every day to copy the previous day's sales into the table transactions. Each day's sales are in their own file in the location '/transactions/raw'. Today, the data engineer runs the following command to complete this task:\n\n```sql\nCOPY INTO transactions\nFROM '/transactions/raw'\nFILEFORMAT = PARQUET;\n```\nAfter running the command today, the data engineer notices that the number of records in table transactions has not changed. Which of the following describes why the statement might not have copied any new records into the table?",
        options: [
          "The format of the files to be copied were not included with the FORMAT_OPTIONS keyword.",
          "The names of the files to be copied were not included with the FILES keyword.",
          "The previous day's file has already been copied into the table.",
          "The PARQUET file format does not support COPY INTO.",
          "The COPY INTO statement requires the table to be refreshed to view the copied rows."
        ],
        answer: 2
      }, {
        question: "A data engineer needs to create a table in Databricks using data from their organization's existing SQLite database. They run the following command:\n\n```sql\nCREATE TABLE jdbc_customer360\nUSING\nOPTIONS (\n  url \"jdbc:sqlite:/customers.db\",\n  dbtable \"customer360\"\n)\n```\nWhich of the following lines of code fills in the above blank to successfully complete the task?",
        options: ["org.apache.spark.sql.jdbc", "autoloader", "DELTA", "sqlite", "org.apache.spark.sql.sqlite"],
        answer: 0
      }, {
        question: "A data engineer only wants to execute the final block of a Python program if the Python variable day_of_week is equal to 1 and the Python variable review_period is True. Which of the following control flow statements should the data engineer use to begin this conditionally executed code block?",
        options: [
          "if day_of_week = 1 and review_period:",
          "if day_of_week = 1 and review_period = \"True\":",
          "if day_of_week == 1 and review_period == \"True\":",
          "if day_of_week == 1 and review_period:",
          "if day_of_week = 1 & review_period: = \"True\":"
        ],
        answer: 3
      }, {
        question: "A data engineer is attempting to drop a Spark SQL table my_table. The data engineer wants to delete all table metadata and data. They run the following command:\n\n```sql\nDROP TABLE IF EXISTS my_table;\n```\nWhile the object no longer appears when they run SHOW TABLES, the data files still exist. Which of the following describes why the data files still exist and the metadata files were deleted?",
        options: [
          "The table's data was larger than 10 GB",
          "The table's data was smaller than 10 GB",
          "The table was external",
          "The table did not have a location",
          "The table was managed"
        ],
        answer: 2
      }, {
        question: "A data engineer wants to create a data entity from a couple of tables. The data entity must be used by other data engineers in other sessions. It also must be saved to a physical location. Which of the following data entities should the data engineer create?",
        options: ["Database", "Function", "View", "Temporary view", "Table"],
        answer: 4
      }, {
        question: "A data engineer is maintaining a data pipeline. Upon data ingestion, the data engineer notices that the source data is starting to have a lower level of quality. The data engineer would like to automate the process of monitoring the quality level. Which of the following tools can the data engineer use to solve this problem?",
        options: ["Unity Catalog", "Data Explorer", "Delta Lake", "Delta Live Tables", "Auto Loader"],
        answer: 3
      }, {
        question: "A Delta Live Table pipeline includes two datasets defined using STREAMING LIVE TABLE. Three datasets are defined against Delta Lake table sources using LIVE TABLE. The table is configured to run in Production mode using the Continuous Pipeline Mode.\n\nAssuming previously unprocessed data exists and all definitions are valid, what is the expected outcome after clicking Start to update the pipeline?",
        options: [
          "All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will persist to allow for additional testing.",
          "All datasets will be updated once and the pipeline will persist without any processing. The compute resources will persist but go unused.",
          "All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will be deployed for the update and terminated when the pipeline is stopped.",
          "All datasets will be updated once and the pipeline will shut down. The compute resources will be terminated.",
          "All datasets will be updated once and the pipeline will shut down. The compute resources will persist to allow for additional testing."
        ],
        answer: 2
      }, {
        question: "In order for Structured Streaming to reliably track the exact progress of the processing so that it can handle any kind of failure by restarting and/or reprocessing, which of the following two approaches is used by Spark to record the offset range of the data being processed in each trigger?",
        options: [
          "Checkpointing and Write-ahead Logs",
          "Structured Streaming cannot record the offset range of the data being processed in each trigger.",
          "Replayable Sources and Idempotent Sinks",
          "Write-ahead Logs and Idempotent Sinks",
          "Checkpointing and Idempotent Sinks"
        ],
        answer: 0
      }, {
        question: "Which of the following tools is used by Auto Loader process data incrementally?",
        options: [
          "Checkpointing",
          "Spark Structured Streaming",
          "Data Explorer",
          "Unity Catalog",
          "Databricks SQL"
        ],
        answer: 1
      }, {
        question: "Which of the following describes the relationship between Gold tables and Silver tables?",
        options: [
          "Gold tables are more likely to contain aggregations than Silver tables.",
          "Gold tables are more likely to contain valuable data than Silver tables.",
          "Gold tables are more likely to contain a less refined view of data than Silver tables.",
          "Gold tables are more likely to contain more data than Silver tables.",
          "Gold tables are more likely to contain truthful data than Silver tables."
        ],
        answer: 0
      }, {
        question: "Which of the following describes the relationship between Bronze tables and raw data?",
        options: [
          "Bronze tables contain less data than raw data files.",
          "Bronze tables contain more truthful data than raw data.",
          "Bronze tables contain aggregates while raw data is unaggregated.",
          "Bronze tables contain a less refined view of data than raw data.",
          "Bronze tables contain raw data with a schema applied."
        ],
        answer: 4
      }, {
        question: "A data engineer has configured a Structured Streaming job to read from a table, manipulate the data, and then perform a streaming write into a new table. The code block used by the data engineer is below:\n\n```scala\nspark.table(\"sales\")\n  .withColumn(\"avg_price\", col(\"sales\") / col(\"units\"))\n  .writeStream\n  .option(\"checkpointLocation\", checkpointPath)\n  .outputMode(\"complete\")\n  .\n  .table(\"new_sales\")\n```\n\nIf the data engineer only wants the query to execute a micro-batch to process data every 5 seconds, which of the following lines of code should the data engineer use to fill in the blank?",
        options: [
          "trigger(\"5 seconds\")",
          "trigger()",
          "trigger(once=\"5 seconds\")",
          "trigger(processingTime='5 seconds')",
          "trigger(continuous='5 seconds')"
        ],
        answer: 3
      }, {
        question: "A dataset has been defined using Delta Live Tables and includes an expectations clause:\n\n`CONSTRAINT valid_timestamp EXPECT (timestamp > '2020-01-01') ON VIOLATION DROP ROW`\n\nWhat is the expected behavior when a batch of data containing data that violates these constraints is processed?",
        options: [
          "Records that violate the expectation are dropped from the target dataset and loaded into a quarantine table.",
          "Records that violate the expectation are added to the target dataset and flagged as invalid in a field added to the target dataset.",
          "Records that violate the expectation are dropped from the target dataset and recorded as invalid in the event log.",
          "Records that violate the expectation are added to the target dataset and recorded as invalid in the event log.",
          "Records that violate the expectation cause the job to fail."
        ],
        answer: 2
      }, {
        question: "Which of the following describes when to use the `CREATE STREAMING LIVE TABLE` (formerly `CREATE INCREMENTAL LIVE TABLE`) syntax over the `CREATE LIVE TABLE` syntax when creating Delta Live Tables (DLT) tables using SQL?",
        options: [
          "`CREATE STREAMING LIVE TABLE` should be used when the subsequent step in the DLT pipeline is static.",
          "`CREATE STREAMING LIVE TABLE` should be used when data needs to be processed incrementally.",
          "`CREATE STREAMING LIVE TABLE` is redundant for DLT and it does not need to be used.",
          "`CREATE STREAMING LIVE TABLE` should be used when data needs to be processed through complicated aggregations.",
          "`CREATE STREAMING LIVE TABLE` should be used when the previous step in the DLT pipeline is static."
        ],
        answer: 1
      }, {
        question: "A data engineer is designing a data pipeline. The source system generates files in a shared directory that is also used by other processes. As a result, the files should be kept as is and will accumulate in the directory. The data engineer needs to identify which files are new since the previous run in the pipeline, and set up the pipeline to only ingest those new files with each run.\n Which of the following tools can the data engineer use to solve this problem? ",
        options: [
          "Unity Catalog ",
          "Delta Lake ",
          "Databricks SQL ",
          "Data Explorer ",
          "Auto Loader "
        ],
        answer: 4
      }, {
        question: "Which of the following Structured Streaming queries is performing a hop from a Silver table to a Gold table?",
        options: [
          "```scala\nspark.readStream.load(rawSalesLocation)\n  .writeStream\n  .option(\"checkpointLocation\", checkpointPath)\n  .outputMode(\"append\")\n  .table(\"newSales\")\n```",
          "```scala\nspark.read.load(rawSalesLocation)\n  .writeStream\n  .option(\"checkpointLocation\", checkpointPath)\n  .outputMode(\"append\")\n  .table(\"newSales\")\n```",
          "```scala\nspark.table(\"sales\")\n  .withColumn(\"avgPrice\", col(\"sales\") / col(\"units\"))\n  .writeStream\n  .option(\"checkpointLocation\", checkpointPath)\n  .outputMode(\"append\")\n  .table(\"newSales\")\n```",
          "```scala\nspark.table(\"sales\")\n  .filter(col(\"units\") > 0)\n  .writeStream\n  .option(\"checkpointLocation\", checkpointPath)\n  .outputMode(\"append\")\n  .table(\"newSales\")\n```",
          "```scala\nspark.table(\"sales\")\n  .groupBy(\"store\")\n  .agg(sum(\"sales\"))\n  .writeStream\n  .option(\"checkpointLocation\", checkpointPath)\n  .outputMode(\"complete\")\n  .table(\"newSales\")\n```"
        ],
        answer: 4
      }, {
        question: "A data engineer has three tables in a Delta Live Tables (DLT) pipeline. They have configured the pipeline to drop invalid records at each table. They notice that some data is being dropped due to quality concerns at some point in the DLT pipeline. They would like to determine at which table in their pipeline the data is being dropped.\n Which of the following approaches can the data engineer take to identify the table that is dropping the records? ",
        options: [
          "They can set up separate expectations for each table when developing their DLT pipeline.",
          "They cannot determine which table is dropping the records. ",
          "They can set up DLT to notify them via email when records are dropped.",
          "They can navigate to the DLT pipeline page, click on each table, and view the data quality statistics",
          "They can navigate to the DLT pipeline page, click on the `Error` button, and review the present errors"
        ],
        answer: 3
      }, {
        question: "A data engineer has a single-task Job that runs each morning before they begin working. After identifying an upstream data issue, they need to set up another task to run a new notebook prior to the original task. Which of the following approaches can the data engineer use to set up the new task?",
        options: [
          "They can clone the existing task in the existing Job and update it to run the new notebook.",
          "They can create a new task in the existing Job and then add it as a dependency of the original task.",
          "They can create a new task in the existing Job and then add the original task as a dependency of the new task.",
          "They can create a new job from scratch and add both tasks to run concurrently.",
          "They can clone the existing task to a new Job and then edit it to run the new notebook."
        ],
        answer: 1
      }, {
        question: "An engineering manager wants to monitor the performance of a recent project using a Databricks SQL query. For the first week following the project's release, the manager wants the query results to be updated every minute. However, the manager is concerned that the compute resources used for the query will be left running and cost the organization a lot of money beyond the first week of the project's release.\n  Which of the following approaches can the engineering team use to ensure the query does not cost the organization any money beyond the first week of the project's release? ",
        options: [
          "They can set a limit to the number of DBUs that are consumed by the SQL Endpoint. ",
          "They can set the query's refresh schedule to end after a certain number of refreshes. ",
          "They cannot ensure the query does not cost the organization money beyond the first week of the project's release",
          "They can set a limit to the number of individuals that are able to manage the query's refresh schedule. ",
          "They can set the query's refresh schedule to end on a certain date in the query scheduler."
        ],
        answer: 4
      }, {
        question: "A data analysis team has noticed that their Databricks SQL queries are running too slowly when connected to their always-on SQL endpoint. They claim that this issue is present when many members of the team are running small queries simultaneously. They ask the data engineering team for help. The data engineering team notices that each of the team's queries uses the same SQL endpoint.\n  Which of the following approaches can the data engineering team use to improve the latency of the team's queries?  ",
        options: [
          "They can increase the cluster size of the SQL endpoint ",
          "They can increase the maximum bound of the SQL endpoint's scaling range ",
          "They can turn on the Auto Stop feature for the SQL endpoint.",
          "They can turn on the Serverless feature for the SQL endpoint.",
          "They can turn on the Serverless feature for the SQL endpoint and change the Spot Instance Policy to 'Reliability Optimized'"
        ],
        answer: 1
      }, {
        question: "A data engineer wants to schedule their Databricks SQL dashboard to refresh once per day, but they only want the associated SQL endpoint to be running when it is necessary.\n Which of the following approaches can the data engineer use to minimize the total running time of the SQL endpoint used in the refresh schedule of their dashboard?  ",
        options: [
          "They can ensure the dashboard's SQL endpoint matches each of the queries' SQL endpoints ",
          "They can set up the dashboard's SQL endpoint to be serverless",
          "They can turn on the Auto Stop feature for the SQL endpoint",
          "They can reduce the cluster size of the SQL endpoint. ",
          "They can ensure the dashboard's SQL endpoint is not one of the included query's SQL endpoint"
        ],
        answer: 2
      }, {
        question: "A data engineer has been using a Databricks SQL dashboard to monitor the cleanliness of the input data to an ELT job. The ELT job has its Databricks SQL query that returns the number of input records containing unexpected NULL values. The data engineer wants their entire team to be notified via a messaging webhook whenever this value reaches 100.\n Which of the following approaches can the data engineer use to notify their entire team via a messaging webhook whenever the number of NULL values reaches 100?   ",
        options: [
          "They can set up an Alert with a custom template. ",
          "They can set up an Alert with a new email alert destination. ",
          "They can set up an Alert with a new webhook alert destination",
          "They can set up an Alert with one-time notifications. ",
          "They can set up an Alert without notifications."
        ],
        answer: 2
      }, {
        question: "A single Job runs two notebooks as two separate tasks. A data engineer has noticed that one of the notebooks is running slowly in the Job's current run. The data engineer asks a tech lead for help in identifying why this might be the case.\n Which of the following approaches can the tech lead use to identify why the notebook is running slowly as part of the Job? ",
        options: [
          "They can navigate to the Runs tab in the Jobs Ul to immediately review the processing notebook. ",
          "They can navigate to the Tasks tab in the Jobs Ul and click on the active run to review the processing notebook",
          "They can navigate to the Runs tab in the Jobs Ul and click on the active run to review the processing notebook",
          "There is no way to determine why a Job task is running slowly ",
          "They can navigate to the Tasks tab in the Jobs Ul to immediately review the processing notebook. "
        ],
        answer: 2
      }, {
        question: "A data engineer has a JOb with multiple tasks that runs nightly. Each Of the tasks runs Slowly because the clusters take a long time to start\n Which of the following actions can the data engineer perform to improve the start up time for the clusters used for the Job?",
        options: [
          "They can use endpoints available in Databricks SQL ",
          "They can use jobs clusters instead of all-purpose clusters",
          "They can configure the clusters to be single-node",
          "They can use clusters that are from a cluster pool",
          "They can configure the clusters to autoscale for larger data sizes "
        ],
        answer: 3
      }, {
        question: "A new data engineering team has been assigned to an ELT project. The new data engineering team will need full privileges on the database customers to fully manage the project. Which of the following commands can be used to grant full permissions on the database to the new data engineering team?",
        options: [
          "GRANT USAGE ON DATABASE customers TO team;",
          "GRANT ALL PRIVILEGES ON DATABASE team TO customers;",
          "GRANT SELECT PRIVILEGES ON DATABASE customers TO team;",
          "GRANT SELECT CREATE MODIFY USAGE PRIVILEGES ON DATABASE customers TO team;",
          "GRANT ALL PRIVILEGES ON DATABASE customers TO team;"
        ],
        answer: 4
      }, {
        question: "A new data engineering team has been assigned to work on a project. The team will need access to database customers in order to see what tables already exist. The team has its own group team. Which of the following commands can be used to grant the necessary permission on the entire database to the new team?",
        options: [
          "GRANT VIEW ON CATALOG customers TO team;",
          "GRANT CREATE ON DATABASE customers TO team;",
          "GRANT USAGE ON CATALOG team TO customers;",
          "GRANT CREATE ON DATABASE team TO customers;",
          "GRANT USAGE ON DATABASE customers TO team;"
        ],
        answer: 4
      }, {
        question: "Although the Databricks Utilities Secrets module provides tools to store sensitive credentials and avoid accidentally displaying them in plain text users should still be careful with which credentials are stored here and which users have access to using these secrets. Which statement describes a limitation of Databricks Secrets?",
        options: [
          "Because the SHA256 hash is used to obfuscate stored secrets, reversing this hash will display the value in plain text.",
          "Account administrators can see all secrets in plain text by logging on to the Databricks Accounts console.",
          "Secrets are stored in an administrators-only table within the Hive Metastore; database administrators have permission to query this table by default.",
          "Iterating through a stored secret and printing each character will display secret contents in plain text.",
          "The Databricks REST API can be used to list secrets in plain text if the personal access token has proper credentials."
        ],
        answer: 3
      }, {
        question: "Which of the following is a benefit of the Databricks Lakehouse Platform embracing open source technologies?",
        options: [
          "Cloud-specific integrations",
          "Simplified governance",
          "Ability to scale storage",
          "Ability to scale workloads",
          "Avoiding vendor lock-in"
        ],
        answer: 4
      }, {
        question: "A data engineer needs to use a Delta table as part of a data pipeline, but they do not know if they have the appropriate permissions. In which of the following locations can the data engineer review their permissions on the table?",
        options: [
          "Databricks Filesystem",
          "Jobs",
          "Dashboards",
          "Repos",
          "Data Explorer"
        ],
        answer: 4
      }, {
        question: "Which of the following describes a scenario in which a data engineer will want to use a single-node cluster?",
        options: [
          "When they are working interactively with a small amount of data",
          "When they are running automated reports to be refreshed as quickly as possible",
          "When they are working with SQL within Databricks SQL",
          "When they are concerned about the ability to automatically scale with larger data",
          "When they are manually running reports with a large amount of data"
        ],
        answer: 0
      }, {
        question: "A data engineer has been given a new record of data:\nid STRING = 'a1'\nrank INTEGER = 6\nrating FLOAT = 9.4\nWhich of the following SQL commands can be used to append the new record to an existing Delta table my_table?",
        options: [
          "INSERT INTO my_table VALUES ('a1', 6, 9.4)",
          "my_table UNION VALUES ('a1', 6, 9.4)",
          "INSERT VALUES ('a1', 6, 9.4) INTO my_table",
          "UPDATE my_table VALUES ('a1', 6, 9.4)",
          "UPDATE VALUES ('a1', 6, 9.4) my_table"
        ],
        answer: 0
      }, {
        question: "A data engineer has realized that the data files associated with a Delta table are incredibly small. They want to compact the small files to form larger files to improve performance. Which of the following keywords can be used to compact the small files?",
        options: [
          "REDUCE",
          "OPTIMIZE",
          "COMPACTION",
          "REPARTITION",
          "VACUUM"
        ],
        answer: 1
      }, {
        question: "In which of the following file formats is data from Delta Lake tables primarily stored?",
        options: [
          "Delta",
          "CSV",
          "Parquet",
          "JSON",
          "A proprietary, optimized format specific to Databricks"
        ],
        answer: 2
      }, {
        question: "Which distribution does Databricks support for installing custom Python code packages?",
        options: [
          "sbt",
          "CRAN: npm",
          "Maven",
          "Wheels",
          "jars"
        ],
        answer: 3
      }, {
        question: "Which of the following can be used to simplify and unify siloed data architectures that are specialized for specific use cases?",
        options: [
          "None of these",
          "Data lake",
          "Data warehouse",
          "All of these",
          "Data lakehouse"
        ],
        answer: 4
      }, {
        question: "A data architect has determined that a table of the following format is necessary:\n\nemployeeId STRING\nstartDate DATE\navgRating FLOAT\n\nWhich of the following code blocks uses SQL DDL commands to create an empty Delta table in the above format regardless of whether a table already exists with this name?",
        options: [
          "CREATE TABLE IF NOT EXISTS table_name (\n  employeeId STRING,\n  startDate DATE,\n  avgRating FLOAT\n);",
          "CREATE OR REPLACE TABLE table_name AS\nSELECT\n  employeeId STRING,\n  startDate DATE,\n  avgRating FLOAT\nUSING DELTA;",
          "CREATE OR REPLACE TABLE table_name WITH COLUMNS (\n  employeeId STRING,\n  startDate DATE,\n  avgRating FLOAT\n) USING DELTA;",
          "CREATE TABLE table_name AS\nSELECT\n  employeeId STRING,\n  startDate DATE,\n  avgRating FLOAT;",
          "CREATE OR REPLACE TABLE table_name (\n  employeeId STRING,\n  startDate DATE,\n  avgRating FLOAT\n) USING DELTA;"
        ],
        answer: 4
      }, {
        question: "A data engineer has a Python notebook in Databricks, but they need to use SQL to accomplish a specific task within a cell. They still want all of the other cells to use Python without making any changes to those cells. Which of the following describes how the data engineer can use SQL within a cell of their Python notebook?",
        options: [
          "It is not possible to use SQL in a Python notebook",
          "They can attach the cell to a SQL endpoint rather than a Databricks cluster",
          "They can simply write SQL syntax in the cell",
          "They can add %sql to the first line of the cell",
          "They can change the default language of the notebook to SQL"
        ],
        answer: 3
      }, {
        question: "Which of the following SQL keywords can be used to convert a table from a long format to a wide format?",
        options: [
          "TRANSFORM",
          "PIVOT",
          "SUM",
          "CONVERT",
          "WHERE"
        ],
        answer: 1
      }, {
        question: "Which of the following describes a benefit of creating an external table from Parquet rather than CSV when using a CREATE TABLE AS SELECT statement?",
        options: [
          "Parquet files can be partitioned",
          "CREATE TABLE AS SELECT statements cannot be used on files",
          "Parquet files have a well-defined schema",
          "Parquet files have the ability to be optimized",
          "Parquet files will become Delta tables"
        ],
        answer: 2
      }, {
        question: "A data engineer wants to create a relational object by pulling data from two tables. The relational object does not need to be used by other data engineers in other sessions. In order to save on storage costs, the data engineer wants to avoid copying and storing physical data. Which of the following relational objects should the data engineer create?",
        options: [
          "Spark SQL Table",
          "View",
          "Database",
          "Temporary view",
          "Delta Table"
        ],
        answer: 3
      }, {
        question: "A data analyst has developed a query that runs against Delta table. They want help from the data engineering team to implement a series of tests to ensure the data returned by the query is clean. However, the data engineering team uses Python for its tests rather than SQL.\n Which of the following operations could the data engineering team use to run the query and operate with the results in PySpark? ",
        options: [
          "SELECT * FROM sales ",
          "spark.delta.table ",
          "spark.sql ",
          "There is no way to share data between PySpark and SQL. ",
          "spark.table "
        ],
        answer: 2
      }, {
        question: "Which of the following commands will return the number of null values in the member_id column?",
        options: [
          "SELECT count(member_id) FROM my_table;",
          "SELECT count(member_id) - count_null(member_id) FROM my_table;",
          "SELECT count_if(member_id IS NULL) FROM my_table;",
          "SELECT null(member_id) FROM my_table;",
          "SELECT count_null(member_id) FROM my_table;"
        ],
        answer: 2
      }, {
        question: "A data engineer has a Python variable table_name that they would like to use in a SQL query. They want to construct a Python code block that will run the query using table_name.\n\nThey have the following incomplete code block:\n\n___(f\"SELECT customer_id, spend FROM {table_name}\")\n\nWhich of the following can be filled in the blank to successfully complete the task?",
        options: [
          "spark.delta.sql",
          "spark.delta.table",
          "spark.table",
          "dbutils.sql",
          "spark.sql"
        ],
        answer: 4
      }, {
        question: "A data engineer has created a new database using the following command:\n\nCREATE DATABASE IF NOT EXISTS customer360;\n\nIn which of the following locations will the customer360 database be located?",
        options: [
          "dbfs:/user/hive/database/customer360",
          "dbfs:/user/hive/warehouse",
          "dbfs:/user/hive/customer360",
          "More information is needed to determine the correct response",
          "dbfs:/user/hive/database"
        ],
        answer: 1
      }, {
        question: "A data engineer is attempting to drop a Spark SQL table my_table and runs the following command:\n\nDROP TABLE IF EXISTS my_table;\n\nAfter running this command, the engineer notices that the data files and metadata files have been deleted from the file system. Which of the following describes why all of these files were deleted?",
        options: [
          "The table was managed",
          "The table's data was smaller than 10 GB",
          "The table's data was larger than 10 GB",
          "The table was external",
          "The table did not have a location"
        ],
        answer: 0
      }, {
        question: "A data engineer that is new to using Python needs to create a Python function to add two integers together and return the sum? Which of the following code blocks can the data engineer use to complete this task?",
        options: [
          "function add_integers(x, y):\n  return x + y",
          "function add_integers(x, y):\n  x + y",
          "def add_integers(x, y):\n  print(x + y)",
          "def add_integers(x, y):\n  return x + y",
          "def add_integers(x, y):\n  x + y"
        ],
        answer: 3
      }, {
        question: "In which of the following scenarios should a data engineer use the MERGE INTO command instead of the INSERT INTO command?",
        options: [
          "When the location of the data needs to be changed",
          "When the target table is an external table",
          "When the source table can be deleted",
          "When the target table cannot contain duplicate records",
          "When the source is not a Delta table"
        ],
        answer: 3
      }, {
        question: "A data engineer is working with two tables. Each of these tables is displayed below in its entirety:\n\n**sales**\n| customer_id | spend | units |\n|---|---|---|\n| a1 | 28.94 | 7 |\n| a3 | 874.12 | 23 |\n| a4 | 8.99 | 1 |\n\n**favorite_stores**\n| customer_id | store_id |\n|---|---|\n| a2 | s1 |\n| a4 | s2 |\n\nThe data engineer runs the following query to join these tables together:\n\n```sql\nSELECT\n  sales.customer_id,\n  sales.spend,\n  favorite_stores.store_id\nFROM sales\nLEFT JOIN favorite_stores\nON sales.customer_id = favorite_stores.customer_id;\n```\n\nWhich of the following will be returned by the above query?",
        options: [
          "| customer_id | spend | store_id |\n|---|---|---|\n| a1 | 28.94 | s1 |\n| a4 | 8.99 | s2 |",
          "| customer_id | spend | units | store_id |\n|---|---|---|---|\n| a1 | 28.94 | 7 | s1 |\n| a4 | 8.99 | 1 | s2 |",
          "| customer_id | spend | store_id |\n|---|---|---|\n| a1 | 28.94 | NULL |\n| a3 | 874.12 | NULL |\n| a4 | 8.99 | s2 |",
          "| customer_id | spend | store_id |\n|---|---|---|\n| a1 | 28.94 | s1 |\n| a2 | NULL | NULL |\n| a4 | 8.99 | s2 |",
          "| customer_id | spend | store_id |\n|---|---|---|\n| a1 | 28.94 | s1 |\n| a4 | NULL | s1 |\n| a4 | 8.99 | s2 |"
        ],
        answer: 2
      }, {
        question: "A data engineer needs to create a table in Databricks using data from a CSV file at location /path/to/csv.\n\nThey run the following command:\n\n```sql\nCREATE TABLE new_table\n ______  (\n  OPTIONS (\n    header = \"true\",\n    delimiter = \"|\"\n  )\n  LOCATION \"path/to/csv\"\n)\n```\n\nWhich of the following lines of code fills in the above blank to successfully complete the task?",
        options: [
          "None of these lines of code are needed to successfully complete the task",
          "USING CSV",
          "FROM CSV",
          "USING DELTA",
          "FROM \"path/to/csv\""
        ],
        answer: 1
      }, {
        question: "A data engineer has configured a Structured Streaming job to read from a table, manipulate the data, and then perform a streaming write into a new table.\n\nThe code block used by the data engineer is below:\n\n```python\n(spark.readStream\n  .table(\"sales\")\n  .withColumn(\"avg_price\", col(\"sales\") / col(\"units\"))\n  .writeStream\n  .option(\"checkpointLocation\", checkpointPath)\n  .outputMode(\"complete\")\n  .___\n  .table(\"new_sales\")\n)\n```\n\nIf the data engineer only wants the query to process all of the available data in as many batches as required, which of the following lines of code should the data engineer use to fill in the blank?",
        options: [
          "processingTime(\"1\")",
          "trigger(availableNow=True)",
          "trigger(parallelBatch=True)",
          "trigger(processingTime=\"once\")",
          "trigger(continuous=\"once\")"
        ],
        answer: 1
      }, {
        question: "A data engineer has developed a data pipeline to ingest data from a JSON source using Auto Loader, but the engineer has not provided any type inference or schema hints in their pipeline. Upon reviewing the data, the data engineer has noticed that all of the columns in the target table are of the string type despite some of the fields only including float or boolean values. Which of the following describes why Auto Loader inferred all of the columns to be the string type?",
        options: [
          "There was a type mismatch between the specific schema and the inferred schema",
          "JSON data is a text-based format",
          "Auto Loader only works with string data",
          "All of the fields had at least one null value",
          "Auto Loader cannot infer the schema of ingested data"
        ],
        answer: 1
      }, {
        question: "A Delta Live Table pipeline includes two datasets defined using STREAMING LIVE TABLE. Three datasets are defined against Delta Lake table sources using LIVE TABLE.\n\nThe table is configured to run in Development mode using the Continuous Pipeline Mode.\n\nAssuming previously unprocessed data exists and all definitions are valid, what is the expected outcome after clicking Start to update the pipeline?",
        options: [
          "All datasets will be updated once and the pipeline will shut down. The compute resources will be terminated.",
          "All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will persist until the pipeline is shut down.",
          "All datasets will be updated once and the pipeline will persist without any processing. The compute resources will persist but go unused.",
          "All datasets will be updated once and the pipeline will shut down. The compute resources will persist to allow for additional testing.",
          "All datasets will be updated at set intervals until the pipeline is shut down. The compute resources will persist to allow for additional testing."
        ],
        answer: 4
      },



      // 73 to 100 
      {
        "question": "Which of the following data workloads will utilize a Gold table as its source?",
        "options": [
          "A job that enriches data by parsing its timestamps into a human-readable format",
          "A job that aggregates uncleaned data to create standard summary statistics",
          "A job that cleans data by removing malformatted records",
          "A job that queries aggregated data designed to feed into a dashboard",
          "A job that ingests raw data from a streaming source into the Lakehouse"
        ],
        "answer": 3
      },
      {
        "question": "Which of the following must be specified when creating a new Delta Live Tables pipeline?",
        "options": [
          "A key-value pair configuration",
          "The preferred DBU/hour cost",
          "A path to cloud storage location for the written data",
          "A location of a target database for the written data",
          "At least one notebook library to be executed"
        ],
        "answer": 4
      },
      {
        "question": "Which of the following describes the type of workloads that are always compatible with Auto Loader?",
        "options": [
          "Streaming workloads",
          "Machine learning workloads",
          "Serverless workloads",
          "Batch workloads",
          "Dashboard workloads"
        ],
        "answer": 0
      },
      {
        "question": "A data engineer and data analyst are working together on a data pipeline. The data engineer is working on the raw, bronze, and silver layers of the pipeline using Python, and the data analyst is working on the gold layer of the pipeline using SQL. The raw source of the pipeline is a streaming input. They now want to migrate their pipeline to use Delta Live Tables.\n\nWhich of the following changes will need to be made to the pipeline when migrating to Delta Live Tables?",
        "options": [
          "None of these changes will need to be made",
          "The pipeline will need to stop using the medallion-based multi-hop architecture",
          "The pipeline will need to be written entirely in SQL",
          "The pipeline will need to use a batch source in place of a streaming source",
          "The pipeline will need to be written entirely in Python"
        ],
        "answer": 0
      },
      {
        "question": "A data engineer is using the following code block as part of a batch ingestion pipeline to read from a composable table:\n\n```python\ntransactions_df = (spark.read\n                   .schema(schema)\n                   .format(\"delta\")\n                   .table(\"transactions\")\n                   )\n```\n\nWhich of the following changes needs to be made so this code block will work when the `transactions` table is a stream source?",
        "options": [
          "Replace predict with a stream-friendly prediction function",
          "Replace schema(schema) with option(\"maxFilesPerTrigger\", 1)",
          "Replace \"transactions\" with the path to the location of the Delta table",
          "Replace format(\"delta\") with format(\"stream\")",
          "Replace spark.read with spark.readStream"
        ],
        "answer": 4
      },
      {
        "question": "Which of the following queries is performing a streaming hop from raw data to a Bronze table?",
        "options": [
          `(spark.table("sales")\n  .groupBy("store")\n  .agg(sum("sales"))\n  .writeStream\n  .option("checkpointLocation", checkpointPath)\n  .outputMode("complete")\n  .table("newSales"))`,
          `(spark.table("sales")\n  .filter(col("units") > 0)\n  .writeStream\n  .option("checkpointLocation", checkpointPath)\n  .outputMode("append")\n  .table("newSales"))`,
          `(spark.table("sales")\n  .withColumn("avgPrice", col("sales") / col("units"))\n  .writeStream\n  .option("checkpointLocation", checkpointPath)\n  .outputMode("append")\n  .table("newSales"))`,
          `(spark.read.load(rawSalesLocation)\n  .write\n  .mode("append")\n  .table("newSales"))`,
          `(spark.readStream.load(rawSalesLocation)\n  .writeStream\n  .option("checkpointLocation", checkpointPath)\n  .outputMode("append")\n  .table("newSales"))`
        ],
        "answer": 4
      },
      {
        "question": "A dataset has been defined using Delta Live Tables and includes an expectations clause:\n\n```sql\nCONSTRAINT valid_timestamp EXPECT (timestamp > '2020-01-01') ON VIOLATION FAIL UPDATE\n```\n\nWhat is the expected behavior when a batch of data containing data that violates these constraints is processed?",
        "options": [
          "Records that violate the expectation are dropped from the target dataset and recorded as invalid in the event log.",
          "Records that violate the expectation cause the job to fail.",
          "Records that violate the expectation are dropped from the target dataset and loaded into a quarantine table.",
          "Records that violate the expectation are added to the target dataset and recorded as invalid in the event log.",
          "Records that violate the expectation are added to the target dataset and flagged as invalid in a field added to the target dataset."
        ],
        "answer": 1
      },
      {
        "question": "Which of the following statements regarding the relationship between Silver tables and Bronze tables is always true?",
        "options": [
          "Silver tables contain a less refined, less clean view of data than Bronze data.",
          "Silver tables contain aggregates while Bronze data is unaggregated.",
          "Silver tables contain more data than Bronze tables.",
          "Silver tables contain a more refined and cleaner view of data than Bronze tables.",
          "Silver tables contain less data than Bronze tables."
        ],
        "answer": 3
      },
      {
        "question": "A data engineering team has noticed that their Databricks SQL queries are running too slowly when they are submitted to a non-running SQL endpoint. The data engineering team wants this issue to be resolved.\n\nWhich of the following approaches can the team use to reduce the time it takes to return results in this scenario?",
        "options": [
          "They can turn on the Serverless feature for the SQL endpoint and change the Spot Instance Policy to \"Reliability Optimized.\"",
          "They can turn on the Auto Stop feature for the SQL endpoint.",
          "They can increase the cluster size of the SQL endpoint.",
          "They can turn on the Serverless feature for the SQL endpoint.",
          "They can increase the maximum bound of the SQL endpoint's scaling range."
        ],
        "answer": 3
      }, {
        "question": "A data engineer has a Job that has a complex run schedule, and they want to transfer that schedule to other Jobs.\n\nRather than manually selecting each value in the scheduling form in Databricks, which of the following tools can the data engineer use to represent and submit the schedule programmatically?",
        "options": [
          "pyspark.sql.types.DateType",
          "datetime",
          "pyspark.sql.types.TimestampType",
          "Cron syntax",
          "There is no way to represent and submit this information programmatically"
        ],
        "answer": 3
      },
      {
        "question": "The data architect has decided that once data has been ingested from external sources into the Databricks Lakehouse, table access controls will be leveraged to manage permissions for all production tables and views.\n\nThe following logic was executed to grant privileges for interactive queries on a production database to the core engineering group.\n\n```sql\nGRANT USAGE ON DATABASE prod TO eng;\nGRANT SELECT ON DATABASE prod TO eng;\n```\n\nAssuming these are the only privileges that have been granted to the eng group and that these users are not workspace administrators, which statement describes their privileges?",
        "options": [
          "Group members have full permissions on the prod database and can also assign permissions to other users or groups.",
          "Group members are able to list all tables in the prod database but are not able to see the results of any queries on those tables.",
          "Group members are able to query and modify all tables and views in the prod database, but cannot create new tables or views.",
          "Group members are able to query all tables and views in the prod database, but cannot create or edit anything in the database.",
          "Group members are able to create, query, and modify all tables and views in the prod database, but cannot define custom functions."
        ],
        "answer": 3
      },
      {
        "question": "An engineering manager uses a Databricks SQL query to monitor ingestion latency for each data source. The manager checks the results of the query every day, but they are manually rerunning the query each day and waiting for the results.\n\nWhich of the following approaches can the manager use to ensure the results of the query are updated each day?",
        "options": [
          "They can schedule the query to refresh every 1 day from the SQL endpoint's page in Databricks SQL.",
          "They can schedule the query to refresh every 12 hours from the SQL endpoint's page in Databricks SQL.",
          "They can schedule the query to refresh every 1 day from the query's page in Databricks SQL.",
          "They can schedule the query to run every 1 day from the Jobs UI.",
          "They can schedule the query to run every 12 hours from the Jobs UI."
        ],
        "answer": 2
      },
      {
        "question": "In which of the following scenarios should a data engineer select a Task in the Depends On field of a new Databricks Job Task?",
        "options": [
          "When another task needs to be replaced by the new task",
          "When another task needs to fail before the new task begins",
          "When another task has the same dependency libraries as the new task",
          "When another task needs to use as little compute resources as possible",
          "When another task needs to successfully complete before the new task begins"
        ],
        "answer": 4
      },
      {
        "question": "A data engineer wants to schedule their Databricks SQL dashboard to refresh every hour, but they only want the associated SQL endpoint to be running when it is necessary. The dashboard has multiple queries on multiple datasets associated with it. The data that feeds the dashboard is automatically processed using a Databricks Job.\n\nWhich of the following approaches can the data engineer use to minimize the total running time of the SQL endpoint used in the refresh schedule of their dashboard?",
        "options": [
          "They can turn on the Auto Stop feature for the SQL endpoint.",
          "They can ensure the dashboard's SQL endpoint is not one of the included query's SQL endpoint.",
          "They can reduce the cluster size of the SQL endpoint.",
          "They can ensure the dashboard's SQL endpoint matches each of the queries' SQL endpoints.",
          "They can set up the dashboard's SQL endpoint to be serverless."
        ],
        "answer": 0
      },
      {
        "question": "A data engineer needs access to a table `new_table`, but they do not have the correct permissions. They can ask the table owner for permission, but they do not know who the table owner is.\n\nWhich of the following approaches can be used to identify the owner of `new_table`?",
        "options": [
          "Review the Permissions tab in the table's page in Data Explorer",
          "All of these options can be used to identify the owner of the table",
          "Review the Owner field in the table's page in Data Explorer",
          "Review the Owner field in the table's page in the cloud storage solution",
          "There is no way to identify the owner of the table"
        ],
        "answer": 2
      },
      {
        "question": "Which data lakehouse feature results in improved data quality over a traditional data lake?",
        "options": [
          "A data lakehouse stores data in open formats.",
          "A data lakehouse allows the use of SQL queries to examine data.",
          "A data lakehouse provides storage solutions for structured and unstructured data.",
          "A data lakehouse supports ACID-compliant transactions."
        ],
        "answer": 3
      },
      {
        "question": "In which scenario will a data team want to utilize cluster pools?",
        "options": [
          "An automated report needs to be version-controlled across multiple collaborators.",
          "An automated report needs to be runnable by all stakeholders.",
          "An automated report needs to be refreshed as quickly as possible.",
          "An automated report needs to be made reproducible."
        ],
        "answer": 2
      },
      {
        "question": "What is hosted completely in the control plane of the classic Databricks architecture?",
        "options": [
          "Worker node",
          "Databricks web application",
          "Driver node",
          "Databricks Filesystem"
        ],
        "answer": 1
      },
      {
        "question": "What is a benefit of the Databricks Lakehouse Architecture embracing open source technologies?",
        "options": [
          "Avoiding vendor lock-in",
          "Simplified governance",
          "Ability to scale workloads",
          "Cloud-specific integrations"
        ],
        "answer": 0
      },
      {
        "question": "A data engineer needs to use a Delta table as part of a data pipeline, but they do not know if they have the appropriate permissions.\n\nIn which location can the data engineer review their permissions on the table?",
        "options": [
          "Jobs",
          "Dashboards",
          "Catalog Explorer",
          "Repos"
        ],
        "answer": 2
      },
      {
        "question": "Which file format is used for storing Delta Lake Table?",
        "options": [
          "CSV",
          "Parquet",
          "JSON",
          "Delta"
        ],
        "answer": 1
      },
      {
        "question": "A data architect has determined that a table of the following format is necessary:\n\n```\nemployeeId startDate avgRating\na1          2009-01-06 5.5\na2          2018-11-21 7.1\n--          --         ...\n```\n\nWhich code block is used by SQL DDL command to create an empty Delta table in the above format regardless of whether a table already exists with this name?",
        "options": [
          "CREATE OR REPLACE TABLE table_name (employeeId STRING, startDate DATE, avgRating FLOAT)",
          "CREATE OR REPLACE TABLE table_name WITH COLUMNS (employeeId STRING, startDate DATE, avgRating FLOAT) USING DELTA",
          "CREATE TABLE IF NOT EXISTS table_name (employeeId STRING, startDate DATE, avgRating FLOAT)",
          "CREATE TABLE table_name AS SELECT employeeId STRING, startDate DATE, avgRating FLOAT"
        ],
        "answer": 0
      },
      {
        "question": "A data engineer has been given a new record of data:\n\n```\nid STRING = 'a1'\nrank INTEGER = 6\nrating FLOAT = 9.4\n```\n\nWhich SQL commands can be used to append the new record to an existing Delta table `my_table`?",
        "options": [
          "INSERT INTO my_table VALUES ('a1', 6, 9.4)",
          "INSERT VALUES ('a1', 6, 9.4) INTO my_table",
          "UPDATE my_table VALUES ('a1', 6, 9.4)",
          "UPDATE VALUES ('a1', 6, 9.4) my_table"
        ],
        "answer": 0
      }, {
        question: "Which of the following benefits is provided by the array functions from Spark SQL?",
        options: [
          "An ability to work with data in a variety of types at once",
          "An ability to work with data within certain partitions and windows",
          "An ability to work with time-related data in specified intervals",
          "An ability to work with complex, nested data ingested from JSON files"
        ],
        answer: 3
      },
      {
        question: "When evaluating the Ganglia Metrics for a given cluster with 3 executor nodes, which indicator would signal proper utilization of the VM's resources?",
        options: [
          "The Five Minute Load Average remains consistent/flat",
          "CPU Utilization is around 75%",
          "Network I/O never spikes",
          "Total Disk Space remains constant"
        ],
        answer: 1
      },
      {
        question: "Which of the following commands will return the number of null values in the member_id column?",
        options: [
          "SELECT count(member_id) FROM my_table;",
          "SELECT count(member_id) - count_null(member_id) FROM my_table;",
          "SELECT count_if(member_id IS NULL) FROM my_table;",
          "SELECT null(member_id) FROM my_table;"
        ],
        answer: 2 // Assuming zero-based indexing
      },
      {
        question: "A data engineer wants to create a relational object by pulling data from two tables. The relational object does not need to be used by other data engineers in other sessions. In order to save on storage costs, the data engineer wants to avoid copying and storing physical data. Which of the following relational objects should the data engineer create?",
        options: [
          "Spark SQL Table",
          "View",
          "Delta Table",
          "Temporary view"
        ],
        answer: 3 // Assuming zero-based indexing
      },
      {
        question: "What is the retention of job run history?",
        options: [
          "It is retained until you export or delete job run logs",
          "It is retained for 30 days, during which time you can deliver job run logs to DBFS or S3",
          "It is retained for 60 days, during which you can export notebook run results to HTML",
          "It is retained for 60 days, after which logs are archived"
        ],
        answer: 2
      },
      {
        question: "In which of the following scenarios should a data engineer use the MERGE INTO command instead of the INSERT INTO command?",
        options: [
          "When the location of the data needs to be changed",
          "When the target table is an external table",
          "When the source is not a Delta table",
          "When the target table cannot contain duplicate records"
        ],
        answer: 3
      },
      {
        question: "A data engineer needs to create a table in Databricks using data from their organization's existing SQLite database.\n\nThey run the following command:\n\n```sql\nCREATE TABLE jdbc_customer360\nUSING (__FILL_IN_THE_BLANK__)\nOPTIONS (\n  url \"jdbc:sqlite:/customers.db\",\n  dbtable \"customer360\"\n)\n```\n\nWhich of the following lines of code fills in the above blank to successfully complete the task?",
        options: [
          "org.apache.spark.sql.jdbc",
          "autoloader",
          "org.apache.spark.sql.sqlite",
          "sqlite"
        ],
        answer: 0 // Assuming zero-based indexing
      },
      {
        question: "A data engineer wants to create a relational object by pulling data from two tables. The relational object does not need to be used by other data engineers in other sessions. In order to save on storage costs, the data engineer wants to avoid copying and storing physical data. Which of the following relational objects should the data engineer create?",
        options: [
          "Spark SQL Table",
          "View",
          "Delta Table",
          "Temporary view"
        ],
        answer: 3 // Assuming zero-based indexing
      },
      {
        question: "A data engineer and data analyst are working together on a data pipeline. The data engineer is working on the raw, bronze, and silver layers of the pipeline using Python, and the data analyst is working on the gold layer of the pipeline using SQL. The raw source of the pipeline is a streaming input. They now want to migrate their pipeline to use Delta Live Tables. Which of the following changes will need to be made to the pipeline when migrating to Delta Live Tables?",
        options: [
          "The pipeline will need to be written entirely in Python",
          "The pipeline will need to stop the medallion-based multi-hop architecture",
          "The pipeline will need to be written entirely in SQL",
          "The pipeline will need to use a batch source in place of a streaming source"
        ],
        answer: 3 // Assuming zero-based indexing
      },
      {
        question: "A data engineer has a Job that has a complex run schedule, and they want to transfer that schedule to other Jobs. Rather than manually selecting each value in the scheduling form in Databricks, which of the following tools can the data engineer use to represent and submit the schedule programmatically?",
        options: [
          "pyspark.sql.types.DateType",
          "datetime",
          "pyspark.sql.types.TimestampType",
          "Cron syntax"
        ],
        answer: 3 // Assuming zero-based indexing
      },
      {
        question: "A company uses Amazon Redshift as its data warehouse service. A data engineer needs to design a physical data model.\n\nThe data engineer encounters a de-normalized table that is growing in size. The table does not have a suitable column to use as the distribution key.\n\nWhich distribution style should the data engineer use to meet these requirements with the LEAST maintenance overhead?",
        options: [
          "ALL distribution",
          "EVEN distribution",
          "AUTO distribution",
          "KEY distribution"
        ],
        answer: 2 // Assuming zero-based indexing
      },
      {
        question: "A data engineer has joined an existing project and they see the following query in the project repository:\n\n```sql\nCREATE STREAMING LIVE TABLE loyal_customers AS\nSELECT customer_id\nFROM STREAM(LIVE.customers)\nWHERE loyalty_level = 'high';\n```\n\nWhich of the following describes why the STREAM function is included in the query?",
        options: [
          "The STREAM function is not needed and will cause an error.",
          "The data in the customers table has been updated since its last run.",
          "The customers table is a streaming live table.",
          "The customers table is a reference to a Structured Streaming query on a PySpark DataFrame."
        ],
        answer: 2 // Assuming zero-based indexing
      },
      {
        question: "How can Git operations must be performed outside of Databricks Repos?",
        options: [
          "Commit",
          "Pull",
          "Merge",
          "Clone"
        ],
        answer: 2 // Assuming zero-based indexing
      },
      {
        question: "A data engineering team has two tables. The first table `march_transactions` is a collection of all retail transactions in the month of March. The second table `april_transactions` is a collection of all retail transactions in the month of April. There are no duplicate records between the tables.\n\nWhich of the following commands should be run to create a new table `all_transactions` that contains all records from `march_transactions` and `april_transactions` without duplicate records?",
        options: [
          "CREATE TABLE all_transactions AS SELECT * FROM march_transactions INNER JOIN SELECT * FROM april_transactions;",
          "CREATE TABLE all_transactions AS SELECT * FROM march_transactions UNION SELECT * FROM april_transactions;",
          "CREATE TABLE all_transactions AS SELECT * FROM march_transactions OUTER JOIN SELECT * FROM april_transactions;",
          "CREATE TABLE all_transactions AS SELECT * FROM march_transactions INTERSECT SELECT * FROM april_transactions;"
        ],
        answer: 1 // Assuming zero-based indexing
      },
      {
        question: "In which of the following scenarios should a data engineer select a Task in the Depends On field of a new Databricks Job Task?",
        options: [
          "When another task needs to be replaced by the new task",
          "When another task needs to successfully complete before the new task begins",
          "When another task has the same dependency libraries as the new task",
          "When another task needs to use as little compute resources as possible"
        ],
        answer: 1 // Assuming zero-based indexing
      },
      {
        question: "In which of the following scenarios should a data engineer select a Task in the Depends On field of a new Databricks Job Task?",
        options: [
          "When another task needs to be replaced by the new task",
          "When another task needs to successfully complete before the new task begins",
          "When another task has the same dependency libraries as the new task",
          "When another task needs to use as little compute resources as possible"
        ],
        answer: 1 // Assuming zero-based indexing
      },
      {
        question: "A data engineer only wants to execute the final block of a Python program if the Python variable `day_of_week` is equal to 1 and the Python variable `review_period` is True.\n\nWhich of the following control flow statements should the data engineer use to begin this conditionally executed code block?",
        options: [
          "if day_of_week = 1 and review_period:",
          "if day_of_week = 1 and review_period = \"True\":",
          "if day_of_week = 1 & review_period := \"True\":",
          "if day_of_week == 1 and review_period:"
        ],
        answer: 3 // Assuming zero-based indexing
      },
      {
        question: "Which of the following describes the relationship between Bronze tables and raw data?",
        options: [
          "Bronze tables contain less data than raw data files.",
          "Bronze tables contain more truthful data than raw data.",
          "Bronze tables contain raw data with a schema applied.",
          "Bronze tables contain a less refined view of data than raw data."
        ],
        answer: 2 // Assuming zero-based indexing
      },
      {
        question: "A data engineer has realized that they made a mistake when making a daily update to a table. They need to use Delta time travel to restore the table to a version that is 3 days old. However, when the data engineer attempts to time travel to the older version, they are unable to restore the data because the data files have been deleted.\n\nWhich of the following explains why the data files are no longer present?",
        options: [
          "The VACUUM command was run on the table",
          "The TIME TRAVEL command was run on the table",
          "The DELETE HISTORY command was run on the table",
          "The OPTIMIZE command was run on the table"
        ],
        answer: 0 // Assuming zero-based indexing
      },
      {
        question: "An engineering manager uses a Databricks SQL query to monitor ingestion latency for each data source. The manager checks the results of the query every day, but they are manually rerunning the query each day and waiting for the results.\n\nWhich of the following approaches can the manager use to ensure the results of the query are updated each day?",
        options: [
          "They can schedule the query to refresh every 1 day from the SQL endpoint's page in Databricks SQL.",
          "They can schedule the query to refresh every 12 hours from the SQL endpoint's page in Databricks SQL.",
          "They can schedule the query to refresh every 1 day from the query's page in Databricks SQL.",
          "They can schedule the query to run every 12 hours from the Jobs UI."
        ],
        answer: 2 // Assuming zero-based indexing
      },
      {
        question: "A data engineer needs to access the view created by the sales team, using a shared cluster. The data engineer has been provided usage permissions on the catalog and schema. In order to access the view created by the sales team.\n\nWhat are the minimum permissions the data engineer would require in addition?",
        options: [
          "Needs SELECT permission on the VIEW and the underlying TABLE.",
          "Needs SELECT permission only on the VIEW.",
          "Needs ALL PRIVILEGES on the VIEW.",
          "Needs ALL PRIVILEGES at the SCHEMA level."
        ],
        answer: 1 // Assuming zero-based indexing
      },
      {
        question: "Which two conditions are applicable for governance in Databricks Unity Catalog? (Choose two.)",
        options: [
          "You can have more than 1 metastore within a databricks account console but only 1 per region.",
          "Both catalog and schema must have a managed location in Unity Catalog provided metastore is not associated with a location",
          "You can have multiple catalogs within metastore and 1 catalog can be associated with multiple metastore",
          "If catalog is not associated with location, it's mandatory to associate schema with managed locations",
          "If metastore is not associated with location, it's mandatory to associate catalog with managed locations"
        ],
        answer: [0, 4] // Assuming zero-based indexing for the two correct answers
      },
      {
        question: "Identify the impact of ON VIOLATION DROP ROW and ON VIOLATION FAIL UPDATE for a constraint violation.\n\nA data engineer has created an ETL pipeline using Delta Live Table to manage their company travel reimbursement detail, they want to ensure that the if the location details has not been provided by the employee, the pipeline needs to be terminated.\n\nHow can the scenario be implemented?",
        options: [
          "CONSTRAINT valid_location EXPECT (location = NULL)",
          "CONSTRAINT valid_location EXPECT (location != NULL) ON VIOLATION FAIL UPDATE",
          "CONSTRAINT valid_location EXPECT (location != NULL) ON DROP ROW",
          "CONSTRAINT valid_location EXPECT (location != NULL) ON VIOLATION FAIL"
        ],
        answer: 1 // Assuming zero-based indexing
      },
      {
        question: "Identify a scenario to use an external table.\n\nA Data Engineer needs to create a parquet bronze table and wants to ensure that it gets stored in a specific path in an external location.\n\nWhich table can be created in this scenario?",
        options: [
          "An external table where the location is pointing to specific path in external location.",
          "An external table where the schema has managed location pointing to specific path in external location.",
          "A managed table where the catalog has managed location pointing to specific path in external location.",
          "A managed table where the location is pointing to specific path in external location."
        ],
        answer: 0 // Assuming zero-based indexing
      },

      {
        question: "Data engineer and data analysts are working together on a data pipeline. The data engineer is working on the raw, bronze, and silver layers of the pipeline using Python, and the data analyst is working on the gold layer of the pipeline using SQL. The raw source of the pipeline is a streaming input. They now want to migrate their pipeline to use Delta Live Tables.\n\nWhich of the following changes will need to be made to the pipeline when migrating to Delta Live Tables?",
        options: [
          "The pipeline can have different notebook sources in SQL & Python",
          "The pipeline will need to be written entirely in SQL",
          "The pipeline will need to use a batch source in place of a streaming source",
          "The pipeline will need to be written entirely in Python"
        ],
        answer: 0 // Assuming zero-based indexing
      },
      {
        question: "A data engineer has configured a Structured Streaming job to read from a table, manipulate the data, and then perform a streaming write into a new table.\n\nThe code block used by the data engineer is below:\n\n```python\n(spark.readStream\n  .table(\"sales\")\n  .withColumn(\"avg_price\", col(\"sales\") / col(\"units\"))\n  .writeStream\n  .option(\"checkpointLocation\", checkpointPath)\n  .__FILL_IN_THE_BLANK__\n  .outputMode(\"complete\")\n  .table(\"new_sales\"))\n```\n\nThe data engineer only wants the query to process all of the available data in as many batches as required.\n\nWhich line of code should the data engineer use to fill in the blank?",
        options: [
          ".trigger(availableNow=True)",
          ".trigger(processingTime=\"once\")",
          ".trigger(continuous=\"once\")",
          ".trigger(once=True)"
        ],
        answer: 0 // Assuming zero-based indexing
      },
      {
        question: "What can be used to simplify and unify siloed data architectures that are specialized for specific use cases?",
        options: [
          "Delta Lake",
          "Data lake",
          "Data warehouse",
          "Data lakehouse"
        ],
        answer: 3 // Assuming zero-based indexing
      },
      {
        question: "In a healthcare provider organization using Delta Lake to store electronic health records (EHRs), a data analyst needs to analyze a snapshot of the patient_records table from two weeks ago before some recent data corrections were applied.\n\nWhat approach should the Data Engineer take to allow the analyst to query that specific prior version?",
        options: [
          "Truncate the table to remove all data, then reload the data from two weeks ago into the truncated table for the analyst to query.",
          "Identify the version number corresponding to two weeks ago from the Delta transaction log, share that version number with the analyst to query using VERSION AS OF syntax, or export that version to a new Delta table for the analyst to query.",
          "Restore the table to the version from two weeks ago using the RESTORE command, and have the analyst query the restored table.",
          "Use the VACUUM command to remove all versions of the table older than two weeks, then the analyst can query the remaining version."
        ],
        answer: 1 // Assuming zero-based indexing
      },
      {
        question: "Which two components function in the DB platform architecture's control plane? (Choose two.)",
        options: [
          "Virtual Machines",
          "Compute Orchestration",
          "Serverless Compute",
          "Compute",
          "Unity Catalog"
        ],
        answer: [1, 4] // Assuming zero-based indexing for the two correct answers
      },
      {
        question: "Identify how the count_if function and the count where x is null can be used\n\nConsider a table `random_values` with below data:\n\n```\ncol1\n0\n1\n2\nNULL\n2\n3\n```\n\nWhat would be the output of below query?\n\n```sql\nselect count_if(col > 1) as count_a, count(*) as count_b, count(col) as count_c from random_values col1\n```",
        options: [
          "3, 6, 5",
          "4, 6, 5",
          "3, 6, 6",
          "4, 6, 6"
        ],
        answer: 0 // Assuming zero-based indexing
      },
      {
        question: "Differentiate between all-purpose clusters and jobs clusters.\n\nA data engineering team has created a python notebook to load data from cloud storage, this job has been tested and now needs to be scheduled in production.\n\nWhich would be the best cluster to be used in this case?",
        options: [
          "All purpose cluster",
          "Any Unity Catalog-enabled cluster",
          "Jobs Cluster",
          "Serverless SQL warehouse"
        ],
        answer: 2 // Assuming zero-based indexing
      },
      {
        question: "A Delta Lake table with CDF enabled in the Lakehouse named customer_churn_params is used in churn prediction by the machine learning team. The table contains information about customers derived from a number of upstream sources. Currently, the data engineering team populates this table nightly by overwriting the table with the current valid values derived from upstream data sources.\n\nThe churn prediction model used by the ML team is fairly stable in production. The team is only interested in making predictions on records that have changed in the past 24 hours.\n\nWhich approach would simplify the identification of these changed records?",
        options: [
          "Apply the churn model to all rows in the customer_churn_params table, but implement logic to perform an upsert into the predictions table that ignores rows where predictions have not changed.",
          "Convert the batch job to a Structured Streaming job using the complete output mode; configure a Structured Streaming job to read from the customer_churn_params table and incrementally predict against the churn model.",
          "Replace the current overwrite logic with a merge statement to modify only those records that have changed; write logic to make predictions on the changed records identified by the change data feed.",
          "Modify the overwrite logic to include a field populated by calling spark.sql.functions.current_timestamp() as data are being written; use this field to identify records written on a particular date."
        ],
        answer: 2 // Assuming zero-based indexing
      },
      {
        question: "The business intelligence team has a dashboard configured to track various summary metrics for retail stores. This includes total sales for the previous day alongside totals and averages for a variety of time periods. The fields required to populate this dashboard have the following schema:\n\n```\nstore_id INT, total_sales_qtd FLOAT, avg_daily_sales_qtd FLOAT, total_sales_ytd FLOAT, avg_daily_sales_ytd FLOAT, previous_day_sales FLOAT, total_sales_7d FLOAT, avg_daily_sales_7d FLOAT, updated TIMESTAMP\n```\n\nFor demand forecasting, the Lakehouse contains a validated table of all itemized sales updated incrementally in near real-time. This table, named `products_per_order`, includes the following fields:\n\n```\nstore_id INT, order_id INT, product_id INT, quantity INT, price FLOAT, order_timestamp TIMESTAMP\n```\n\nBecause reporting on long-term sales trends is less volatile, analysts using the new dashboard only require data to be refreshed once daily. Because the dashboard will be queried interactively by many users throughout a normal business day, it should return results quickly and reduce total compute associated with each materialization.\n\nWhich solution meets the expectations of the end users while controlling and limiting possible costs?",
        options: [
          "Populate the dashboard by configuring a nightly batch job to save the required values as a table overwritten with each update.",
          "Use Structured Streaming to configure a live dashboard against the `products_per_order` table within a Databricks notebook.",
          "Create a Databricks View against the `products_per_order` table that aggregates the necessary fields; schedule a Databricks SQL query to refresh this view once per day.",
          "Configure a Databricks SQL dashboard directly against the `products_per_order` table."
        ],
        answer: 0 // Assuming zero-based indexing
      },
      {
        question: "A data engineer wants to schedule their Databricks SQL dashboard to refresh once per day, but they only want the associated SQL endpoint to be running when it is necessary.\n\nWhich approach can the data engineer use to minimize the total running time of the SQL endpoint used in the refresh schedule of their dashboard?",
        options: [
          "They can ensure the dashboard's SQL endpoint matches each of the queries' SQL endpoints.",
          "They can set up the dashboard's SQL endpoint to be serverless.",
          "They can turn on the Auto Stop feature for the SQL endpoint.",
          "They can ensure the dashboard's SQL endpoint is not one of the included query's SQL endpoint."
        ],
        answer: 2 // Assuming zero-based indexing
      },
      {
        question: "A data engineer has been using a Databricks SQL dashboard to monitor the cleanliness of the input data to an ELT job. The ELT job has its Databricks SQL query that returns the number of input records containing unexpected NULL values. The data engineer wants their entire team to be notified via a messaging webhook whenever this value reaches 100.\n\nWhich approach can the data engineer use to notify their entire team via a messaging webhook whenever the number of NULL values reaches 100?",
        options: [
          "They can set up an Alert with a custom template.",
          "They can set up an Alert with a new email alert destination.",
          "They can set up an Alert with a new webhook alert destination.",
          "They can set up an Alert with one-time notifications."
        ],
        answer: 2 // Assuming zero-based indexing
      },
      {
        question: "A data engineer has a Job with multiple tasks that runs nightly. Each of the tasks runs slowly because the clusters take a long time to start.\n\nWhich action can the data engineer perform to improve the start up time for the clusters used for the Job?",
        options: [
          "They can use endpoints available in Databricks SQL",
          "They can use jobs clusters instead of all-purpose clusters",
          "They can configure the clusters to autoscale for larger data sizes",
          "They can use clusters that are from a cluster pool"
        ],
        answer: 3 // Assuming zero-based indexing
      },
      {
        question: "A dataset has been defined using Delta Live Tables and includes an expectations clause:\n\n```sql\nCONSTRAINT valid_timestamp EXPECT (timestamp > '2020-01-01') ON VIOLATION DROP ROW\n```\n\nWhat is the expected behavior when a batch of data containing data that violates these constraints is processed?",
        options: [
          "Records that violate the expectation cause the job to fail.",
          "Records that violate the expectation are added to the target dataset and flagged as invalid in a field added to the target dataset.",
          "Records that violate the expectation are dropped from the target dataset and recorded as invalid in the event log.",
          "Records that violate the expectation are added to the target dataset and recorded as invalid in the event log."
        ],
        answer: 2 // Assuming zero-based indexing
      },
      {
        question: "Which query is performing a streaming hop from raw data to a Bronze table?",
        options: [
          `(spark.table("sales")\n  .groupBy("store")\n  .agg(sum("sales"))\n  .writeStream\n  .option("checkpointLocation", checkpointPath)\n  .outputMode("complete")\n  .table("newSales"))`,
          `(spark.read.load(rawSalesLocation)\n  .writeStream\n  .outputMode("append")\n  .table("newSales"))`,
          `(spark.table("sales")\n  .withColumn("avgPrice", col("sales") / col("units"))\n  .writeStream\n  .option("checkpointLocation", checkpointPath)\n  .outputMode("append")\n  .table("newSales"))`,
          `(spark.readStream.load(rawSalesLocation)\n  .writeStream\n  .option("checkpointLocation", checkpointPath)\n  .outputMode("append")\n  .table("newSales"))`
        ],
        answer: 3 // Assuming zero-based indexing
      },
      {
        question: "Which statement regarding the relationship between Silver tables and Bronze tables is always true?",
        options: [
          "Silver tables contain a less refined, less clean view of data than Bronze data.",
          "Silver tables contain aggregates while Bronze data is unaggregated.",
          "Silver tables contain more data than Bronze tables.",
          "Silver tables contain less data than Bronze tables."
        ],
        answer: 3 // Assuming zero-based indexing
      },
      {
        question: "A data engineer has developed a data pipeline to ingest data from a JSON source using Auto Loader, but the engineer has not provided any type inference or schema hints in their pipeline. Upon reviewing the data, the data engineer has noticed that all of the columns in the target table are of the string type despite some of the fields only including float or boolean values.\n\nWhy has Auto Loader inferred all of the columns to be of the string type?",
        options: [
          "Auto Loader cannot infer the schema of ingested data",
          "JSON data is a text-based format",
          "Auto Loader only works with string data",
          "All of the fields had at least one null value"
        ],
        answer: 1 // Assuming zero-based indexing
      },
      {
        question: "Which type of workloads are compatible with Auto Loader?",
        options: [
          "Streaming workloads",
          "Machine learning workloads",
          "Serverless workloads",
          "Batch workloads"
        ],
        answer: 0 // Assuming zero-based indexing
      },
      {
        question: "A Databricks SQL dashboard has been configured to monitor the total number of records present in a collection of Delta Lake tables using the following query pattern:\n\n```sql\nSELECT COUNT(*) FROM table;\n```\n\nWhich of the following describes how results are generated each time the dashboard is updated?",
        options: [
          "The total count of rows is calculated by scanning all data files",
          "The total count of rows will be returned from cached results unless REFRESH is run",
          "The total count of records is calculated from the Delta transaction logs",
          "The total count of records is calculated from the parquet file metadata"
        ],
        answer: 2 // Assuming zero-based indexing
      },
      {
        question: "What describes the relationship between Gold tables and Silver tables?",
        options: [
          "Gold tables are more likely to contain aggregations than Silver tables.",
          "Gold tables are more likely to contain valuable data than Silver tables.",
          "Gold tables are more likely to contain a less refined view of data than Silver tables.",
          "Gold tables are more likely to contain truthful data than Silver tables."
        ],
        answer: 0 // Assuming zero-based indexing
      },
      {
        question: "What is used by Spark to record the offset range of the data being processed in each trigger in order for Structured Streaming to reliably track the exact progress of the processing so that it can handle any kind of failure by restarting and/or reprocessing?",
        options: [
          "Checkpointing and Write-ahead Logs",
          "Replayable Sources and Idempotent Sinks",
          "Write-ahead Logs and Idempotent Sinks",
          "Checkpointing and Idempotent Sinks"
        ],
        answer: 0 // Assuming zero-based indexing
      },
      {
        question: "A data engineer has three tables in a Delta Live Tables (DLT) pipeline. They have configured the pipeline to drop invalid records at each table. They notice that some data is being dropped due to quality concerns at some point in the DLT pipeline. They would like to determine at which table in their pipeline the data is being dropped.\n\nWhich approach can the data engineer take to identify the table that is dropping the records?",
        options: [
          "They can set up separate expectations for each table when developing their DLT pipeline.",
          "They can navigate to the DLT pipeline page, click on the \"Error\" button, and review the present errors.",
          "They can set up DLT to notify them via email when records are dropped.",
          "They can navigate to the DLT pipeline page, click on each table, and view the data quality statistics."
        ],
        answer: 3 // Assuming zero-based indexing
      },
      {
        question: "The data engineering team is configuring environments for development, testing, and production before beginning migration on a new data pipeline. The team requires extensive testing on both the code and data resulting from code execution, and the team wants to develop and test against data as similar to production data as possible.\n\nA junior data engineer suggests that production data can be mounted to the development and testing environments, allowing pre-production code to execute against production data. Because all users have admin privileges in the development environment, the junior data engineer has offered to configure permissions and mount this data for the team.\n\nWhich statement captures best practices for this situation?",
        options: [
          "All development, testing, and production code and data should exist in a single, unified workspace; creating separate environments for testing and development complicates administrative overhead.",
          "In environments where interactive code will be executed, production data should only be accessible with read permissions; creating isolated databases for each environment further reduces risks.",
          "As long as code in the development environment declares `USE dev_db` at the top of each notebook, there is no possibility of inadvertently committing changes back to production data sources.",
          "Because Delta Lake versions all data and supports time travel, it is not possible for user error or malicious actors to permanently delete production data; as such, it is generally safe to mount production data anywhere.",
          "Because access to production data will always be verified using passthrough credentials, it is safe to mount data to any Databricks development environment."
        ],
        answer: 1 // Assuming zero-based indexing
      },
      {
        question: "A data engineer has configured a Structured Streaming job to read from a table, manipulate the data, and then perform a streaming write into a new table.\n\nThe code block used by the data engineer is below:\n\n```python\n(spark.readStream\n  .table(\"sales\")\n  .withColumn(\"avg_price\", col(\"sales\") / col(\"units\"))\n  .writeStream\n  .option(\"checkpointLocation\", checkpointPath)\n  .__FILL_IN_THE_BLANK__\n  .outputMode(\"complete\")\n  .table(\"new_sales\"))\n```\n\nWhich line of code should the data engineer use to fill in the blank if the data engineer only wants the query to execute a micro-batch to process data every 5 seconds?",
        options: [
          ".trigger(\"5 seconds\")",
          ".trigger(continuous=\"5 seconds\")",
          ".trigger(once=\"5 seconds\")",
          ".trigger(processingTime=\"5 seconds\")"
        ],
        answer: 3 // Assuming zero-based indexing
      },
      {
        question: "A data engineer that is new to using Python needs to create a Python function to add two integers together and return the sum?\n\nWhich code block can the data engineer use to complete this task?",
        options: [
          "function add_integers(x, y):\n  return x + y",
          "def add_integers(x, y):\n  print(x + y)",
          "def add_integers(x, y):\n  x + y",
          "def add_integers(x, y):\n  return x + y"
        ],
        answer: 3 // Assuming zero-based indexing
      },
      {
        question: "A data engineer is working with two tables. Each of these tables is displayed below in its entirety.\n\n```\nSales\ncustomer_ids spend units\na1          28.94  7\na3          874.1223 3\na4          8.99   1\n\nfavorite_stores\ncustomer_ids store_id\na1          s1\na2          s1\na4          s2\n```\n\nThe data engineer runs the following query to join these tables together:\n\n```sql\nSELECT\n  sales.customer_id,\n  sales.spend,\n  favorite_stores.store_id\nFROM sales\nLEFT JOIN favorite_stores\nON sales.customer_id = favorite_stores.customer_id;\n```\n\nWhat is the expected output of the above query?",
        options: [
          "customer_ids|spend  |store_id|\n------------|--------|--------|\na1          |28.94  |s1      |\na3          |874.12  |NULL    |\na4          |8.99   |s2      |",
          "customer_ids|spend  |store_id|\n------------|--------|--------|\na1          |28.94  |s1      |\na4          |8.99   |s2      |",
          "customer_ids|spend   |store_id|\n------------|---------|--------|\na1          |28.94    |s1      |\na3          |874.1223 |NULL    |\na4          |8.99     |s2      |",
          "customer_ids|spend  |store_id|\n------------|--------|--------|\na2          |NULL   |s1      |\na1          |28.94  |s1      |\na3          |874.12  |NULL    |\na4          |8.99   |s2      |"
        ],
        answer: 2 // Assuming zero-based indexing
      },
      {
        question: "A data engineer has a Python variable `table_name` that they would like to use in a SQL query. They want to construct a Python code block that will run the query using `table_name`.\n\nThey have the following incomplete code block:\n\n```python\n___(f\"SELECT customer_id, spend FROM {table_name}\")\n```\n\nWhat can be used to fill in the blank to successfully complete the task?",
        options: [
          "spark.sql",
          "spark.sq",
          "spark.table",
          "dbutils.sql"
        ],
        answer: 0 // Assuming zero-based indexing
      },
      {
        question: "Which SQL keyword can be used to convert a table from a long format to a wide format?",
        options: [
          "TRANSFORM",
          "PIVOT",
          "SUM",
          "CONVERT"
        ],
        answer: 1 // Assuming zero-based indexing
      },
      {
        question: "What is a benefit of creating an external table from Parquet rather than CSV when using a CREATE TABLE AS SELECT statement?",
        options: [
          "Parquet files can be partitioned",
          "Parquet files will become Delta tables",
          "Parquet files have a well-defined schema",
          "Parquet files have the ability to be optimized"
        ],
        answer: 2 // Assuming zero-based indexing
      },
      {
        question: "A data engineer needs to create a table in Databricks using data from a CSV file at location `/path/to/csv`.\n\nThey run the following command:\n\n```sql\nCREATE TABLE new_table\n__FILL_IN_THE_BLANK__\nOPTIONS (\n  header = \"true\",\n  delimiter = \"|\"\n)\nLOCATION \"/path/to/csv\"\n```\n\nWhich of the following lines of code fills in the above blank to successfully complete the task?",
        options: [
          "FROM `/path/to/csv`",
          "USING CSV",
          "FROM CSV",
          "USING DELTA"
        ],
        answer: 1 // Assuming zero-based indexing
      },
      {
        question: "A data engineer is attempting to drop a Spark SQL table `my_table` and runs the following command:\n\n```sql\nDROP TABLE IF EXISTS my_table;\n```\n\nAfter running this command, the engineer notices that the data files and metadata files have been deleted from the file system.\n\nWhat is the reason behind the deletion of all these files?",
        options: [
          "The table was managed",
          "The table's data was smaller than 10 GB",
          "The table did not have a location",
          "The table was external"
        ],
        answer: 0 // Assuming zero-based indexing
      },
      {
        question: "A data engineer has created a new database using the following command:\n\n```sql\nCREATE DATABASE IF NOT EXISTS customer360;\n```\n\nIn which location will the `customer360` database be located?",
        options: [
          "dbfs:/user/hive/database/customer360",
          "dbfs:/user/hive/warehouse/customer360.db",
          "dbfs:/user/hive/customer360",
          "dbfs:/user/hive/database"
        ],
        answer: 1 // Assuming zero-based indexing
      },
      {
        question: "A data analyst has created a Delta table `sales` that is used by the entire data analysis team. They want help from the data engineering team to implement a series of tests to ensure the data is clean. However, the data engineering team uses Python for its tests rather than SQL.\n\nWhich command could the data engineering team use to access `sales` in PySpark?",
        options: [
          "SELECT * FROM sales",
          "spark.table(\"sales\")",
          "spark.sql(\"sales\")",
          "spark.delta.table(\"sales\")"
        ],
        answer: 1 // Assuming zero-based indexing
      },
      {
        question: "Which command can be used to write data into a Delta table while avoiding the writing of duplicate records?",
        options: [
          "DROP",
          "INSERT",
          "MERGE",
          "APPEND"
        ],
        answer: 2 // Assuming zero-based indexing
      },
      {
        question: "Which statement describes a key benefit of an end-to-end test?",
        options: [
          "Makes it easier to automate your test suite",
          "Pinpoints errors in the building blocks of your application",
          "Provides testing coverage for all code paths and branches",
          "Closely simulates real world usage of your application",
          "Ensures code is optimized for a real-life workflow"
        ],
        answer: 3 // Assuming zero-based indexing
      },
      {
        question: "What is the first line of a Databricks Python notebook when viewed in a text editor?",
        options: [
          "%python",
          "// Databricks notebook source",
          "# Databricks notebook source",
          "-- Databricks notebook source",
          "# MAGIC %python"
        ],
        answer: 2 // Assuming zero-based indexing
      },
      {
        question: "Which indicators would you look for in the Spark UI's Storage tab to signal that a cached table is not performing optimally? Assume you are using Spark's `MEMORY_ONLY` storage level.",
        options: [
          "Size on Disk is < Size in Memory",
          "The RDD Block Name includes the `**` annotation signaling a failure to cache",
          "Size on Disk is > 0",
          "The number of Cached Partitions > the number of Spark Partitions",
          "On Heap Memory Usage is within 75% of Off Heap Memory Usage"
        ],
        answer: 2
      }

    ];
