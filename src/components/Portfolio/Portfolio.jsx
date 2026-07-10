import React, { useRef, useEffect } from "react";
import portfolioData from "./portfolioData";
import "./Portfolio.scss";

const PortfolioCard = ({ project, variant = "compact" }) => {
  const cardRef = useRef(null);
  const tagLimit = variant === "featured" ? 6 : 4;

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

  const visibleTags = project.tags ? project.tags.slice(0, tagLimit) : [];
  const extraTagCount = project.tags ? project.tags.length - visibleTags.length : 0;

  return (
    <div ref={cardRef} className={`portfolio-card portfolio-card--${variant}`}>
      <div className="portfolio-card__sheen" aria-hidden="true" />
      <div className="portfolio-card__content">
        {/* In Progress Badge & Progress Bar */}
        {(project.status === "in-progress" || project.progress) && (
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
        )}

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
          {visibleTags.map((tag, t) => (
            <span key={t} className="tag-chip">
              {tag}
            </span>
          ))}
          {extraTagCount > 0 && (
            <span className="tag-chip tag-chip--more">+{extraTagCount} more</span>
          )}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const featured = portfolioData.filter((p) => p.featured);
  const others = portfolioData.filter((p) => !p.featured);

  return (
    <div className="portfolio-root">
      <h1 className="portfolio-title">Portfolio & Projects</h1>

      <div className="portfolio-subhead">Featured</div>
      <div className="portfolio-featured">
        {featured.map((project, idx) => (
          <PortfolioCard project={project} variant="featured" key={idx} />
        ))}
      </div>

      <div className="portfolio-subhead">More Projects</div>
      <div className="portfolio-grid">
        {others.map((project, idx) => (
          <PortfolioCard project={project} variant="compact" key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
