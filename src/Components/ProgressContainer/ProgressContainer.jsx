import React from "react";
import "./ProgressContainer.css";

export default function ProgressContainer() {
  return (
    <div className="progress-container">
      <div className="progress-text">
        <p>
          <span className="progress-word">Progress:</span>
          <span className="progress-percent">64%</span>
        </p>
      </div>
      <div className="progress-display">
        <div className="progress-green-part"></div>
        <div className="progress-white-part"></div>
      </div>
    </div>
  );
}
