import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ljtfhnv', 'template_oyysfwe', form.current, 'ydkdW6uTXmx82Beuw')
      .then((result) => {
        alert('Message Sent Successfully!');
        console.log(result.text);
      }, (error) => {
        alert('Failed to send message, please try again.');
        console.log(error.text);
      });

    e.target.reset(); // To reset the form after submission
  };

  return (
    <section className="contact-section">
      <h1 style={{ color: 'white', fontWeight: '700' }}>Contact Us!</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
