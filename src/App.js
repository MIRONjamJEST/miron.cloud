// src/App.js
import React from 'react';
import Navbar from './components/Navbar';  
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Skills />
      <Certificates />
      <Contact />
      <Footer /> {/* 👈 stopka na dole */}
    </div>
  );
}

export default App;

