import React from 'react';
import contentObj from './language'

export default function About({language}) {
  return (
    <div className="timerCard fadeIn">
      <h2>About this app</h2>
      <p style={{ fontWeight: 200 }}>
        This app was made to meet my needs in terms of sport timers. I hope you
        like it too. My main goal was to keep everything simple and provide
        basic set of timers such as Tabata / HIIT Timer.
      </p>
      <p style={{ textAlign: 'right', paddingRight: '50px' }}>M.A.</p>

      <p>Work in progress...</p>
    </div>
  );
}
