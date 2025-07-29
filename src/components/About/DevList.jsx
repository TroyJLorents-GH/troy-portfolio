import React from "react";
import ProgressBar from "./ProgressBar";
import "./index.scss";

const categories = [
  {
    title: "Cloud",
    items: [
      { name: "Azure", progress: 40, years: 3, className: "azure-progress" },
      { name: "AWS", progress: 90, years: 7, className: "aws-progress" },
    ],
  },
  {
    title: "DevOps/Tools",
    items: [
      { name: "Git", progress: 90, years: 7, className: "git-progress" },
      { name: "Bash", progress: 90, years: 7, className: "bash-progress" },
      { name: "Docker", progress: 50, years: 4, className: "docker-progress" },
      { name: "Octopus", progress: 50, years: 4, className: "octopus-progress" },
      { name: "Swagger", progress: 90, years: 7, className: "swagger-progress" },
      { name: "Insomnia", progress: 90, years: 7, className: "insomnia-progress" },
      { name: "Postman", progress: 90, years: 7, className: "postman-progress" },
    ],
  },
  {
    title: "Automation/Workflow",
    items: [
      { name: "Power Automate", progress: 30, years: 2, className: "powerauto-progress" },
      { name: "SharePoint", progress: 30, years: 2, className: "sharepoint-progress" },
      { name: "Airtable", progress: 30, years: 2, className: "airtable-progress" },
      { name: "Plumsail", progress: 30, years: 2, className: "plumsail-progress" },
      { name: "ServiceNow", progress: 30, years: 2, className: "servicenow-progress" },
    ],
  },
  {
    title: "Data/Reporting",
    items: [
      { name: "SQL Server", progress: 90, years: 7, className: "sqlserver-progress" },
      { name: "PostgreSQL", progress: 70, years: 5, className: "postgres-progress" },
      { name: "Power BI", progress: 30, years: 2, className: "powerbi-progress" },
      { name: "Splunk", progress: 30, years: 2, className: "splunk-progress" },
      { name: "Elastic", progress: 70, years: 5, className: "elastic-progress" },
    ],
  },
  {
    title: "Other",
    items: [
      { name: "JIRA", progress: 70, years: 5, className: "jira-progress" },
      { name: "Confluence", progress: 70, years: 5, className: "confluence-progress" },
      { name: "TinkerCad", progress: 20, years: 2, className: "tinkercad-progress" },
      { name: "Blender", progress: 20, years: 2, className: "blender-progress" },
      { name: "Fusion 360/CAD", progress: 20, years: 2, className: "fusion-progress" },
    ],
  },
];

const DevList = () => (
  <div>
    {categories.map((cat, i) => (
      <div key={i}>
        <h3>{cat.title}</h3>
        <ul>
          {cat.items.map((dev, index) => (
            <li key={index}>
              <span>{dev.name}: {`${dev.years} years`}</span>
              <ProgressBar progress={dev.progress} className={dev.className} />
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default DevList;
