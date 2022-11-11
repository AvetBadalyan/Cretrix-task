import React from "react";
import like from "./../../assets/like.png";
import share from "./../../assets/share.png";
import "./Options.css";
import dots from "./../../assets/bazmaket.png";

export default function OptionsContainer() {
  return (
    <div className="options-container">
      <button className="dots">
        <img src={dots} alt="dots" />
      </button>
      <div className="like-share-container">
        <button className="options-button">
          <img src={like} alt="like" />
        </button>
        <button className="options-button">
          <img src={share} alt="share" />
        </button>
      </div>
    </div>
  );
}
