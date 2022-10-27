import React, { Component } from "react";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navigation">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Portfolio Metin Gercek
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Projects
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="/group-projects">
                      Group projects
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/react">
                        React
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/angular">
                        Angular
                      </a>
                    </li>

                    <li>
                      <a class="dropdown-item" href="/javascript">
                        JavaScript
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/html-css">
                        HTML & CSS
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/spring-boot">
                        Spring Boot
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="https://metinportfolio.wordpress.com" target="_blank" rel="noopener noreferrer">
                        Designs
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
