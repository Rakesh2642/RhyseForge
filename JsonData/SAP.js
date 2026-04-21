const questions = [
    {
        "question": "What are advantages of using a field symbol for internal table row access? (Choose two.)",
        "options": [
            "Using a field symbol is faster than using a work area.",
            "The field symbol can be reused for other programs.",
            "The row content is copied to the field symbol instead of a work area.",
            "A MODIFY statement to write changed contents back to the table is not required."
        ],
        "answer": [0, 3] // AD => [0, 3]
    },
    {
        "question": "In an Access Control Object, which clauses are used? (Choose three.)",
        "options": [
            "DEFINE ROLE (to specify the role name)",
            "RETURN CODE (to assign the return code of the authority check)",
            "REVOKE (to remove access to the data source)",
            "GRANT (to identify the data source)",
            "WHERE (to specify the access conditions)"
        ],
        "answer": [0, 3, 4] // ADE => [0, 3, 4]
    },
    {
        "question": "Which of the following are valid sort operations for internal tables? (Choose three.)",
        "options": [
            "Sort a standard table using - SORT itab BY field1 field2.",
            "Sort a standard table using - SORT itab.",
            "Sort a sorted table using - SORT itab DESCENDING.",
            "Sort a sorted table using - Sort itab BY field1 ASCENDING field2 DESCENDING.",
            "Sort a standard table using - SORT itab ASCENDING."
        ],
        "answer": [0, 1, 4] // ABE => [0, 1, 4]
    },
    {
        "question": "When processing an internal table with the statement LOOP AT itab...ENDLOOP, what system variable contains the current row number?",
        "options": [
            "sy-tabix",
            "sy-linno",
            "sy-index",
            "sy-subrc"
        ],
        "answer": 0 // Single answer, remains unchanged
    },
    {
        "question": "When does SAP recommend to use a sorted or a hashed table respectively? (Choose two.)",
        "options": [
            "A hashed table, when you read a single record and specify the complete key.",
            "A sorted table, when you read a subset in a loop and specify a part of the key from the left without gaps.",
            "A hashed table, when you read a subset in a loop and specify a part of the key from the left without gaps.",
            "A sorted table, when you read a single record and specify non-key fields."
        ],
        "answer": [0, 1] // AB => [0, 1]
    },
    {
        "question": "Which of the following are incomplete ABAP types? (Choose two.)",
        "options": [
            "T",
            "String",
            "C",
            "P"
        ],
        "answer": [0, 3] // AD => [0, 3]
    },
    {
        "question": "Which function call returns 0?",
        "options": [
            "find_any_of( val = 'ABAP ABAP abap' sub = 'AB' )",
            "count( val = 'ABAP ABAP abap' sub = 'AB' )",
            "count_any_of( val = 'ABAP ABAP abap' sub = 'AB' )",
            "find_any_not_of( val = 'ABAP ABAP abap' sub = 'AB' )"
        ],
        "answer": 3 // Single answer, remains unchanged
    },
    {
        "question": "What are some features of a unique secondary key? (Choose two.)",
        "options": [
            "It is updated when the table is modified.",
            "It is created with the first read access of a table.",
            "It is updated when the modified table is read again.",
            "It is created when a table is filled."
        ],
        "answer": [0, 3] // AD => [0, 3]
    },
    {
        "question": "Which function call returns 0?",
        "options": [
            "count_any_of( val = 'ABAP ABAP abap' sub = 'AB' )",
            "count( val = 'ABAP ABAP abap' sub = 'AB' )",
            "find_any_of( val = 'ABAP ABAP abap' sub = 'AB' )",
            "find_any_not_of( val = 'ABAP ABAP abap' sub = 'AB' )"
        ],
        "answer": 3 // Single answer, remains unchanged
    },
    {
        "question": "Setting a field to read-only in which object would make the field read-only in all applications of the RESTful Application Programming model?",
        "options": [
            "A. Service definition",
            "B. Behaviour definition",
            "C. Projection view",
            "D. Metadata extension"
        ],
        "answer": 1 // Single answer, remains unchanged
    },
    {
        "question": "When you attempt to activate the definition, what will be the response?",
        "options": [
            "A. Activation error because the key fields of the union do not match",
            "B. Activation successful",
            "C. Activation error because the field names of the union do not match",
            "D. Activation error because the field types of the union do not match"
        ],
        "answer": 1 // Single answer, remains unchanged
    },
    {
        "question": "In the assignment: data(gv_result) = 1/8. What will be the data type of gv_result?",
        "options": [
            "A. TYPE P DECIMALS 3",
            "B. TYPE P DECIMALS 2",
            "C. TYPE P",
            "D. TYPE I"
        ],
        "answer": 3 // Single answer, remains unchanged
    },
    {
        "question": "Which of the following types are permitted to be used for <source> on line #4? (Choose two.)",
        "options": [
            "A. A database view from the ABAP Dictionary",
            "B. A database table from the ABAP Dictionary",
            "C. A CDS DDIC-based view",
            "D. An external view from the ABAP Dictionary"
        ],
        "answer": [0, 1] // AB => [0, 1]
    },
    {
        "question": "Based on this information, which of the following general settings should you set for the spfli database table? (Choose two.)",
        "options": [
            "A. 'Storage Type' to 'Row Store'",
            "B. 'Storage Type' to 'Column Store'",
            "C. 'Load Unit' to 'Page Loadable'",
            "D. 'Load Unit' to 'Column Loadable'"
        ],
        "answer": [0, 2] // AC => [0, 2]
    },
    {
        "question": "In a subclass sub1 you want to redefine a component of a superclass super1. How do you achieve this? Note: There are 2 correct answers to this question.",
        "options": [
            "A. You add the clause REDEFINITION to the component in sub1.",
            "B. You implement the redefined component for a second time in super1.",
            "C. You implement the redefined component in sub1.",
            "D. You add the clause REDEFINITION to the component in super1."
        ],
        "answer": [0, 2] // AC => [0, 2]
    },
    {
        "question": "Which of the following can be used to replace ??? with parameters i_currency ????",
        "options": [
            "A. A data element",
            "B. A built-in ABAP type",
            "C. A component of an ABAP Dictionary structure",
            "D. A built-in ABAP Dictionary"
        ],
        "answer": [0, 1] // AB => [0, 1]
    },
    {
        "question": "Regarding line #6, which of the following are valid statements? Note: There are 2 correct answers to this question.",
        "options": [
            "A. ZFM1 can be called only if it is released for cloud development.",
            "B. ZFM1 can be called if a wrapper is created for it and the wrapper itself is released for cloud development.",
            "C. ZFM1 can be called whether it is released or not for cloud development.",
            "D. ZFM1 can be called if a wrapper is created for it but the wrapper itself is not released for cloud development."
        ],
        "answer": [0, 1] // AB => [0, 1]
    },
    {
        "question": "What is the purpose of a foreign key relationship between two tables in the ABAP Dictionary?",
        "options": [
            "A. To document the relationship between the two tables",
            "B. To create a corresponding foreign key relationships in the database",
            "C. To ensure the integrity of data in the corresponding database tables"
        ],
        "answer": 2 // Single answer, remains unchanged
    },
    {
        "question": "Setting a field to read-only in which object would make the field read-only in all applications of the RESTful Application Programming model?",
        "options": [
            "A. Service definition",
            "B. Behaviour definition",
            "C. Projection view",
            "D. Metadata extension"
        ],
        "answer": 1 // Single answer, remains unchanged
    },
    {
        "question": "Using ABAP SQL, which select statement selects the mat field on line #17?",
        "options": [
            "A. SELECT mat FROM Material...",
            "B. SELECT mat FROM demo_sales_cds_so_1_ve...",
            "C. SELECT mat FROM demo_sales_so_1...",
            "D. SELECT mat FROM demo_sales_cds_material_ve..."
        ],
        "answer": 1 // Single answer, remains unchanged
    },
    {
        "question": "What is the output of the following code?",
        "options": [
            "A. 5",
            "B. 6",
            "C. 7",
            "D. 8"
        ],
        "answer": 2 // Single answer, remains unchanged
    },
    {
        "question": "Which of the following statements about internal tables is true?",
        "options": [
            "A. A standard table can be sorted using the SORT statement.",
            "B. A hashed table cannot have a unique key.",
            "C. A sorted table always requires a unique key.",
            "D. An internal table can only have one secondary key."
        ],
        "answer": 0 // Single answer, remains unchanged
    },
    {
        "question": "What will be the result of the following operation: data(lv_result) = '123' + '456'?",
        "options": [
            "A. 579",
            "B. '123456'",
            "C. Compilation error",
            "D. 123456"
        ],
        "answer": 2 // Single answer, remains unchanged
    },
    {
        "question": "Which of the following can be used to handle exceptions in ABAP?",
        "options": [
            "A. TRY...CATCH",
            "B. IF...ELSE",
            "C. CASE",
            "D. WHILE"
        ],
        "answer": 0 // Single answer, remains unchanged
    },
    {
        "question": "What is the default access mode for a method in a class if no access modifier is specified?",
        "options": [
            "A. Public",
            "B. Private",
            "C. Protected",
            "D. Final"
        ],
        "answer": 1 // Single answer, remains unchanged
    },
    {
        "question": "When processing an internal table with the statement LOOP AT itab... ENDLOOP, what system variable contains the current row number?",
        "options": [
            "A. sy-index",
            "B. sy-subrc",
            "C. sy-linno",
            "D. sy-tabix"
        ],
        "answer": 3
    },
    {
        "question": "The class zcl_demo_class is in a software component with the language version set to 'Standard ABAP'. The function module 'ZF1' is in a software component with the language version set to 'ABAP Cloud'. Both the class and function module are customer created. Regarding line #6, which of the following is a valid statement?",
        "options": [
            "A. ZF1 can be called whether it has been released or not for cloud development.",
            "B. ZF1 can be called via a wrapper that itself has been released for cloud development.",
            "C. ZF1 can be called via a wrapper that itself has not been released for cloud development.",
            "D. ZF1 must be released for cloud development to be called."
        ],
        "answer": 1
    },
    {
        "question": "What are valid statements? Note: There are 2 correct answers to this question.",
        "options": [
            "A. 'param1' and 'param2' are predefined names.",
            "B. The code creates an exception object and raises an exception.",
            "C. The code creates an exception object and raises an exception.",
            "D. previous expects the reference to a previous exception."
        ],
        "answer": [1, 3]
    },
    {
        "question": "Which of the following integration frameworks have been released for ABAP cloud development? Note: There are 3 correct answers to this question.",
        "options": [
            "A. SOAP consumption",
            "B. CDS Views",
            "C. Business Add-ins (BAdIs)",
            "D. Business Events",
            "E. OData services"
        ],
        "answer": [0, 3, 4]
    },
    {
        "question": "Which of the following CDS view entities can be used as a data source for a CDS view entity? Note: There are 2 correct answers to this question.",
        "options": [
            "A. CDS view entity Z_BILLITEM as Source",
            "B. CDS view entity Z_BILLITEM as Target",
            "C. CDS view entity Z_BILLITEM as Source",
            "D. CDS view entity Z_BILLITEM as Target"
        ],
        "answer": [0, 2]
    },
    {
        "question": "What are valid statements? Note: There are 2 correct answers to this question.",
        "options": [
            "A. go_sub1 => CAST #go_super will not work.",
            "B. go_sub2 => CAST #go_super will work, go_sub => CAST #go_super will work.",
            "C. go_sub2 => CAST #go_super will not work [ go_sub2->sub2_meth1( ). will work.",
            "D. go_sub1->sub1_meth( ) will work."
        ],
        "answer": [0, 3]
    },
    {
        "question": "DMO01_Connection is a CDS view. What variable type is connection full based on the following code? DATA connection TYPE ... DMO01_Connection.",
        "options": [
            "A. Simple variable",
            "B. Structure",
            "C. Internal Table"
        ],
        "answer": 1
    },
    {
        "question": "Which internal table type allows unique and non-unique keys?",
        "options": [
            "A. Sorted",
            "B. Hashed",
            "C. Standard"
        ],
        "answer": 2
    },
    {
        "question": "What are valid statements? Note: There are 3 correct answers to this question.",
        "options": [
            "A. go_if1 may call method ml with go_if1->ml( ).",
            "B. If go_if1 of go == NEW #( ) you could use if == NEW #( ).",
            "C. go_if2 may call method ml with go_if1->ml( ).",
            "D. Instead of go_if1 NEW #( ) you could use go_if1 = NEW #( ).",
            "E. go_if2 may call method m2 with go_if2->m2( )."
        ],
        "answer": [0, 1, 4]
    },
    {
        "question": "You have a superclass super1 and a subclass sub1 of super1. Each class has an instance constructor and a static constructor. The first statement of your program creates an instance of sub1. In which sequence will the constructors be executed?",
        "options": [
            "Instance constructor of sub1",
            "Instance constructor of super1",
            "Class constructor of super1",
            "Class constructor of sub1"
        ],
        "answer": [2, 1]
    },
    {
        "question": "The class zcl_demo_class is in a software component with the language version set to 'Standard ABAP'. The function module 'ZF1' is in a software component with the language version set to 'ABAP Cloud'. Both the class and function module are customer created. Regarding line #6, which of the following is a valid statement?",
        "options": [
            "A. ZF1 can be called whether it has been released or not for cloud development.",
            "B. ZF1 can be called via a wrapper that itself has been released for cloud development.",
            "C. ZF1 can be called via a wrapper that itself has not been released for cloud development.",
            "D. ZF1 must be released for cloud development to be called."
        ],
        "answer": 1
    },
    {
        "question": "What RESTful Application Programming feature is used to ensure the uniqueness of a semantic key?",
        "options": [
            "A. Validation",
            "B. Action",
            "C. Determination"
        ],
        "answer": 2
    },
    {
        "question": "Define view entity Z_CONVERT With parameters currency : ???",
        "options": [
            "A. built-in ABAP type",
            "B. A built-in ABAP Dictionary type",
            "C. A data element",
            "D. A component of an ABAP Dictionary structure"
        ],
        "answer": [0, 2]
    },
    {
        "question": "What are valid statements? Note: There are 3 correct answers to this question.",
        "options": [
            "A. go_if1 may call method ml with go_if1->ml( ).",
            "B. If go_if1 of go == NEW #( ) you could use if == NEW #( ).",
            "C. go_if2 may call method ml with go_if1->ml( ).",
            "D. Instead of go_if1 NEW #( ) you could use go_if1 = NEW #( ).",
            "E. go_if2 may call method m2 with go_if2->m2( )."
        ],
        "answer": [0, 1, 4]
    },
    {
        "question": "Which of the following ABAP SQL statements are valid? Note: There are 2 correct answers to this question.",
        "options": [
            "A. SELECT FROM dmo/connection FIELDS carrid, airpfrom, MAX(distance) AS dist_max, MIN(distance) AS dist_min INTO TABLE @DATA(it_hits)",
            "B. SELECT FROM dmo/connection FIELDS V O carrid, airpfrom, MAX(distance) AS dist_max, MIN(distance) AS dist_min INTO TABLE @DATA(it_hits)",
            "C. SELECT FROM dmo/connection FIELDS V D MAX(distance) AS dist_max, MIN(distance) AS dist_min INTO TABLE @DATA(it_hits).",
            "D. SELECT FROM dmo/connection FIELDS r- carrid, airpfrom u GROUP BY carrid, connid INTO TABLE @DATA(it_hits)."
        ],
        "answer": [0, 1]
    },
    {
        "question": "In the following ABAP SQL code, what are valid case distinctions? Note: There are 2 correct answers to this question.",
        "options": [
            "A. SELECT FROM dbtab1 FIELDS F1, CASE f2 WHEN '1' THEN 'Value 1' WHEN '2' THEN 'Value 2' WHEN OTHERS 'Value for the rest' ENDCASE AS f_case INTO TABLE @et_t1.",
            "B. SELECT FROM dbtab1 FIELDS F1, CASE f2 WHEN '1' THEN 'Value 1' WHEN '2' THEN 'Value 2' ELSE 'Value for the rest' END AS f_case INTO TABLE @et_t1.",
            "C. SELECT F2 FROM dbtab1 FIELDS F1, CASE WHEN f2 = '1' THEN 'Value 1' WHEN f2 = '2' THEN 'Value 2' ELSE 'Value for the rest' END AS f_case INTO TABLE @et_t1."
        ],
        "answer": [0, 1]
    },
    {
        "question": "Which type of legacy code does SAP recommend you eliminate when you review modifications as part of an SAP S/4HANA system conversion? Note: There are 2 correct answers to this question.",
        "options": [
            "A. Code that supports a critical business process",
            "B. Code that now is identical to a standard SAP object",
            "C. Code that has less than 10% usage according to usage statistics",
            "D. Code that can be redesigned as a key user extension"
        ],
        "answer": [1, 3]
    },
    {
        "question": "The class zcl_demo_class is in a software component with the language version set to 'ABAP Cloud'. The function module 'ZF1' is in a different software component with the language version set to 'Standard ABAP'. Both the class and function module are customer created. Regarding line #6, which of the following are valid statements? Note: There are 2 correct answers to this question.",
        "options": [
            "A. ZF1 can be called only if it is released for cloud development.",
            "B. ZF1 can be called if a wrapper is created for it and the wrapper itself is released for cloud development.",
            "C. ZF1 can be called whether it is released or not for cloud development.",
            "D. ZF1 can be called if a wrapper is created for it but the wrapper itself is not released for cloud development."
        ],
        "answer": [0, 1]
    },
    {
        "question": "Which of the following types are permitted to be used for <source> on line #4? Note: There are 2 correct answers to this question.",
        "options": [
            "A. A database table from the ABAP Dictionary",
            "B. A CDS view-based view",
            "C. An external view from the ABAP Dictionary",
            "D. A database view from the ABAP Dictionary"
        ],
        "answer": [0, 1]
    },
    {
        "question": "In which products must you use the ABAP Cloud Development Model? Note: There are 2 correct answers to this question.",
        "options": [
            "A. SAP S/4HANA Cloud, private edition",
            "B. SAP BTP, ABAP environment",
            "C. SAP S/4HANA on premise",
            "D. SAP S/4HANA Cloud, public edition"
        ],
        "answer": [0, 1]
    },
    {
        "question": "In the assignment, data(gv_result) = 1/8. what will be the data type of gv_result?",
        "options": [
            "A. OTYPE I",
            "B. TYPE DECFLOAT 16",
            "C. TYPE P DECIMALS 3",
            "D. TYPE P DECIMALS 2"
        ],
        "answer": [1]
    },

    {
        "question": "In class ZCL_CLASS_A, you use the statement DATA var TYPE **. What may stand in place of **? Note: There are 2 correct answers to this question.",
        "options": [
            "A. The name of a type defined privately in class ZCL_CLASS_A",
            "B. The name of a data element from the ABAP Dictionary",
            "C. The name of a type defined privately in another class",
            "D. The name of a domain from the ABAP Dictionary"
        ],
        "answer": [1, 3]
    },

    {
        "question": "Which of the following statements are correct? Note: There are 2 correct answers to this question.",
        "options": [
            "A. go_super = CAST #(go_sub1->go_super), will not work",
            "B. go_sub2 = CAST #(go_super), will work, go_sub1 CAST #(go_super), will work",
            "C. go_sub2 = CAST #(go_super), will not work, go_sub2->sub2_meth( ), will work",
            "D. go_sub1->sub1_meth( ), will work"
        ],
        "answer": [1, 3]
    },

    {
        "question": "Which of the following statements are correct? Note: There are 2 correct answers to this question.",
        "options": [
            "A. The FOR defines a loop that runs over the content of source_tab",
            "B. source_tab is only visible within the loop",
            "C. row is a predefined name and cannot be chosen arbitrarily",
            "D. row is only visible within the loop"
        ],
        "answer": [0, 3]
    },

    {
        "question": "In the following ABAP SQL code, what are valid code destinations? Note: There are 2 correct answers to this question.",
        "options": [
            "A. SELECT FROM ddbtab1 FIELDS f1, CASE f2 WHEN '1' THEN 'Value 1' ELSE 'Value for the rest' ENDCASE AS f_case INTO TABLE @et_t1.",
            "B. SELECT FROM sapd1 FIELDS f1, CASE f2 WHEN '1' THEN 'Value 1' WHEN f2 < f3 AND f2 = '2' THEN 'Value 2' WHEN OTHERS 'value for the rest' ENDCASE AS f_case INTO TABLE @gt_t1.",
            "C. SELECT f2 FROM ddbtab1 FIELDS f1, CASE WHEN '1' THEN 'Value 1' WHEN '2' THEN 'Value 2' ELSE 'value for the rest' ENDCASE AS f_case INTO TABLE @gt_t1.",
            "D. SELECT FROM ddbtab1 FIELDS f1, CASE f2 WHEN '1' THEN 'Value 1' WHEN '2' THEN 'Value 2' WHEN OTHERS 'Value for the rest', ENDCASE AS f_case INTO TABLE @gt_t1."
        ],
        "answer": [0, 1]
    },
    {
        "question": "/DMO1_Connection is a CDS view. What variable type is connection full based on the following code? DATA connection full TYPE /DMO1_Connection.",
        "options": [
            "A. Internal Table",
            "B. Structure",
            "C. Simple variable"
        ],
        "answer": [1]
    },
    {
        "question": "Which of the following are incomplete ABAP types? Note: There are 2 correct answers to this question.",
        "options": [
            "A. String",
            "B. T",
            "C. C",
            "D. P"
        ],
        "answer": [2, 3]
    },
    {
        "question": "In which products must you use the ABAP Cloud Development Model? Note: There are 2 correct answers to this question.",
        "options": [
            "A. SAP S/4HANA Cloud, private edition",
            "B. SAP BTP ABAP environment",
            "C. SAP S/4HANA on-premise",
            "D. SAP S/4HANA Cloud, public edition"
        ],
        "answer": [0, 1]
    },
    {
        "question": "Which of the following string functions are predicate functions? Note: There are 2 correct answers to this question.",
        "options": [
            "A. find_any_of( )",
            "B. contains( )",
            "C. count_any_of( )",
            "D. matches( )"
        ],
        "answer": [1, 3]
    },
    {
        "question": "Using ABAP SQL, which select statement selects the mat field on line 17?",
        "options": [
            "A. SELECT mat FROM Material...",
            "B. SELECT mat FROM demo_sales_cds_1_v...",
            "C. SELECT mat FROM demo_sales_so_1.",
            "D. SELECT mat FROM demo_sales cds mat..."
        ],
        "answer": [1]
    },
    {
        "question": "Which of the following results in faster access to internal table? Note: There are 3 correct answers to this question.",
        "options": [
            "A. In a sorted internal table, specifying the primary key partially from the left without gaps.",
            "B. In a sorted internal table, specifying the primary key completely.",
            "C. In a standard internal table, specifying the primary key partially from the left without gaps.",
            "D. In a hashed internal table, specifying the primary key partially from the left without gaps.",
            "E. In a hashed internal table, specifying the primary key completely."
        ],
        "answer": [1, 3, 4]
    },
    {
        "question": "You have the following CDS definition: define view entity Z_ENTITY as select from Z_SOURCE1 as Source1 association to Z_SOURCE2 as Source2 ??? (The data sources are joined by the field carrier_id. The name of the corresponding field in Z_SOURCE2 is carrier_id) Which of the following ON conditions must you insert in place of ????",
        "options": [
            "A. ON Z_Source1 carrier_id = Source2 carrier_id",
            "B. ON Sprojection Carrier-Source2 carrier_id",
            "C. ON Sprojection Carrier Source2 carrier",
            "D. ON Sprojection carrier_id = Source2 carrier_id"
        ],
        "answer": [3]
    },
    {
        "question": "Refer to the Exhibit. When you attempt to activate the definition, what will be the response?",
        "options": [
            "A. Activation error because the field names of the union do not match",
            "B. Activation error because the field types of the union do not match",
            "C. Activation error because the key fields of the union do not match",
            "D. Activation successful"
        ],
        "answer": [0]
    },
    {
        "question": "In ABAP SQL, which of the following retrieves the association field Airline-Name of CDS view?",
        "options": [
            "A. Airline-Name",
            "B. _Airline-Name",
            "C. @Airline-Name",
            "D. \"Airline - Name\""
        ],
        "answer": [2]
    },
    {
        "question": "When you attempt to activate the definition, what will be the response?",
        "options": [
            "A. Activation error because the field names of the union do not match",
            "B. Activation error because the field types of the union do not match",
            "C. Activation error because the key fields of the union do not match",
            "D. Activation successful"
        ],
        "answer": [0]
    },
    {
        "question": "In an Access Control Object, which clauses are used? Note: There are 3 correct answers to this question.",
        "options": [
            "A. Where (to specify the access conditions)",
            "B. Grant (to identify the data source)",
            "C. Return code (to assign the return code of the authority check)",
            "D. Define role (to specify the role name)",
            "E. Revoke (to remove access to the data source)"
        ],
        "answer": [0, 3, 4]
    },
    {
        "question": "What RESTful Application Programming object contains only the fields required for a particular app?",
        "options": [
            "A. Database view",
            "B. Metadata extension",
            "C. Projection View",
            "D. Data model view"
        ],
        "answer": [2]
    },
    {
        "question": "After you created a database table in the RESTful Application Programming model, what do you create next?",
        "options": [
            "A. Metadata extension",
            "B. Projection view",
            "C. Data model view",
            "D. Service definition"
        ],
        "answer": [1]
    },
    {
        "question": "What are advantages of using a field symbol for internal table row access? Note: There are 2 answers to this question.",
        "options": [
            "A. The field symbol can be reused for other programs.",
            "B. A MODIFY statement to write changed contents back to the table is not required.",
            "C. The row content is copied to the field symbol instead of to a work area.",
            "D. Using a field symbol is faster than using a work area."
        ],
        "answer": [1, 3]
    },
    {
        "question": "Class super has subclass sub. Which rules are valid for the sub constructor? Note: There are 2 correct answers to this question.",
        "options": [
            "A. The method signature can be changed.",
            "B. Import parameters can only be evaluated after calling the constructor of super.",
            "C. The constructor of super must be called before using any components of your own instance.",
            "D. Events of your own instance cannot be raised before the registration of a handler in super."
        ],
        "answer": [0, 2]
    },
    {
        "question": "Which of the following integration frameworks have been released for ABAP cloud development? Note: There are 3 correct answers to this question.",
        "options": [
            "A. SOAP consumption",
            "B. CDS Views",
            "C. CDS Views + (BAdIs)",
            "D. Business Add-Ins (BAdIs)",
            "E. OData services"
        ],
        "answer": [0, 3, 4]
    },
    {
        "question": "Which of the following string functions are predicate functions? Note: There are 2 correct answers to this question.",
        "options": [
            "A. find_any_of( )",
            "B. contains_any_of( )",
            "C. count_any_of( )",
            "D. matches( )"
        ],
        "answer": [1, 3]
    },
    {
        "question": "Given the following code in an SAP S/4HANA Cloud private edition tenant: CLASS zcl_demo_class DEFINITION. METHODS: mi. ENDCLASS. CLASS zcl_demo_class IMPLEMENTATION. METHOD mi. CALL FUNCTION 'ZFM'. ENDMETHOD. ENDCLASS. The class zcl, function module ZFM is in a different software component with language version set to `ABAP Cloud`. The function module ZFM is in a different software component with the class zcl, which of the following are valid statements? Note: There are 2 correct answers to this question.",
        "options": [
            "A. ZFM can be called only if it released for cloud development.",
            "B. ZFM can be called if a wrapper is created for it and the wrapper itself is released for cloud development.",
            "C. ZFM can be called whether it is released or not for cloud development",
            "D. ZFM can be called if a wrapper is created for it but the wrapper itself is not released for cloud development."
        ],
        "answer": [0, 1]
    }, {
        "question": "What are some properties of database tables? Note: There are 2 correct answers to this question.",
        "options": [
            "A. They store information in two dimensions.",
            "B. They may have key fields.",
            "C. They can have any number of key fields.",
            "D. They can have relationships to other tables."
        ],
        "answer": [0, 3]
    },
    {
        "question": "What is the purpose of a foreign key relationship between two tables in the ABAP Dictionary?",
        "options": [
            "A. To document the relationship between the two tables in the ABAP Dictionary",
            "B. To ensure the integrity of data in the corresponding database tables",
            "C. To create a corresponding foreign key relationship in the database"
        ],
        "answer": [1]
    },
    {
        "question": "When processing a loop with the statement DO...ENDDO, what system variable contains the implicit loop counter?",
        "options": [
            "A. sy-linno",
            "B. sy-tabix",
            "C. sy-subrc",
            "D. sy-index"
        ],
        "answer": [3]
    },
    {
        "question": "Which of the following statements are correct? Note: There are 2 correct answers to this question.",
        "options": [
            "A. FOR defines a loop that runs over the content of source_itab",
            "B. source_itab is only visible within the loop",
            "C. row is a predefined name and cannot be chosen arbitrarily",
            "D. row is only visible within the loop"
        ],
        "answer": [0, 3]
    },
    {
        "question": "Which type of legacy code does SAP recommend you eliminate when you review modifications as part of an SAP S/4HANA system conversion? Note: There are 2 correct answers to this question.",
        "options": [
            "A. Code that supports a critical business process",
            "B. Code that now is identical to a standard SAP object",
            "C. Code that has less than 10% usage according to usage statistics",
            "D. Code that can be redesigned as a key user extension"
        ],
        "answer": [1, 3]
    },
    {
        "question": "Refer to the Exhibit. The class zcl_demo_class is in a software component with the language version set to `Standard ABAP`. The function module ZF1 is in a software component with the language version set to `ABAP Cloud`. Both the class and function module are customer created. Regarding line 6, which of the following is a valid statement?",
        "options": [
            "A. ZF1 can be called whether it has been released or not for cloud development.",
            "B. ZF1 can be called with a wrapper that has been released for cloud development.",
            "C. ZF1 can be called with a wrapper that has not been released for cloud development.",
            "D. ZF1 must be released for cloud development to be called."
        ],
        "answer": [1]
    },
    {
        "question": "In a RESTful Application Programming application, in which objects do you bind a CDS view to create a value help? Note: There are 3 correct answers to this question.",
        "options": [
            "A. Data model view",
            "B. Behavior definition",
            "C. Metadata extension",
            "D. Service definition",
            "E. Projection view"
        ],
        "answer": [0, 2, 4]
    },
    {
        "question": "You are given the following information: [SQL code]. The data source 'sflt' on line 2 is an SAP HANA database table with 2 columns and one million rows. 'sflt' will be a large table with over one million rows. This program is the only one in the system that accesses. This program will run only once. Based on this information, which of the following general settings should you choose for the spfli database table? Note: There are 2 correct answers to this question.",
        "options": [
            "A. Storage Type to 'Column Store'",
            "B. Load Unit to 'Column Loadable'",
            "C. Storage Type to 'Row Store'",
            "D. Load Unit to 'Page Loadable'"
        ],
        "answer": [2, 3]
    },
    {
        "question": "What are some of the reasons that Core Data Services are preferable to the classical approach to data modeling? Note: There are 2 correct answers to this question.",
        "options": [
            "A. They implement code pushdown.",
            "B. They avoid data transfer completely.",
            "C. They transfer computational results to the application server.",
            "D. They compute results on the application server."
        ],
        "answer": [0, 2]
    },
    {
        "question": "With lo being superclass for lo_sub1 and lo_sub2 and meth1 and meth2 being subclass-specific methods of lo_sub1 or lo_sub2 respectively. What happens when executing this class? Note: There are 2 correct answers to this question.",
        "options": [
            "A. go_sub1->meth1( ). will work.",
            "B. go_sub = CAST super( go_super ). will not work",
            "C. go_sub = CAST #( go_super ). will work",
            "D. go_sub = CAST #( go_super ). will not work"
        ],
        "answer": [0, 3]
    },
    {
        "question": "What RESTful Application Programming feature is used to ensure the uniqueness of a semantic key?",
        "options": [
            "A. Validation",
            "B. Action",
            "C. Determination"
        ],
        "answer": [2]
    },
    {
        "question": "Given the following code, DATA gv_text1 TYPE string ##NO_TEXT. DATA gv_text2 TYPE string ##NEEDED. What are valid statements? Note: There are 2 correct answers to this question.",
        "options": [
            "A. ##NEEDED is checked by the syntax checker.",
            "B. The pragma is not checked by the syntax checker.",
            "C. ##EC NEEDED is not checked by the syntax checker.",
            "D. The pseudo-comment is checked by the syntax checker."
        ],
        "answer": [0, 1]
    },
    {
        "question": "Which ABAP SQL clause allows the use of inline declarations?",
        "options": [
            "A. FROM",
            "B. INTO CORRESPONDING FIELDS OF",
            "C. INTO",
            "D. FIELDS"
        ],
        "answer": [2]
    },
    {
        "question": "What are valid statements? Note: There are 2 correct answers to this question.",
        "options": [
            "A. zcl is a dictionary structure, and param1 and param2 are this structure.",
            "B. param1 and param2 are predefined names",
            "C. The code creates an exception object and raises an exception.",
            "D. previous expects the reference to a previous exception"
        ],
        "answer": [2, 3]
    }
];

globalThis.questions = questions;