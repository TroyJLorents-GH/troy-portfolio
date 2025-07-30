import React from "react";
import portfolioData from "./portfolioData";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div className="portfolio-root">
      <h1 className="portfolio-title">Portfolio & Projects</h1>
      <div className="portfolio-list">
        {portfolioData.map((project, idx) => (
          <div className="portfolio-card" key={idx}>
            {/* In Progress Badge & Progress Bar */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5em', gap: '0.7em' }}>
              {project.status === "in-progress" && (
                <span className="in-progress-badge">In Progress</span>
              )}
              {project.progress && (
                <div className="progress-bar-wrapper">
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: `${project.progress}%` }} />
                  </div>
                  <span className="progress-bar-label">{project.progress}%</span>
                </div>
              )}
            </div>

            <div className="portfolio-card-header">
              <h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              </h3>
              <div className="portfolio-links">
                {/* Live Site Button */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-link"
                  >
                    Live Site
                  </a>
                )}
                {/* GitHub Repo Links */}
                {project.github &&
                  project.github.map((repo, i) => (
                    <a
                      key={i}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repo-link"
                    >
                      {repo.label}
                    </a>
                  ))}
              </div>
            </div>
            <p className="portfolio-description">{project.description}</p>
            <div className="portfolio-tags">
              {project.tags &&
                project.tags.map((tag, t) => (
                  <span key={t} className="tag-chip">
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
