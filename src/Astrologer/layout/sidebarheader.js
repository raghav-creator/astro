import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import useravtar from "../../Assets/imgs/useravtar.png";
import editicon from "../../Assets/imgs/editicon.png";

import userIcon from "../../Assets/imgs/user.png";
import { useNavigate } from "react-router-dom";
import activeStatus from "../../Assets/imgs/EllipseAvtive.svg";

const Sidebarheader = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <div className="container-fluid">
          <Navbar.Brand href="#home">
            {" "}
            <img src="./logo.svg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto gap-2 gap-md-0 align-items-center">
              <Nav.Link href="" className="d-block d-md-none">
                Dashboard
              </Nav.Link>

              <Nav.Link href="" className="d-block d-md-none">
                Links
              </Nav.Link>

              <Nav.Link
                eventKey={2}
                href="#memes"
                className=" position-relative"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img src={userIcon} className="loginHeaderImg" />
                <img
                  className="position-absolute activeStatusIcon"
                  src={activeStatus}
                />
                {isOpen && (
                  <div className="dropdownBox container">
                    <div className="dropdownBox-profile py-3 row justify-content-center align-items-center">
                      <div className="col-12">
                        <div className="cardShortOptions-img mx-auto">
                          <img src={useravtar} className="img-fluid" />
                        </div>
                      </div>

                      <div className="col-12 d-flex align-items-center gap-3 justify-content-center">
                        <h4>Rahul</h4>
                        <img src={editicon} />
                      </div>
                      <div className="col-12 text-center">
                        <p className="fw-semibold">+91 8754751287</p>
                      </div>
                    </div>
                    <div className="p-3 d-flex flex-wrap gap-3 flex-column basic-navbar-nav ">
                      <a href="#">My Account</a>
                      <a href="#">My Account</a>
                      <a onClick={()=>navigate('/transactions')} className="d-flex justify-content-between">
                        <b>Wallet Transactions</b> <span>₹ 0.0</span>{" "}
                      </a>
                      <a onClick={()=>navigate('/')}>Logout</a>
                    </div>
                  </div>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Sidebarheader;
