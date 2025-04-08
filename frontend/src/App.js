import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import Login from './Components/Login';
import Registration from './Components/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;