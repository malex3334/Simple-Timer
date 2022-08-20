import React, { useState } from "react";
import "./style.css";
import HiitTimer from "./hittimer/HiitTimer";
import WHTimer from "./whtimer/WHTimer";
import Stopwatch from "./stopwatch/StopWatch";
import About from "./About";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

let activeStyle = {
  // textDecoration: 'underline',
  borderBottom: "2px solid white",
  padding: "0 2px 3px 2px",
};

export default function App() {
  const date = new Date().toISOString().slice(0, 4);

  return (
    <BrowserRouter>
      <div className="container">
        <h1>Simple Timers</h1>
        {/* <div className="outputs"> */}
        <Routes>
          <Route path="/" element={<HiitTimer />} />
          <Route path="/hiit" element={<HiitTimer />} />
          <Route path="/whtimer" element={<WHTimer />} />
          <Route path="/about" element={<About />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
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
                Wim Hoff Breathing
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
