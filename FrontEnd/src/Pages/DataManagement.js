import React from 'react';

const steps = [
  {
    title: 'User-Friendly Interface',
    description: (
      <>
        <p>Create an intuitive and user-friendly interface where users can:</p>
        <ul className="list-disc pl-5">
          <li>Select a table from the database.</li>
          <li>Input their natural language queries.</li>
          <li>View the generated SQL query.</li>
          <li>See the results of the query in a clear and organized format.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Natural Language Processing (NLP) for Query Generation',
    description: (
      <>
        <p>Leverage a fine-tuned Large Language Model (LLM) to translate natural language queries into SQL. This involves:</p>
        <ul className="list-disc pl-5">
          <li>Training the Model: Train the LLM on a dataset that includes natural language queries and their corresponding SQL queries.</li>
          <li>API Integration: Create an API that takes a natural language query and context, processes it through the LLM, and returns the generated SQL query.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'SQL Execution and Data Retrieval',
    description: (
      <>
        <p>Once the SQL query is generated:</p>
        <ul className="list-disc pl-5">
          <li>Execute the SQL query against the selected table in the database.</li>
          <li>Retrieve the results and format them for display on the user interface.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Handling Context',
    description: (
      <>
        <p>Ensure the context (table schema, relationships, etc.) is accurately passed and utilized in generating SQL queries. This can be achieved by:</p>
        <ul className="list-disc pl-5">
          <li>Fetching Context: When a user selects a table, fetch the schema and any relevant context from the database.</li>
          <li>Using Context: Pass this context to the NLP model to improve the accuracy and relevance of the generated SQL queries.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Error Handling and Feedback',
    description: (
      <>
        <p>Provide feedback to users in case of errors:</p>
        <ul className="list-disc pl-5">
          <li>Validation: Validate the natural language query before processing.</li>
          <li>Error Messages: Display meaningful error messages if the query cannot be translated or if the SQL query fails to execute.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Data Management',
    description: (
      <>
        <p>Provide functionalities for basic data management tasks:</p>
        <ul className="list-disc pl-5">
          <li>CRUD Operations: Allow users to perform Create, Read, Update, and Delete operations on the data.</li>
          <li>Query History: Maintain a history of queries for users to reference and reuse.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Security',
    description: (
      <>
        <p>Ensure the system is secure:</p>
        <ul className="list-disc pl-5">
          <li>SQL Injection Prevention: Sanitize inputs to prevent SQL injection attacks.</li>
          <li>Authentication and Authorization: Implement user authentication and authorization to control access to data and functionalities.</li>
        </ul>
      </>
    ),
  },
];

const DataManagement = () => (
  <div className="flex flex-col min-h-screen text-white" style={{ background: "linear-gradient(to bottom right, #000000, #3a3a3a, #ffffff)" }}>

    <div className="flex-grow flex items-center justify-center py-12">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-8 animate-fade-in-up">
            Data Management Steps
          </h1>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-left mx-4 sm:mx-6 lg:mx-8">
                <h2 className="text-2xl font-bold text-white mb-4">{step.title}</h2>
                <div className="text-white/80">{step.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DataManagement;
