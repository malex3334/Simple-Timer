import React from "react";
import { Button } from "react-bootstrap";
import { secTohuman } from "../utils/TimerFunctions";
import contentObj from "../language";

export default function Scores({ setShowScores, breathHoldScores, language }) {
  return (
    <>
      <div className="modalHeader">
        <div>{contentObj[language].whTimer.scoresTitle}</div>
        <Button
          onClick={() => {
            setShowScores(false);
          }}
        >
          X
        </Button>
      </div>
      <div className="modalBody">
        <ul style={{ listStyle: "none" }}>
          {breathHoldScores.length > 0 ? (
            breathHoldScores.map((score, i) => {
              return (
                <li key={i}>
                  <h5>
                    {contentObj[language].whTimer.scoresRounds} {i + 1}
                  </h5>
                  <span>
                    {contentObj[language].whTimer.scoresTime}
                    {secTohuman(score)}
                  </span>
                </li>
              );
            })
          ) : (
            <h5>{contentObj[language].whTimer.scoresNoScores}</h5>
          )}
        </ul>
      </div>
      <div className="modalFooter" style={{ padding: "0", margin: "0" }}>
        <p style={{ textAlign: "center" }}>
          {breathHoldScores.length > 0
            ? contentObj[language].whTimer.scoresFooterSucces
            : contentObj[language].whTimer.scoresFooterDanger}
        </p>
      </div>
    </>
  );
}
