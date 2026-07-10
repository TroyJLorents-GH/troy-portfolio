import React, { useState } from "react";
import "./Skills.scss"; // Optionally, you can make a separate Skills.scss or reuse Home.scss

// Brand SVGs pulled from the 21st.dev / svgl logo catalog (public/assets/logos)
const logoStrip = [
  { file: "python", label: "Python" },
  { file: "typescript", label: "TypeScript" },
  { file: "react", label: "React" },
  { file: "csharp", label: "C#" },
  { file: "nodejs", label: "Node.js" },
  { file: "azure", label: "Azure" },
  { file: "aws", label: "AWS" },
  { file: "docker", label: "Docker" },
  { file: "postgresql", label: "PostgreSQL" },
  { file: "supabase", label: "Supabase" },
  { file: "openai", label: "OpenAI" },
  { file: "anthropic", label: "Anthropic" },
];

const skillsData = [
  {
    label: "Languages",
    icon: "ri-code-s-slash-line",
    items: [
      "Python", "C#/.NET", "TypeScript", "JavaScript (ES6)", "HTML5", "CSS3", "SQL"
    ]
  },
  {
    label: "Frameworks & Technologies",
    icon: "ri-stack-line",
    items: [
      ".NET", "ASP.NET", "Entity Framework", "MVC", "Python (FastAPI, Flask, Django)", "Node.js", "Express.js", "React.js", "React Native", "Expo",
      "TanStack (Table, Query, Router)", "GraphQL", "Apollo Server & Client", "GraphQL Subscriptions", "Nest.js",
      "Bootstrap", "Tailwind CSS", "Material UI", "SCSS", "WordPress", "Tkinter", "Streamlit", "Vite"
    ]
  },
  {
    label: "Cloud",
    icon: "ri-cloud-line",
    items: [
      "Azure (App Service, Blob Storage, SQL Database, Static Web Apps)", "Azure AI Foundry", "Azure Cosmos DB", "Azure AI Search", "Azure Document Intelligence",
      "GCP (Cloud Run, Firestore)",
      "AWS (Lambda, DynamoDB, CloudWatch, EC2, S3, API Gateway, Amplify, Elastic Beanstalk, ECS Fargate)",
      "Firebase (Auth, Firestore)", "Supabase (PostgreSQL, Auth, Storage, Edge Functions)", "Vercel", "Netlify (Functions, Serverless)"
    ]
  },
  {
    label: "DevOps / Tools",
    icon: "ri-tools-line",
    items: [
      "Git", "GitHub Actions", "Azure DevOps", "Docker", "Octopus", "VS Code", "PyCharm", "Bash", "Swagger", "Insomnia", "Postman", "Claude Code"
    ]
  },
  {
    label: "Data / Reporting",
    icon: "ri-database-2-line",
    items: [
      "SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Cosmos DB", "Neo4j", "Power BI", "Redshift", "Splunk", "Elastic", "Supabase"
    ]
  },
  {
    label: "AI / ML",
    icon: "ri-cpu-line",
    items: [
      "Machine Learning", "OpenAI API", "Azure AI Foundry Agents", "Anthropic Claude API", "OpenAI SDK",
      "RAG (Retrieval-Augmented Generation)", "Embeddings & Vector Search", "Semantic Search",
      "Vector Databases (Pinecone, FAISS, ChromaDB)", "Azure OpenAI", "Azure AI Search (Hybrid BM25 + Vector)",
      "Azure Document Intelligence", "Neo4j / Graphiti Knowledge Graphs", "Multi-Agent Systems",
      "LLM Application Development", "LLM Integration", "Prompt Engineering"
    ]
  },
  {
    label: "Automation / Workflow",
    icon: "ri-flashlight-line",
    items: [
      "Power Automate", "PowerApps", "Google Apps Scripts", "N8N", "BluePrism", "SharePoint", "UI Path", "Airtable", "Plumsail", "ServiceNow"
    ]
  },
  {
    label: "Other",
    icon: "ri-star-line",
    items: [
      "JIRA", "Confluence", "TinkerCad", "Blender", "Fusion 360/CAD"
    ]
  },
];

const PREVIEW_COUNT = 6;

const Skills = () => {
  // Array of booleans. Multiple sections can stay open (unchanged behavior).
  const [openSections, setOpenSections] = useState(Array(skillsData.length).fill(false));

  const handleToggle = (idx) => {
    setOpenSections(prev =>
      prev.map((open, i) => (i === idx ? !open : open))
    );
  };

  return (
    <section className="skills-section">
      <div className="skills-title"><b>Technical Skills</b></div>

      <div className="skills-logo-strip">
        {logoStrip.map((l) => (
          <img
            key={l.file}
            src={`/assets/logos/${l.file}.svg`}
            alt={l.label}
            title={l.label}
            loading="lazy"
          />
        ))}
      </div>

      <div className="skills-list">
        {skillsData.map((cat, idx) => {
          const open = openSections[idx];
          const shownItems = open ? cat.items : cat.items.slice(0, PREVIEW_COUNT);
          const extraCount = cat.items.length - PREVIEW_COUNT;
          return (
            <div key={cat.label} className={`skills-category ${open ? "open" : ""}`}>
              <button
                type="button"
                className={`skills-label ${open ? "active" : ""}`}
                onClick={() => handleToggle(idx)}
                aria-expanded={open}
              >
                <span className="skills-label-icon" aria-hidden="true">
                  <i className={cat.icon}></i>
                </span>
                {cat.label}
                <span className="count-badge">{cat.items.length}</span>
                <span className="collapse-icon">{open ? "−" : "+"}</span>
              </button>
              <div className="skills-chips">
                {shownItems.map((item) => (
                  <span className="chip" key={item}>{item}</span>
                ))}
                {!open && extraCount > 0 && (
                  <button
                    type="button"
                    className="chip chip--more"
                    onClick={() => handleToggle(idx)}
                    aria-label={`Show ${extraCount} more ${cat.label} skills`}
                  >
                    +{extraCount} more
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
