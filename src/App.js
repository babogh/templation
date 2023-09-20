import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateAnimation from './pages/CreateAnimation';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create-animation' element={<CreateAnimation/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;