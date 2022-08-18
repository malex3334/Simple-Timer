import React, { useState } from "react";
import "./style.css";
import HiitTimer from "./hittimer/HiitTimer";
import About from "./About";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

let activeStyle = {
  // textDecoration: 'underline',
  borderBottom: "2px solid white",
  padding: "0 2px 3px 2px",
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>Simple Timers</h1>
        {/* <div className="outputs"> */}
        <Routes>
          <Route path="/" element={<HiitTimer />} />
          <Route path="/hiit" element={<HiitTimer />} />
          <Route path="/about" element={<About />} />
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
                to="/placeholder"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Placeholder
              </NavLink>
            </li>
          </ul>
        </div>
        {/*  */}
      </div>
    </BrowserRouter>
  );
}
