import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layoutuser = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layoutuser;
