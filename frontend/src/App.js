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
                    <ul>
                      <li>
                        <a href="#">Lorem ipsum dolor</a>
                      </li>
                      <li>
                        <a href="#">Magna phasellus</a>
                      </li>
                      <li>
                        <a href="#">Etiam dolore nisl</a>
                      </li>
                      <li>
                        <a href="#">Phasellus consequat</a>
                        <ul>
                          <li>
                            <a href="#">Lorem ipsum dolor</a>
                          </li>
                          <li>
                            <a href="#">Phasellus consequat</a>
                          </li>
                          <li>
                            <a href="#">Magna phasellus</a>
                          </li>
                          <li>
                            <a href="#">Etiam dolore nisl</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Veroeros feugiat</a>
                      </li>
                    </ul>
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
                  <div>
                    <Schedule />
                  </div>
                </section>
              </div>
              <Standings />
            </div>
          </div>

          <div id="footer-wrapper">
            <div id="footer" classNameName="container">
              <header className="major">
                <h2>Euismod aliquam vehicula lorem</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur et sed adipiscing elit.
                  Curabitur vel sem sit
                  <br />
                  dolor neque semper magna lorem ipsum feugiat veroeros lorem
                  ipsum dolore.
                </p>
              </header>
              <div className="row">
                <section className="col-6 col-12-narrower">
                  <form method="post" action="#">
                    <div className="row gtr-50">
                      <div className="col-6 col-12-mobile">
                        <input name="name" placeholder="Name" type="text" />
                      </div>
                      <div className="col-6 col-12-mobile">
                        <input name="email" placeholder="Email" type="text" />
                      </div>
                      <div className="col-12">
                        <textarea
                          name="message"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <ul className="actions">
                          <li>
                            <input type="submit" value="Send Message" />
                          </li>
                          <li>
                            <input type="reset" value="Clear form" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </section>
                <section className="col-6 col-12-narrower">
                  <div className="row gtr-0">
                    <ul className="divided icons col-6 col-12-mobile">
                      <li className="icon brands fa-twitter">
                        <a href="#">
                          <span className="extra">twitter.com/</span>untitled
                        </a>
                      </li>
                      <li className="icon brands fa-facebook-f">
                        <a href="#">
                          <span className="extra">facebook.com/</span>untitled
                        </a>
                      </li>
                      <li className="icon brands fa-dribbble">
                        <a href="#">
                          <span className="extra">dribbble.com/</span>untitled
                        </a>
                      </li>
                    </ul>
                    <ul className="divided icons col-6 col-12-mobile">
                      <li className="icon brands fa-instagram">
                        <a href="#">
                          <span className="extra">instagram.com/</span>untitled
                        </a>
                      </li>
                      <li className="icon brands fa-youtube">
                        <a href="#">
                          <span className="extra">youtube.com/</span>untitled
                        </a>
                      </li>
                      <li className="icon brands fa-pinterest">
                        <a href="#">
                          <span className="extra">pinterest.com/</span>untitled
                        </a>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
            <div id="copyright" className="container">
              <ul className="menu">
                <li>&copy; Untitled. All rights reserved.</li>
                <li>
                  Design: <a href="http://html5up.net">HTML5 UP</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
