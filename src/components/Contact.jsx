import React from 'react';


const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-left">
          <h2>Got an Idea??Let's work together!</h2>
          <p>
             Tell me about your idea, and I’ll get in touch with you shortly.
          </p>
          <form action="https://formspree.io/f/xyzjdlke" method="POST" accept-charset="UTF-8">
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Tell me your idea..." rows="5" required></textarea>
  <button type="submit">Send Message</button>
</form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
