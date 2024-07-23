import React from 'react';

const steps = [
  {
    title: "Define the Project Scope",
    description: "Objective: Convert natural language queries into SQL queries. Requirements: Understand the user's intent, generate accurate SQL queries, execute the queries on a database, and return the results."
  },
  {
    title: "Set Up the Environment",
    description: "Programming Language: Python is commonly used for NLP tasks. Libraries: NLTK, spaCy, transformers, pandas, sqlalchemy. Database: MySQL, PostgreSQL, SQLite, etc."
  },
  {
    title: "Data Collection",
    description: "Collect examples of natural language queries and their corresponding SQL queries. This will be used to train the NLP model."
  },
  {
    title: "Preprocessing",
    description: "Clean and preprocess the natural language queries. Tokenization, stop word removal, stemming/lemmatization."
  },
  {
    title: "Train NLP Model",
    description: "Use NLP techniques and libraries to train a model that understands and translates natural language into SQL queries."
  },
  {
    title: "Query Generation",
    description: "Develop the logic to convert the processed natural language into SQL queries using the trained model."
  },
  {
    title: "Execute SQL Query",
    description: "Connect to the database and execute the generated SQL query. Retrieve and format the results."
  },
  {
    title: "Display Results",
    description: "Present the results in a user-friendly manner. Ensure the interface is intuitive and easy to use."
  }
];

const QueryGenerator = () => (
  <div className="flex flex-col min-h-screen text-white" style={{ background: "linear-gradient(to bottom right, #000000, #3a3a3a, #ffffff)" }}>

    <div className="flex-grow flex items-center justify-center py-12">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-8 animate-fade-in-up">
            Query Generation Steps
          </h1>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-left mx-4 sm:mx-6 lg:mx-8">
                <h2 className="text-2xl font-bold text-white mb-4">{step.title}</h2>
                <p className="text-white/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default QueryGenerator;
