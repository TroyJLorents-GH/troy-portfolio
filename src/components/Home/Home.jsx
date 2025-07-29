import React, { useState } from "react";
import "./Home.scss";

const skillsData = [
  {
    label: "Languages",
    items: [
      "Python", "C#/.NET", "TypeScript", "JavaScript (ES6)", "HTML5", "CSS3", "SQL"
    ]
  },
  {
    label: "Frameworks & Technologies",
    items: [
      "ASP.NET", "Entity Framework", "MVC", "Django", "Node.js", "jQuery",  "React.js", "React Native", "EXPO", "Material UI", "Bootstrap", "Tailwind CSS", "SCSS", "WordPress", "Tkinter", "Streamlit"    ]
  },
  {
    label: "Cloud",
    items: [
      "Azure", "GCP (Google Cloud Platform)", "AWS (Lambda, DynamoDB, CloudWatch, EC2, S3, API Gateway, Amplify, Elastic Beanstalk)"
    ]
  },
  {
    label: "DevOps / Tools",
    items: [
      "Git", "Bash", "Docker", "Octopus", "Swagger", "Insomnia", "Postman", "Netlify"
    ]
  },
  {
    label: "Automation / Workflow",
    items: [
      "Power Automate", "N8N", "SharePoint", "Airtable", "Plumsail", "ServiceNow"
    ]
  },
  {
    label: "Data / Reporting",
    items: [
      "SQL Server", "PostgreSQL", "Power BI", "Splunk", "Elastic"
    ]
  },
  {
    label: "Other",
    items: [
      "JIRA", "Confluence", "TinkerCad", "Blender", "Fusion 360/CAD"
    ]
  },
  {
    label: "AI / ML",
    items: [
      "Machine Learning", "OpenAI API"
    ]
  },
];

const Home = () => {
  const [open, setOpen] = useState(null);

  const handleToggle = (idx) => {
    setOpen(open === idx ? null : idx);
  };

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
            <h1>Welcome.</h1>
            <p>
              My name is <b>Troy Lorents</b>, a full-stack developer based in Arizona, USA.<br />
              I build modern web apps, APIs, and automation tools for education, business, and workflow management.<br /><br />
              I'm passionate about clean code, scalable architecture, and building beautiful, user-focused solutions.
            </p>
            <div style={{ textAlign: "center" }}>
              {/* <a href="/assets/Troy Lorents_225_Resume.pdf" target="_blank" className="resume-btn">Download Resume (PDF)</a> */}
            </div>
            <div className="skills-section">
              <div className="skills-title"><b>Skills</b></div>
              <div className="skills-list">
                {skillsData.map((cat, idx) => (
                  <div key={cat.label} className="skills-category">
                    <div className="skills-label" onClick={() => handleToggle(idx)}>
                      {cat.label}
                      <span className="collapse-icon">{open === idx ? "−" : "+"}</span>
                    </div>
                    {(open === idx  && (
                      <div className="skills-chips">
                        {cat.items.map((item) => (
                          <span className="chip" key={item}>{item}</span>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="/assets/hero_setup.avif" alt="Hero desk setup" />
          </div>
        </div>
      </section>

      <div className="footer">
        ©2025 troy.j.lorents@gmail.com
      </div>
    </>
  );
};

export default Home;
