import React from "react";
import "./style.css";

const Exercise = ({ title, description, imgsrc }) => {
  return (
    <div class="exercise">
        <div class="content">
            <div class="title">{title}</div>
            <div class="description">{description}</div>
        </div>
        <div class="img">
            <img src={imgsrc} alt=""></img>
        </div>
    </div>
  );
};

export default Exercise;