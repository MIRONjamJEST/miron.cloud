import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder="Your email" required />
        </label>
        <label>
          Message:
          <textarea name="message" rows="5" placeholder="Write something..." required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
