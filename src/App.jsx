import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddBirthdayPage from './pages/AddBirthdayPage';
import './styles/App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-birthday" element={<AddBirthdayPage />} />
      </Routes>
    </Router>
  );
};

export default App;