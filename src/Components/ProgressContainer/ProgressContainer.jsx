import React from "react";
import "./ProgressContainer.css";

export default function ProgressContainer() {
  return (
    <div className="progress-container">
      <p>
        <span className="progress-word">Progress:</span>{" "}
        <span className="progress-percent">64%</span>
      </p>
      <div className="progress-display">
        <div className="progress-green-part"></div>
        <div className="progress-white-part"></div>
      </div>
    </div>
  );
}
