import React, { useState } from "react";
import "./Skills.scss"; // Optionally, you can make a separate Skills.scss or reuse Home.scss

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
      "ASP.NET", "Entity Framework", "MVC", "Django", "Node.js", "jQuery", "React.js", "React Native", "EXPO", "Material UI", "Bootstrap", "Tailwind CSS", "SCSS", "WordPress", "Tkinter", "Streamlit"
    ]
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

const Skills = () => {
  // Instead of a single open index, keep an array of booleans:
  const [openSections, setOpenSections] = useState(Array(skillsData.length).fill(false));

  const handleToggle = (idx) => {
    setOpenSections(prev =>
      prev.map((open, i) => (i === idx ? !open : open))
    );
  };

  return (
    <section className="skills-section">
      <div className="skills-title" ><b>Technical Skills</b></div>
      <div className="skills-list">
        {skillsData.map((cat, idx) => (
          <div key={cat.label} className="skills-category">
            <div className="skills-label" onClick={() => handleToggle(idx)}>
              {cat.label}
              <span className="collapse-icon">{openSections[idx] ? "−" : "+"}</span>
            </div>
            {openSections[idx] && (
              <div className="skills-chips">
                {cat.items.map((item) => (
                  <span className="chip" key={item}>{item}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;