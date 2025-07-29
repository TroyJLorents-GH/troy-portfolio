import React from "react";
import ProgressBar from "./ProgressBar";
import "./index.scss";

const techs = [
  { name: "ASP.NET", progress: 90, years: 7, className: "aspnet-progress" },
  { name: "MVC", progress: 90, years: 7, className: "mvc-progress" },
  { name: "Django", progress: 35, years: 3, className: "django-progress" },
  { name: "Node.js", progress: 70, years: 5, className: "node-progress" },
  { name: "React.js", progress: 70, years: 5, className: "react-progress" },
  { name: "Material UI", progress: 70, years: 5, className: "mui-progress" },
  { name: "Bootstrap", progress: 70, years: 5, className: "bootstrap-progress" },
];

const TechList = () => (
  <div>
    <h2>Frameworks & Technologies</h2>
    <ul>
      {techs.map((tech, index) => (
        <li key={index}>
          <span>{tech.name}: {`${tech.years} years`}</span>
          <ProgressBar progress={tech.progress} className={tech.className} />
        </li>
      ))}
    </ul>
  </div>
);

export default TechList;
