import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logoimg from "../../Assets/imgs/logo.svg";
import { useNavigate } from "react-router-dom";


const Header = () => {
 const navigate = useNavigate();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={()=>navigate('/')}>
            {" "}
            <img src={logoimg} />
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto gap-2 gap-md-0 align-items-center">
             
              <Nav.Link
                eventKey={2}
                href="#memes"
                className=" position-relative"
              >
                <img src={userIcon} className="loginHeaderImg" />{" "}
                <img
                  className="position-absolute activeStatusIcon"
                  src={activeStatus}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>

      
    </>
  );
};

export default Header;
