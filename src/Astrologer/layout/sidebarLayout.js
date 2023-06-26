import React from "react";
import Sidebarheader from "./sidebarheader";
import "../../Assets/sass/component/astroAuth.scss";
import "../../Assets/sass/component/dashboard.scss";
import SidebarNav from "./sidebarNav";

const SidebarLayout = ({ children }) => {
  return (
    <>
      <Sidebarheader />
      <section className="bodyStructure">
        <SidebarNav />
        <div className="maincontentArea px-lg-4">{children}</div>
      </section>
    </>
  );
};

export default SidebarLayout;
