// import React, { useState } from "react";
// import "./Contact.scss";

// const Contact = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     // For real email: use an email service or backend endpoint
//   };

//   return (
//     <div className="container contact-page">
//       <h1>Contact</h1>
//       {!submitted ? (
//         <form className="contact-form" onSubmit={handleSubmit}>
//           <input type="text" placeholder="Your Name" required />
//           <input type="email" placeholder="Your Email" required />
//           <textarea placeholder="Message" required />
//           <button type="submit">Send</button>
//         </form>
//       ) : (
//         <div className="thankyou-msg">
//           <h2>Thank you!</h2>
//           <p>Your message has been sent. I'll get back to you soon.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Contact;


import "./Contact.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timerId);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        refForm.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message successfully sent! I will get back to you within 1 to 2 business days.");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={"CONTACT ME".split("")} idx={15} />
        </h1>
        <p>
          Thank you for checking out my portfolio.<br /><br />
          Feel free to reach out with any questions, comments, or opportunities.<br /><br />
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/troy-lorents/">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a target="_blank" rel="noreferrer" href="mailto:troy.j.lorents@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
        </p>
      </div>
      <div className="contact-right">
        <form ref={refForm} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit" className="flat-button">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
