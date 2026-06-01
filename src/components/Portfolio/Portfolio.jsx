import React, { useRef, useEffect } from "react";
import portfolioData from "./portfolioData";
import "./Portfolio.scss";

const PortfolioCard = ({ project }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Glare only. Track cursor for the sheen. Skip on touch devices.
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={cardRef} className="portfolio-card">
      <div className="portfolio-card__sheen" aria-hidden="true" />
      <div className="portfolio-card__content">
        {/* In Progress Badge & Progress Bar */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5em", gap: "0.7em" }}>
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
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            ) : (
              project.name
            )}
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
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="portfolio-root">
      <h1 className="portfolio-title">Portfolio & Projects</h1>
      <div className="portfolio-list">
        {portfolioData.map((project, idx) => (
          <PortfolioCard project={project} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
