import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Schedule from "./pages/Schedule.js";
import Standings from "./pages/Standings.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="page-wrapper">
          <div id="header-wrapper">
            <div id="header" className="container">
              <h1 id="logo">
                <a href="index.html">Robowriter</a>
              </h1>

              <nav id="nav">
                <ul>
                  <li>
                    <a href="#">Dropdown</a>
                  </li>
                  <li>
                    <a href="left-sidebar.html">Left Sidebar</a>
                  </li>
                  <li className="break">
                    <a href="right-sidebar.html">Right Sidebar</a>
                  </li>
                  <li>
                    <a href="no-sidebar.html">No Sidebar</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="row">
              <div className="col-9">
                <section
                  id="hero"
                  className="container"
                  style={{ paddingLeft: "2.5em" }}
                >
                  {/* <div>
                    <Schedule />
                  </div> */}
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="col-9">
          <section></section>
        </div>
        <div className="col-3">
          <Standings />
        </div>
      </div>
    );
  }
}

export default App;
