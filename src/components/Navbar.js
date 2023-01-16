import React from "react";
import logo192 from "../images/logo192.png";

const Navbar = () => {
  return (
    <div>
      <nav>
        <img src={logo192} alt="" className="nav--icon" />
        <h3 className="nav--text">Demo Page</h3>
        <h4 className="nav--link">Demo Link</h4>
      </nav>
    </div>
  );
};

export default Navbar;
