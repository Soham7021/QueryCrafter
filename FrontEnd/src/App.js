import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home1 from './Pages/Home1';
import DataManagement from './Pages/DataManagement';
import QueryGenerate from './Pages/QueryGenerator';
import Support from './Pages/Support';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home1 />} />
      <Route path="/data-management" element={<DataManagement />} />
      <Route path="/generate-query" element={<QueryGenerate/>} />
      <Route path="/support" element={<Support />} />
    </Routes>
  </Router>
);

export default App;
