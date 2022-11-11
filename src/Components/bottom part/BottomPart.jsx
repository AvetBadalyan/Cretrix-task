import React from "react";
import "./BottomPart.css";
import like from "./../../assets/like.png";
import share from "./../../assets/share.png";

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

        <div className="progress-container">
          <p>
           
           <span className="progress-word">Progress:</span>  <span className="progress-percent">64%</span>
          </p>
          <div className="progress-display">
            <div className="progress-green-part"></div>
            <div className="progress-white-part"></div>
          </div>
        </div>

        <div className="options-container">
          <button className="options-button">...</button>
          <div className="like-share-container">
            <button className="options-button">
              <img src={like} alt="like" />
            </button>
            <button className="options-button">
              <img src={share} alt="share" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
