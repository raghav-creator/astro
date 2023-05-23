import React from "react";
import { Nav } from "react-bootstrap";
import freamePen from "../../Assets/imgs/FramePencil.png";

function SidebarNav() {
  return (
    <>
      <aside className="sidebarArea bg-light-brown position-relative">
        <div className="navareaFixed position-sticky">
          <div className="navTopArea pt-5 pb-3 text-center position-relative">
            <div className="astrologerProfile mx-auto  bg-white ">
              <img src="./../banner.png" className="img-fluid" />
            </div>
            <img src={freamePen} className="pencileEdit" />
            <h5 className="text-light mt-3">Shailesh</h5>
          </div>
          <div className="navbarVertical mt-4">
            <Nav
              defaultActiveKey="/home"
              activeClass="active"
              className="flex-column gap-3"
            >
              <Nav.Link href="/home" activeClass="active">
                Dashboard
              </Nav.Link>
              <Nav.Link eventKey="link-1" activeClass="active">
                Link
              </Nav.Link>
              <Nav.Link eventKey="link-2" activeClass="active">
                Link
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </aside>
    </>
  );
}

export default SidebarNav;
