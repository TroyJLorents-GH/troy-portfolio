import React, { useState } from "react";
import { workExperience } from "./workExperienceData";
import "./Work.scss";

const Work = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleOpen = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="work-root">
      <div className="work-hero-section">
        <h1 className="work-title">Work & Experience</h1>
      </div>
      {workExperience.map((job, idx) => (
        <div className={`work-card ${openIdx === idx ? "expanded" : ""}`} key={idx}>
          <div className="work-card-header" onClick={() => toggleOpen(idx)}>
            <div>
              <div className="work-position">{job.title}</div>
              <div className="work-company">
                {job.company} <span className="work-years">• {job.years}</span>
              </div>
              <div className="work-summary">{job.summary}</div>
            </div>
            <span className="work-arrow">
              {openIdx === idx ? "▲" : "▼"}
            </span>
          </div>
          {openIdx === idx && (
            <ul className="work-details">
              {job.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Work;
