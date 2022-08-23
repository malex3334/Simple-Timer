import React from "react";
import contentObj from "./language";

export default function About({ language }) {
  return (
    <div className="timerCard fadeIn">
      <h2>{contentObj[language].about.title}</h2>
      <p style={{ fontWeight: 200 }}>{contentObj[language].about.paragraph}</p>
      <p style={{ textAlign: "right", paddingRight: "50px" }}>M.A.</p>

      <p>Work in progress...</p>
    </div>
  );
}
