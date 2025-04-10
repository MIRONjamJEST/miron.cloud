// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Używamy react-scroll do płynnego przewijania
import './Navbar.css'; // WAŻNE
import { FaUser, FaBriefcase, FaPhone, FaAward, FaCogs } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Zmienna stanu do kontrolowania otwarcia menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Funkcja do przełączania menu
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Ikona hamburgera */}
      </div>
      <ul className={`nav-list ${isMenuOpen ? 'show' : ''}`}>
        <li className="nav-item">
          <Link to="about" smooth={true} duration={500} className="nav-link"><FaUser />
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="portfolio" smooth={true} duration={500} className="nav-link"><FaBriefcase />
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="skills" smooth={true} duration={500} className="nav-link"><FaCogs />
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link to="certificates" smooth={true} duration={500} className="nav-link"><FaAward />
          Certificates
          </Link>
        </li>
        <li className="nav-item">
          <Link to="contact" smooth={true} duration={500} className="nav-link"><FaPhone />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
