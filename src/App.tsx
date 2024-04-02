import React from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import PokemonPage from './pages/PokemonPage';

const App = () => (
  <Router>
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">Frontguys Pokemon</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<PokemonPage />} />
        </Routes>
      </Container>
    </Container>
  </Router>
);

export default App;
