import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const headers = {
    position: "relative",
    maxWidth: "100%",
    padding: "2%",
  };

  const navbar = {
    position: "absolute",
    right: "0",
    top: "2%",
  };

  const titleLogo = {
    color: "white",
    fontStyle: "verdana",
  };

  const link = {
    color: "#fefcff",
    fontSize: "1.3rem",
    fontStyle: "courier",
  };

  return (
    <div>
      <div style={headers}>
        <h4 style={titleLogo}>Time Tracker</h4>

        <nav style={navbar} class="navbar navbar-expand-sm ">
          <div class="container-fluid">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a style={link} class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a style={link} class="nav-link" href="/">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a style={link} class="nav-link" href="/register">
                  Create Account
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
