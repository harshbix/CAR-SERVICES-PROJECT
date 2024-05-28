import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import SearchPage from './pages/searching';
import Profile from './pages/profile';
import Navbar from './components/navbar'; // Adjust the path if necessary

function App() {
  const username = 'Tupac Shakur';

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home username={username} />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

