import React from 'react';
import './Certificates.css'; // upewnij się, że zaimportowałeś odpowiedni plik CSS
import myImage from '../assets/images/cert1.png';

function Certificates() {
  return (
    <section className="certificates-section">
      <h2>Certificates</h2>
      <ul>
        <li className="certificate-item">
          <img 
            src={myImage}
            alt="Networking for Cisco CCNA" 
            className="certificate-image" 
          />
          Certyfikat Networking for Cisco CCNA -  A Cloud Guru | A Pluralsight Company
        </li>
        <li className="certificate-item">
          <img 
            src="/images/image2.jpg" 
            alt="Node.js" 
            className="certificate-image" 
          />
          Certyfikat Node.js - Kurs ABC
        </li>
        <li className="certificate-item">
          <img 
            src="/images/image3.jpg" 
            alt="HTML/CSS" 
            className="certificate-image" 
          />
          Certyfikat HTML/CSS - Kurs DEF
        </li>
        <li className="certificate-item">
          <img 
            src="/images/image4.jpg" 
            alt="JavaScript" 
            className="certificate-image" 
          />
          Certyfikat JavaScript - Kurs GHI
        </li>
      </ul>
    </section>
  );
}

export default Certificates;
