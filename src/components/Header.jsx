import React from "react";
import logo from "../styles/images/logo.png";

const Header = () => (
  <div className="flex-container" role="heading" aria-level="1">
    <header>
      <nav>
        <img src={logo} alt="Logo" width="48" height="48" />
        <span>GIFt’ed</span>
      </nav>
    </header>
  </div>
);

export default Header;
