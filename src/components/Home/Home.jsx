import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <>
      {/* Social Icons */}
      <div className="icons">
        <a href="mailto:troy.j.lorents@gmail.com" title="Email"><i className="ri-mail-line"></i></a>
        <a href="https://github.com/TroyJLorents-GH" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="ri-github-line"></i></a>
        <a href="https://www.linkedin.com/in/troy-lorents/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="ri-linkedin-box-line"></i></a>
        <a href="/assets/Troy Lorents_225_Resume.pdf" target="_blank" rel="noopener noreferrer" title="Resume"><i className="ri-profile-line"></i></a>
      </div>

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome</h1>
            <p>
              My name is <b>Troy Lorents</b>, a full-stack developer from Arizona. I specialize in building modern web applications, APIs, and<br />
              automation tools that make life easier for educators, businesses, and teams.<br /><br />
              With years of experience delivering real-world solutions, I am passionate about writing clean, maintainable<br />
              code and designing scalable, robust architectures. Whether it’s streamlining complex workflows or crafting user-friendly interfaces,<br />
              I thrive on learning and turning ideas into polished, high-impact products.
            </p>
          </div>
          <div className="hero-image">
            <img src="/assets/hero_setup.avif" alt="Hero desk setup" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
