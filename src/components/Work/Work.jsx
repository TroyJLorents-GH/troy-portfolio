import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workExperience } from "./workExperienceData";
import "./Work.scss";

const BriefcaseIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="14" x="2" y="7" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const ChevronIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const Work = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleOpen = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="work-root">
      <div className="work-hero-section">
        <div className="work-header-icon" aria-hidden="true">
          <BriefcaseIcon />
        </div>
        <h1 className="work-title">
          Work &amp; <span className="work-title-muted">Experience</span>
        </h1>
      </div>

      <div className="work-list">
        {workExperience.map((job, idx) => {
          const open = openIdx === idx;
          return (
            <div className={`work-card ${open ? "expanded" : ""}`} key={idx}>
              <button
                type="button"
                className="work-card-header"
                onClick={() => toggleOpen(idx)}
                aria-expanded={open}
              >
                <div className="work-card-headtext">
                  <div className="work-position">{job.title}</div>
                  <div className="work-company">
                    {job.company} <span className="work-years">• {job.years}</span>
                  </div>
                  <div className="work-summary">{job.summary}</div>
                </div>
                <span className={`work-chevron ${open ? "open" : ""}`} aria-hidden="true">
                  <ChevronIcon />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.ul
                    className="work-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {job.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
