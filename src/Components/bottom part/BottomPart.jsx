import React from "react";
import "./BottomPart.css";
import ProgressContainer from "../ProgressContainer/ProgressContainer";
import OptionsContainer from "../Options/OptionsContainer";

export default function BottomPart() {
  return (
    <div className="bottom-part">
      <div className="bottom-part-container">
        <div className="title-container">
          <p> Everything about pineapples and other tropical fruits</p>
        </div>

        <div className="author-container">
          <p> By: Nana McDougall</p>
        </div>

        <ProgressContainer />
        <OptionsContainer />
      </div>
    </div>
  );
}
