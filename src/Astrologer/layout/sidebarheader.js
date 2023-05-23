import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import userIcon from "../../Assets/imgs/user.png";
import activeStatus from "../../Assets/imgs/EllipseAvtive.svg";

const Sidebarheader = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
        <a className="navbar-brand" href="#">
          <img src="../../logo.svg" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link button-login" href="#">
                Login
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link position-relative "
                href="#"
              >
                <img src={userIcon} className="loginHeaderImg" />{" "}
                <img
                  className="position-absolute activeStatusIcon"
                  src={activeStatus}
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebarheader;
