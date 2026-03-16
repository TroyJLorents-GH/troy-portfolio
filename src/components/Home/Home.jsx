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
        <a href="/assets/Troy Lorents_Resume_2026.pdf" target="_blank" rel="noopener noreferrer" title="Resume"><i className="ri-profile-line"></i></a>
      </div>

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome</h1>
            <p>
              I'm <b>Troy Lorents</b>, a senior full-stack software developer with a passion for building modern products that solve real problems. With a background in Business Law and 8+ years of software engineering experience, I design, develop, and deploy web, mobile, and AI-powered solutions — from enterprise workflow apps to intelligent agents and document intelligence platforms.<br /><br />
              I specialize in React.js, .NET, Python, and cloud platforms, with deep experience in Azure AI Foundry agents, RAG pipelines, semantic search, and LLM integrations. I'm always building with new tech, whether that's agentic AI, React Native/Expo apps, or hybrid vector search systems. I enjoy working on teams that value rapid iteration, innovation, and real-world impact.
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
