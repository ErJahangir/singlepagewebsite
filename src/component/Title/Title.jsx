import React from "react";
import "./Title.css";
const Title = ({ Title, Subtitle }) => {
  return (
    <div className="title">
      <p>{Subtitle}</p>
      <h2>{Title}</h2>
    </div>
  );
};

export default Title;
