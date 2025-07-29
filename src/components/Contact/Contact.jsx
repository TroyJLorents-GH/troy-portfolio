import React, { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // For real email: use an email service or backend endpoint
  };

  return (
    <div className="container contact-page">
      <h1>Contact</h1>
      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Message" required />
          <button type="submit">Send</button>
        </form>
      ) : (
        <div className="thankyou-msg">
          <h2>Thank you!</h2>
          <p>Your message has been sent. I'll get back to you soon.</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
