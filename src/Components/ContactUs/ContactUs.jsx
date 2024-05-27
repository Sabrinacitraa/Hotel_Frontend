import React from 'react';
import './ContactUs.css'; // Import CSS file

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-us__header">
        <h1>Contact Us</h1>
        <p>We're here to help! Feel free to reach out to us with any questions or feedback.</p>
      </div>

      <div className="contact-us__form">
        <form action="#">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Enter your message" rows="6" required />

          <button type="submit">Send Message</button>
        </form>
      </div>

    </div>
  );
}

export default ContactUs;
