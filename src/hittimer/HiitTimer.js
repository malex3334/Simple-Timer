import React, { useState, useEffect } from "react";
import "../style.css";
import { secTohuman, editTimers, updateValues } from "../utils/TimerFunctions";
import HiitCSS from "./HiitTimer.module.css";

const startSound = new Audio(
  "https://cdn.pixabay.com/download/audio/2022/03/15/audio_2b08b6e711.mp3?filename=ship-bell-single-ring-81833.mp3"
);

const playSound = function () {
  startSound.volume = 0.8;
  startSound.play();
};

export default function HiitTimer() {
  const [defaultValue, setDefaultValue] = useState({
    time: 20,
    rest: 10,
    rounds: 5,
  });

  const [sound, setSound] = useState(true);
  const [time, setTime] = useState(defaultValue.time);
  const [rest, setRest] = useState(10);
  const [rounds, setRounds] = useState(5);
  const [isRunning, setIsRunning] = useState(false);
  const [isResting, setIsResting] = useState(false);
  const [finish, setFinish] = useState("work");
  const [declaredTime, setDeclaredTime] = useState(defaultValue.time);
  const [declaredRest, setDeclaredRest] = useState(defaultValue.rest);
  const [declaredRounds, setDeclaredDounds] = useState(defaultValue.rounds);

  let interval;
  let resInterval;

  const handleClick = function () {
    setIsResting(false);
    setTime(declaredTime);
    setRest(declaredRest);
    setRounds(declaredRounds);
    isRunning ? setIsRunning(false) : setIsRunning(true);
  };

  const handleReset = function () {
    setDeclaredTime(defaultValue.time);
    setDeclaredRest(defaultValue.rest);
    setDeclaredDounds(defaultValue.rounds);
  };

  useEffect(() => {
    if (isRunning && rounds > 0) {
      setFinish("WORK!");
      interval = setInterval(() => {
        updateValues(setTime);
      }, 1000);

      // if ((isRunning && time === 0) || rest === 0) {
      //   sound ? playSound() : null;
      // }

      if (time <= 0) {
        // clearInterval(interval);
        // updateRounds();

        if (rounds >= 1) {
          setIsResting(true);
          setFinish("REST!");
          resInterval = setInterval(() => {
            updateValues(setRest);
          }, 1000);

          if (rest === 0) {
            setIsResting(false);
            setTime(declaredTime);
            updateValues(setRounds);
            setRest(declaredRest);
          }
        }

        if (rounds === 0) {
          clearInterval(interval);
          setIsRunning(false);
        }
      }
    } else {
      setIsRunning(false);
      setFinish("Good Job!");
    }

    return () => {
      clearInterval(interval);
      clearInterval(resInterval);
    };
  }, [isRunning, time, setTime, rest, rounds, setRounds]);

  return (
    <div className="fadeIn">
      <h2>HIIT Timer!</h2>

      <div className={HiitCSS.inputContainer}>
        {/* timer */}
        <div className={HiitCSS.inputControl}>
          <label>Time:</label>
          <div className={HiitCSS.buttonsContainer}>
            <button onClick={() => editTimers(setDeclaredTime, "subs", 5, 5)}>
              -
            </button>
            <input
              className={HiitCSS.input}
              disabled
              min="5"
              type="text"
              value={declaredTime}
              onChange={(e) =>
                setDeclaredTime(e.target.value) && setTime(e.target.value)
              }
            />
            <button onClick={() => setDeclaredTime((prevtime) => prevtime + 5)}>
              +
            </button>
          </div>
        </div>
        {/* rest */}
        <div className={HiitCSS.inputContainer}>
          <div className={HiitCSS.inputControl}>
            <label>Rest:</label>
            <div className={HiitCSS.buttonsContainer}>
              <button onClick={() => editTimers(setDeclaredRest, "subs", 5, 5)}>
                -
              </button>
              <input
                disabled
                min="5"
                type="text"
                value={declaredRest}
                onChange={(e) =>
                  setRest(e.target.value) && setDeclaredRest(e.target.value)
                }
              />
              <button
                onClick={() => setDeclaredRest((prevtime) => prevtime + 5)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        {/* rounds */}
        <div className={HiitCSS.inputContainer}>
          <div className={HiitCSS.inputControl}>
            <label>Rounds:</label>
            <div className={HiitCSS.buttonsContainer}>
              <button
                onClick={() => editTimers(setDeclaredDounds, "subs", 1, 1)}
              >
                -
              </button>
              <input
                disabled
                min="1"
                type="text"
                value={declaredRounds}
                onChange={(e) =>
                  setRounds(e.target.value) && setDeclaredDounds(e.target.value)
                }
              />
              <button
                onClick={() => setDeclaredDounds((prevtime) => prevtime + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={HiitCSS.startButtonsContainer}>
        <button
          onClick={handleClick}
          style={
            !isRunning
              ? { borderColor: "greenyellow" }
              : { borderColor: "orangered" }
          }
        >
          {!isRunning ? "start" : "stop"}
        </button>
        <button onClick={handleReset}>reset</button>
      </div>
      <div
        className={HiitCSS.outputsContainer}
        style={
          isRunning
            ? {
                borderColor: "greenyellow",
                color: "white",
                animation: "pulse 1s infinite linear",
              }
            : null
        }
        onClick={handleClick}
      >
        <span>Rounds left: {!isRunning ? declaredRounds : rounds}</span>
        {isResting ? (
          <span className={HiitCSS.timer}>
            {!isRunning ? secTohuman(declaredRest) : secTohuman(rest)}
          </span>
        ) : (
          <span className={HiitCSS.timer}>
            {!isRunning ? secTohuman(declaredTime) : secTohuman(time)}
          </span>
        )}

        <span>{finish}</span>
      </div>
    </div>
  );
}
