import React from "react";
import "./Title.css";
const Title = ({ title }) => {
  return (
    <div style={{ position: "relative" }}>
      <h2 className="Title" style={{ color: "#000", fontWeight: "800" }}>
        {title}
      </h2>
    </div>
  );
};

export default Title;
