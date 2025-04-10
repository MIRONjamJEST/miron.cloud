// src/components/About.js
import React from 'react';
import './About.css'; // Plik z CSS
import myImage from '../assets/images/ja.jpeg';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-image">
        <img src={myImage} alt="Mirosław Fajst" />
        </div>
        <div className="about-text">
          <h2>About</h2>
          <p>
          I currently work as a Linux Administrator at Orange, where I am responsible for the stability and security of server systems. I work with technology daily, and the Linux environment feels like home 🐧.

In my free time, I expand my knowledge and dive into frontend development, learning modern web technologies like HTML, CSS, JavaScript, and frameworks such as React. I value clean code, user-friendly UI, and continuous growth 💻✨

My goal is to combine my expertise in system administration with the creativity that frontend development offers – because in IT, the only limit is our imagination.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;


