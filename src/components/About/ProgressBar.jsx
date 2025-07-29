import React from "react";
import "./index.scss";

const ProgressBar = ({ progress, className }) => (
  <div className={`progress-bar ${className}`}>
    <div className="progress" style={{ width: `${progress}%` }}></div>
  </div>
);

export default ProgressBar;
