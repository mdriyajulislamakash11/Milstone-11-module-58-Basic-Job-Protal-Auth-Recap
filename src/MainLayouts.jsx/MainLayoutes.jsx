import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayoutes = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar />
        <div className="min-h-[calc(100vh-317px)]">
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default MainLayoutes;
