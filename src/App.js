import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';
import ApplicationForm from './components/ApplicationForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <Routes>
          <Route path="/" element={<Intro />} /> 
          <Route path="/apply" element={<ApplicationForm />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
