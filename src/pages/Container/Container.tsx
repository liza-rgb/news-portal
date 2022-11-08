import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

import NavBar from "../../components/NavBar";

const Container: React.FC = () => {
  return (
    <div className="Container">
      <div className="mx-auto mt-5 mb-12 xl:w-[1300px] lg:w-[1030px] md:w-[940px] ">
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Container;
