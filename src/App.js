// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Eventos from './pages/Eventos';
import Galeria from './pages/Galeria';
import Contato from './pages/Contato';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header renderizado em todas as páginas */}
        <Header />

        {/* Conteúdo de cada página */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<SobreNos />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>

        {/* Footer renderizado em todas as páginas */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
