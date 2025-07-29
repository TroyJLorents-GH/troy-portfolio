import React from "react";
import ProgressBar from "./ProgressBar";
import "./index.scss";

const languages = [
  { name: "Python", progress: 90, years: 7, className: "python-progress" },
  { name: "C#/.NET", progress: 90, years: 7, className: "dotnet-progress" },
  { name: "TypeScript", progress: 50, years: 5, className: "typescript-progress" },
  { name: "JavaScript (ES6)", progress: 90, years: 7, className: "js-progress" },
  { name: "HTML5", progress: 50, years: 5, className: "html-progress" },
  { name: "CSS3", progress: 50, years: 5, className: "css-progress" },
  { name: "SQL", progress: 90, years: 7, className: "sql-progress" },
];

const LanguageList = () => (
  <div>
    <h2>Languages</h2>
    <ul>
      {languages.map((language, index) => (
        <li key={index}>
          <span>{language.name}: {`${language.years} years`}</span>
          <ProgressBar progress={language.progress} className={language.className} />
        </li>
      ))}
    </ul>
  </div>
);

export default LanguageList;
