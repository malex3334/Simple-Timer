import React, { useState, useEffect } from "react";
// import Modal from '../components/Modal';
import Scores from "./Scores";
import Modal from "../components/Modal";

import Instructions from "./Instructions";
import {
  secTohuman,
  editTimers,
  updateValues,
  playSound,
} from "../utils/TimerFunctions";
import WHTimerCSS from "./WHTimer.module.css";

import contentObj from "../language";

export default function WHTimer({ allowSound, language }) {
  const [defaultValues, setDefaultValeus] = useState({
    breathingTime: 30,
    restTime: 15,
  });

  const [showModal, setShowModal] = useState(false);

  const [isRunning, setIsRunning] = useState(false);
  const [isBreathing, setIsBreathing] = useState(false);
  const [isHolding, setIsHolding] = useState(false);
  const [isResting, setIsResting] = useState(false);

  const [breathCountdown, setBreathCountdown] = useState();
  const [breathHoldTimer, setBreathHoldTimer] = useState(0);
  const [restCountdown, setRestCountdown] = useState(5);
  const [declaredBreathCountdown, setDeclaredBreathCountdown] = useState(
    defaultValues.breathingTime
  );
  const [declaredRestCountdown, setDeclaredRestcountdown] = useState(
    defaultValues.restTime
  );

  const [breathHoldScores, setBreathHoldScores] = useState([]);
  const [showScores, setShowScores] = useState(false);

  const [rounds, setRounds] = useState(0);
  let breathTimer;
  let holdTimer;
  let restTimer;

  const handleFinish = () => {
    console.log(breathHoldScores);
    setShowScores(true);
    handleStart();
  };

  const handleReset = () => {
    setDeclaredBreathCountdown(defaultValues.breathingTime);
    setDeclaredRestcountdown(defaultValues.restTime);
  };

  function openModal() {
    setShowModal(true);
  }

  const handleStart = function () {
    // isRunning ? setIsRunning(false) : setIsRunning(true);
    if (!isRunning) {
      setRounds(0);
      setBreathHoldTimer(0);
      setIsRunning(true);
      setIsBreathing(false);
      playSound(allowSound, "gong");
      setBreathHoldScores([]);
    } else {
      setIsRunning(false);
      setIsHolding(false);
      setIsResting(false);
    }
    setBreathCountdown(declaredBreathCountdown);
    setRestCountdown(declaredRestCountdown);
    // isRunning && isBreathing ? null : setIsBreathing(true);
    setIsBreathing(true);
  };

  const handleStopTimer = function () {
    if (isHolding) {
      setBreathHoldScores((prev) => [...prev, breathHoldTimer]);

      setIsHolding(false);
      setIsResting(true);
    }
  };

  useEffect(() => {
    if (isRunning) {
      if (isBreathing) {
        breathTimer = setInterval(() => {
          updateValues(setBreathCountdown);
        }, 1000);
      }

      if (breathCountdown === 0) {
        setIsBreathing(false);
        clearInterval(breathTimer);
        setIsHolding(true);
        setBreathCountdown(declaredBreathCountdown);
        playSound(allowSound, "gong");
      }

      if (isHolding) {
        holdTimer = setInterval(() => {
          setBreathHoldTimer((prev) => prev + 1);
        }, 1000);
      }

      if (isResting) {
        restTimer = setInterval(() => {
          updateValues(setRestCountdown);
        }, 1000);
      }

      if (restCountdown === 0) {
        setBreathHoldTimer(0);
        clearInterval(restTimer);
        setIsResting(false);
        setIsBreathing(true);
        setRestCountdown(declaredRestCountdown);
        setRounds((prev) => prev + 1);
        playSound(allowSound, "gong");
      }
    }

    return () => {
      clearInterval(breathTimer);
      clearInterval(holdTimer);
      clearInterval(restTimer);
    };
  }, [
    handleStart,
    isRunning,
    setIsRunning,
    isHolding,
    setIsHolding,
    breathTimer,
    holdTimer,
    restTimer,
    restCountdown,
    setRestCountdown,
    isResting,
    setIsResting,
    handleStopTimer,
  ]);

  return (
    <div className="timerCard fadeIn">
      <h2>{contentObj[language].whTimer.title}</h2>
      <div className="inputContainer">
        <div className="inputControl">
          <label>{contentObj[language].whTimer.breathingTime}</label>

          <div className="buttonsContainer">
            <button
              onClick={() =>
                editTimers(setDeclaredBreathCountdown, "subs", 5, 5)
              }
            >
              -
            </button>
            <input
              disabled
              type="text"
              className="input"
              value={declaredBreathCountdown}
              onChange={(e) =>
                setDeclaredBreathCountdown(e.target.value) &&
                setBreathCountdown(e.target.value)
              }
            />
            <button
              onClick={() => editTimers(setDeclaredBreathCountdown, "add", 5)}
            >
              +
            </button>
          </div>
        </div>
        <div className="inputControl">
          <label>{contentObj[language].whTimer.restTime}</label>

          <div className="buttonsContainer">
            <button
              onClick={() => editTimers(setDeclaredRestcountdown, "subs", 5, 5)}
            >
              -
            </button>
            <input
              disabled
              type="text"
              className="input"
              value={declaredRestCountdown}
              onChange={(e) =>
                setDeclaredRestcountdown(e.target.value) &&
                setRestCountdown(e.target.value)
              }
            />
            <button
              onClick={() => editTimers(setDeclaredRestcountdown, "add", 5, 5)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      {/* buttons */}
      <div className="startButtonsContainer">
        <button onClick={() => handleStart()}>
          {isRunning ? "stop" : "start"}
        </button>
        {isRunning ? (
          <button onClick={handleFinish}>finish</button>
        ) : (
          <button onClick={handleReset}>reset</button>
        )}
      </div>
      <span
        style={{
          fontSize: "24px",
          display: "block",
          textAlign: "center",

          margin: "10px auto 1px auto",
        }}
      >
        {contentObj[language].whTimer.rounds} {rounds}
      </span>
      {/* Outputs */}
      <div
        style={{ marginTop: "0px" }}
        className={`outputsContainer ${
          (isRunning && isBreathing && WHTimerCSS.outputCircle) ||
          (isRunning && isHolding && WHTimerCSS.breathout) ||
          (isRunning && isResting && WHTimerCSS.breathin)
        }`}
        onClick={
          !isRunning
            ? () => {
                handleStart();
              }
            : () => handleStopTimer()
        }
      >
        {/* timers etc */}
        {!isRunning && (
          <>
            <span>{contentObj[language].whTimer.getReady}</span>
            <span>{contentObj[language].whTimer.pressStart}</span>
          </>
        )}
        {isBreathing && isRunning && (
          <>
            <span>{contentObj[language].whTimer.breathIn}</span>
            <span className="timer">{secTohuman(breathCountdown)}</span>
            <span>{contentObj[language].whTimer.breathOut}</span>
          </>
        )}
        {isResting && (
          <>
            <span>{contentObj[language].whTimer.breathInandHold}</span>
            <span className="timer">{secTohuman(restCountdown)}</span>
          </>
        )}
        {isHolding && (
          <>
            <span>{contentObj[language].whTimer.breathHold}</span>
            <span className="timer">
              {!isRunning
                ? secTohuman(declaredBreathCountdown)
                : secTohuman(breathHoldTimer)}
            </span>
            <span>{contentObj[language].whTimer.breathHoldStop}</span>
          </>
        )}
      </div>
      {/* <Instructions /> */}
      <button
        style={{
          fontSize: "16px",
          width: "16ch",
          margin: "0 auto",
          border: "3px solid white",
          padding: ".5em .5em",
          borderRadius: "8px",
        }}
        className="instructionsBtn"
        onClick={() => openModal()}
      >
        {contentObj[language].whTimer.about}
      </button>
      {/* show scores modal to be added */}
      <Modal showModal={showScores} setShowModal={setShowScores}>
        <Scores
          breathHoldScores={breathHoldScores}
          language={language}
          showScores={showScores}
          setShowScores={setShowScores}
        />
      </Modal>

      <div>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <Instructions showModal={showModal} setShowModal={setShowModal} />
        </Modal>
      </div>
    </div>
  );
}
