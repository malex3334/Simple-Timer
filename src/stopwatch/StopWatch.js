import React, { useEffect, useState } from 'react';
import {
  secTohuman,
  editTimers,
  updateValues,
  playSound,
} from '../utils/TimerFunctions';

import contentObj from '../language';

export default function StopWatch({ allowSound, language }) {
  const [defaultValues, setDefaultValues] = useState({ time: 30 });
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(defaultValues.time);
  const [declaredTime, setDeclaredTime] = useState(defaultValues.time);

  const handleStart = function () {
    setTimer(declaredTime);
    isRunning ? setIsRunning(false) : setIsRunning(true);
    if (isRunning) {
      setIsRunning(false);
    } else {
      setIsRunning(true);
      playSound(allowSound);
    }
  };

  let interval;
  useEffect(() => {
    if (isRunning) {
      interval = setInterval(() => {
        updateValues(setTimer);
      }, 1000);

      if (timer <= 0) {
        clearInterval(interval);
        setIsRunning(false);
        playSound(allowSound);
      }
    }

    return () => clearInterval(interval);
  }, [handleStart]);

  return (
    <div className="timerCard fadeIn">
      <h2>{contentObj[language].stopwatch.title}</h2>
      <div className="inputContainer">
        <div className="inputControl">
          <label>{contentObj[language].stopwatch.time}</label>
          <div className="buttonsContainer">
            <button onClick={() => editTimers(setDeclaredTime, 'subs', 5, 5)}>
              -
            </button>
            <input
              type="text"
              disabled
              className="input"
              value={declaredTime}
              onChange={(e) =>
                setDeclaredTime(e.target.value) && setTimer(e.target.value)
              }
            />
            <button onClick={() => editTimers(setDeclaredTime, 'add', 5)}>
              +
            </button>
          </div>
        </div>
      </div>
      {/* buttons */}
      <div className="startButtonsContainer">
        <button
          onClick={() => handleStart()}
          style={
            !isRunning
              ? { borderColor: 'greenyellow' }
              : { borderColor: 'orangered' }
          }
        >
          {isRunning ? 'stop' : 'start'}
        </button>
        <button
          onClick={() =>
            setDeclaredTime(defaultValues.time) && setTimer(defaultValues.time)
          }
        >
          reset
        </button>
      </div>

      {/* outputs */}
      <div
        style={
          isRunning
            ? { borderColor: 'greenyellow' }
            : { borderColor: 'orangered' }
        }
        className="outputsContainer"
        onClick={() => handleStart()}
      >
        <span className="timer">
          {!isRunning ? secTohuman(declaredTime) : secTohuman(timer)}
        </span>
      </div>
    </div>
  );
}
