import React, { useState, useEffect } from "react";
import "./style.css";
import HiitTimer from "./hittimer/HiitTimer";
import WHTimer from "./whtimer/WHTimer";
import Stopwatch from "./stopwatch/StopWatch";
import About from "./About";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import soundIcon from "./utils/SoundIcon.svg";
import soundOffIcon from "./utils/SoundOffIcon.svg";

let activeStyle = {
  borderBottom: "2px solid white",
  padding: "0 2px 3px 2px",
};

export default function App() {
  const date = new Date().toISOString().slice(0, 4);

  const [allowSound, setAllowSound] = useState(
    // localStorage.getItem('sounds') ? JSON.parse(localStorage.getItem("sounds") : true)
    !localStorage.getItem("sounds")
      ? true
      : JSON.parse(localStorage.getItem("sounds"))
  );
  // const [allowSound, setAllowSound] = useState();

  console.log(allowSound);
  useEffect(() => {
    localStorage.setItem("sounds", allowSound);
  }, [allowSound, setAllowSound]);

  return (
    <BrowserRouter>
      <div className="container">
        <div className="allowSoundContainer">
          {allowSound ? (
            <img
              className="icon"
              src={soundIcon}
              alt="sound on icon"
              onClick={() => {
                setAllowSound(false);
              }}
            />
          ) : (
            <img
              className="icon"
              alt="sound off icon"
              src={soundOffIcon}
              onClick={() => setAllowSound(true)}
            />
          )}
        </div>
        <h1>Simple Timers</h1>
        {/* <div className="outputs"> */}
        <Routes>
          <Route path="/" element={<HiitTimer allowSound={allowSound} />} />
          <Route path="/hiit" element={<HiitTimer allowSound={allowSound} />} />
          <Route
            path="/whtimer"
            element={<WHTimer allowSound={allowSound} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/stopwatch"
            element={<Stopwatch allowSound={allowSound} />}
          />
        </Routes>
        {/* </div> */}

        {/* navigation */}
        <div className="nav">
          <ul className="navigation">
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hiit"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                HIIT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/stopwatch"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Stopwatch
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/whtimer"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                W.Hoff Breathing
              </NavLink>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="footer">
          <a href="https://github.com/malex3334" target="_blank">
            Copyrights M.A. {date}
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
}

// TODO
// sounds on and off
// light and dark themes function
