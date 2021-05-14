import React from "react";
import logo from "../assets/images/logo.webp";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="app-header">
      <nav className="container">
        <Link to="/">
          <img src={logo} height={48} alt="Rick and Morty" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
