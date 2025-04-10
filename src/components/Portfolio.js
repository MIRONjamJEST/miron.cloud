// src/components/Portfolio.js
import React from 'react';
import './Portfolio.css'; // 👈 dodaj ten import
import project1 from '../assets/images/niepoprawnyinformatyk.png'; // Ścieżki do zdjęć projektów
import project2 from '../assets/images/drugi.png';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Projects</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img src={project1} alt="Project 1" className="project-image" />
          <div className="project-info">
            <h3>niepoprawnyinformatyk.pl</h3>
            <p>This is my first independent project written in HTML and CSS.</p>
            <a href="https://github.com" className="project-link">Zobacz na GitHubie</a>
          </div>
        </div>
        <div className="portfolio-item">
          <img src={project2} alt="Project 2" className="project-image" />
          <div className="project-info">
            <h3>miron.cloud</h3>
            <p>This is my second project written purely in React.js</p>
            <a href="https://github.com" className="project-link">Zobacz na GitHubie</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;


