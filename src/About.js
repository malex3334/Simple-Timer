import React from "react";

export default function About() {
  return (
    <div className="card fadeIn">
      <h2>About this app</h2>
      <p style={{ fontWeight: 100, fontStyle: "italic" }}>
        This app was made to meet my needs in terms of sport timers. I hope you
        like it too. My main goal was to keep everything simple and provide
        basic set of timers such as Tabata / HIIT Timer.
      </p>
      <p style={{ textAlign: "right", paddingRight: "50px" }}>M.A.</p>

      <p>Work in progress...</p>
    </div>
  );
}
