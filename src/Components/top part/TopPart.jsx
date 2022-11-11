import React from "react";
import "./TopPart.css";
import girl from "./../../assets/girl.jpg";

export default function TopPart() {
  return (
    <div className="top-part">
      <div className="image-and-text-container">
        <img src={girl} className="girl-image" alt="girl" />
        <div className="top-part-text-container">
          <p>1237 views .</p>
          <p>1 day ago</p>
        </div>
      </div>
    </div>
  );
}
