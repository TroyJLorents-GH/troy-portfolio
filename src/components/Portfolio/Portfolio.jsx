import React from "react";
import "./Portfolio.scss";

const projects = [
  {
    name: "Student Hiring System",
    link: "https://www.troystaticsite.com",
    github: "https://github.com/TroyJLorents-GH/MyStudentApi",
    description: "A full-stack application to streamline student hiring with .NET backend and React frontend, deployed on Azure.",
    tags: [".NET", "React", "Azure"]
  },
  {
    name: "API Chatbot",
    link: "https://github.com/TroyJLorents-GH/InsightAI",
    github: "https://github.com/TroyJLorents-GH/InsightAI",
    description: "An intelligent chatbot integrating OpenAI, Flask, and React for automated question answering.",
    tags: ["Python", "Flask", "React", "OpenAI"]
  },
  // Add more projects here...
];

const Portfolio = () => (
  <div className="container portfolio-page">
    <h1>Portfolio / Projects</h1>
    <div className="project-grid">
      {projects.map((proj, idx) => (
        <div className="project-card" key={idx}>
          <h2>{proj.name}</h2>
          <p>{proj.description}</p>
          <div className="project-tags">
            {proj.tags.map(tag => <span key={tag}>{tag}</span>)}
          </div>
          <div className="project-links">
            {proj.link && (
              <a href={proj.link} target="_blank" rel="noopener noreferrer">Live</a>
            )}
            {proj.github && (
              <a href={proj.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Portfolio;
