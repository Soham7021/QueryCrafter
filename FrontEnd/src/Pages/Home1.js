import React, { useState, useEffect } from "react";
import axios from "axios";
import { HiDatabase, HiCode, HiOutlineQuestionMarkCircle, HiMicrophone, HiOutlineStop } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import './Home1.css'


// Component for displaying topics
const TopicBox = ({ icon: Icon, color, title, description, onClick }) => (
  <div
    className="flex flex-col items-center p-4 bg-transparent border border-white rounded-lg shadow-md max-w-[150px] mx-2 hover:bg-black hover:text-black transition duration-300 cursor-pointer"
    onClick={onClick}
  >
    <div className={`p-2 rounded-full ${color} text-white mb-2`}>
      <Icon size={20} />
    </div>
    <h3 className="text-sm font-semibold mb-1 text-white">{title}</h3>
    <p className="text-xs text-gray-300 text-center">{description}</p>
  </div>
);

const Home1 = () => {
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState("");
  const [query, setQuery] = useState("");
  const [context, setContext] = useState("");
  const [sqlQuery, setSqlQuery] = useState("");
  const [queryResults, setQueryResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recognizing, setRecognizing] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const navigate = useNavigate();

  // Fetch table list from the server
  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.get("http://localhost:5000/get_table_list");
        setTables(response.data.tables || []);
      } catch (error) {
        console.error("Error fetching table list:", error);
      }
    };

    fetchTables();
  }, []);

  // Handle table selection and fetch context
  const handleTableChange = async (e) => {
    const tableName = e.target.value;
    setSelectedTable(tableName);
    if (tableName) {
      try {
        const response = await axios.post("http://localhost:5000/get_table_context", {
          table_name: tableName,
        });
        setContext(response.data.context || "No context retrieved");
      } catch (error) {
        console.error("Error fetching table context:", error);
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/generate_sql", {
        query,
        context,
      });

      if (response.data.sql_query) {
        setSqlQuery(response.data.sql_query);
        setQueryResults(response.data.results || []);
      } else {
        setSqlQuery("An unexpected error occurred.");
        setQueryResults([]);
      }
    } catch (error) {
      setSqlQuery(`Error: ${error.message}`);
      setQueryResults([]);
    } finally {
      setLoading(false);
    }
  };

  // Start speech recognition
  const startSpeechRecognition = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech Recognition API not supported in this browser.");
      return;
    }
  
    const recognitionInstance = new window.webkitSpeechRecognition();
    recognitionInstance.lang = "en-US";
    recognitionInstance.interimResults = false;
    recognitionInstance.continuous = false;
  
    recognitionInstance.onstart = () => {
      setRecognizing(true);
    };
  
    recognitionInstance.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript); // Set the recognized text in the input field
    };
  
    recognitionInstance.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };
  
    recognitionInstance.onend = () => {
      setRecognizing(false);
    };
  
    recognitionInstance.start();
    setRecognition(recognitionInstance);
  };
  
  const stopSpeechRecognition = () => {
    if (recognition) {
      recognition.stop();
      setRecognition(null); // Clear the recognition instance
    }
  };
  

  // Navigation handler
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div
      className="flex flex-col min-h-screen text-white"
      style={{
        background: "linear-gradient(to bottom right, #000000, #3a3a3a, #ffffff)",
      }}
    >
      <header className="absolute top-4 left-4">
       
      </header>
      <div className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl gradient-text animate-fade-in-up bounce mt-[100px]">
    QueryCrafter
</h1>


            <p className="mt-6 text-xl text-white/80 animate-fade-in-up delay-100">
              Effortlessly manage your data with our intuitive query builder and
              powerful analytics.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in-up delay-200">
              <TopicBox
                icon={HiDatabase}
                color="bg-blue-500 hover:bg-blue-600"
                title="Data Management"
                description="Easily manage and query your data."
                onClick={() => handleNavigation("/data-management")}
              />
              <TopicBox
                icon={HiCode}
                color="bg-yellow-500 hover:bg-yellow-600"
                title="Query Generation"
                description="Generate SQL queries from natural language."
                onClick={() => handleNavigation("/generate-query")}
              />
              <TopicBox
                icon={HiOutlineQuestionMarkCircle}
                color="bg-green-500 hover:bg-green-600"
                title="Support"
                description="Get help and support for using the tool."
                onClick={() => handleNavigation("/support")}
              />
            </div>
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div>
                <label
                  htmlFor="table"
                  className="block text-sm font-semibold mb-2 text-white"
                >
                  Select Table:
                </label>
                <select
                  id="table"
                  name="table"
                  value={selectedTable}
                  onChange={handleTableChange}
                  required
                  className="w-full bg-transparent border border-white rounded-lg py-2 px-4 text-white placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-black"
                >
                  <option value="">Select a table</option>
                  {tables.map((table) => (
                    <option key={table} value={table}>
                      {table}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="query"
                  className="block text-sm font-semibold mb-2 text-white"
                >
                  Enter your natural language query:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="query"
                    name="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    required
                    className="w-full bg-transparent border border-white rounded-lg py-2 px-4 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button
                    type="button"
                    onClick={recognizing ? stopSpeechRecognition : startSpeechRecognition}
                    className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-white ${
                      recognizing ? "text-red-500 animate-pulse" : ""
                    }`}
                  >
                    {recognizing ? <HiOutlineStop size={20} /> : <HiMicrophone size={20} />}
                  </button>
                </div>
              </div>
              <div>
                <label
                  htmlFor="context"
                  className="block text-sm font-semibold mb-2 text-white"
                >
                  Generated Context is:
                </label>
                <textarea
                  id="context"
                  name="context"
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  rows="4"
                  className="w-full bg-transparent border border-white rounded-lg py-2 px-4 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {loading ? "Generating SQL..." : "Generate SQL"}
              </button>
            </form>
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-white">
                Generated SQL Query:
              </h2>
              <pre className="mt-4 p-4 bg-gray-800 rounded-lg whitespace-pre-wrap">
                {sqlQuery || "No SQL query generated"}
              </pre>
              <h2 className="text-2xl font-bold text-white mt-6">
                Query Results:
              </h2>
              {queryResults.length > 0 ? (
                <table className="w-full mt-4 bg-gray-800 border border-white rounded-lg min-w-[600px]">
                <thead>
                  <tr className="text-white">
                    {Object.keys(queryResults[0]).map((key) => (
                      <th
                        key={key}
                        className="py-2 px-4 border-b border-white text-left"
                      >
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {queryResults.map((row, index) => (
                    <tr key={index} className="text-gray-300">
                      {Object.values(row).map((value, i) => (
                        <td
                          key={i}
                          className="py-2 px-4 border-b border-white"
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
                </table>
              ) : (
                <p className="mt-4 text-white">No results</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
