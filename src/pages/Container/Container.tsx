import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

import NavBar from "../../components/NavBar";

const Container: React.FC = () => {
  return (
    <div className="Container">
      <div className="mx-16 mb-10">
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Container;
