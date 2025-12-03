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
      ".NET", "ASP.NET", "Entity Framework", "MVC", "Python (FastAPI, Django)", "Node.js", "Express.js", "React.js", "React Native", "EXPO",  "TanStack (Table, Query, Router)",
      "GrpahQL",  "Apollo Server & Client",  "GraphQL Subscriptions", "Nest.js",  "Bootstrap", "Tailwind CSS", "Nest.js", "Material UI", "SCSS", "WordPress", "Tkinter", "Streamlit", "Vite"
    ]
  },
  {
    label: "Cloud",
    items: [
      "Azure (App Service, Blob Storage, SQL Database, Static Web Apps)", "GCP (Cloud Run, Firestore)",
       "AWS (Lambda, DynamoDB, CloudWatch, EC2, S3, API Gateway, Amplify, Elastic Beanstalk, ECS (Fargate)",
       "Supabase (PostgreSQL, Auth, Storage, Edge Functions)"

    ]
  },
  {
    label: "DevOps / Tools",
    items: [
      "Git", "GitHub Actions", "Azure DevOps", "Docker", "Octopus", "VS Code", "PyCharm", "Bash", "Swagger", "Insomnia", "Postman", "Netlify"
    ]
  },
   {
    label: "Data / Reporting",
    items: [
      "SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Power BI", "Redshift", "Splunk", "Elastic", "Supabase"
    ]
  },
  {
    label: "AI / ML",
    items: [
      "Machine Learning", "OpenAI API", "Microsft Foundry", "OpenAI SDK", "Vector Databases (Pinecone, FAISS, ChromaDB)", "Azure OpenAI", "LLM (Large Language Models)", "LLM Application Development", "LLM Integration", "Prompt Engineering (LLM)"
    ]
  },
  {
    label: "Automation / Workflow",
    items: [
      "Power Automate", "PowerApps", "Google Apps Scripts", "N8N", "BluePrism", "SharePoint", "UI Path", "Airtable", "Plumsail", "ServiceNow"
    ]
  },
  {
    label: "Other",
    items: [
      "JIRA", "Confluence", "TinkerCad", "Blender", "Fusion 360/CAD"
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