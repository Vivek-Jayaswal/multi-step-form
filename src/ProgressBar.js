import React from "react";
import "./progress.css";

const ProgressBar = ({ step }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-step">
        <div className={`circle ${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`line ${step >= 2 ? 'active' : ''}`}></div>
      </div>
      <div className="progress-step">
        <div className={`circle ${step >= 2 ? 'active' : ''}`}>2</div>
        <div className={`line ${step >= 3 ? 'active' : ''}`}></div>
      </div>
      <div className="progress-step">
        <div className={`circle ${step >= 3 ? 'active' : ''}`}>3</div>
      </div>
    </div>
  );
};

export default ProgressBar;
