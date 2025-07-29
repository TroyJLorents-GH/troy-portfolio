import React from "react";
import "./Work.scss";

const Work = () => (
  <div className="container work-page">
    <h1>Work & Experience</h1>
    <div className="work-list">
      <div className="work-item">
        <h2>Web Application Developer</h2>
        <h3>Arizona State University (SCAI) • 2022–Present</h3>
        <ul>
          <li>Architected and launched secure full-stack web platforms in React and .NET</li>
          <li>Automated business processes using Power Automate, Python, and cloud solutions</li>
          <li>Integrated APIs, databases, and HR workflows for thousands of users</li>
        </ul>
      </div>
      <div className="work-item">
        <h2>Software Engineer</h2>
        <h3>Insurance Tech Company • 2017–2022</h3>
        <ul>
          <li>Developed and maintained insurance data platforms and analytics dashboards</li>
          <li>Built RESTful APIs, data pipelines, and reporting solutions in Python and SQL</li>
          <li>Worked closely with product teams to deliver customer-focused features</li>
        </ul>
      </div>
      {/* Add more work sections as you wish */}
    </div>
  </div>
);

export default Work;
