import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FcCalculator } from "react-icons/fc";
import Button from "../button/Button";

function NavBar() {
  return (
    <header className="navigation-bar">
      <nav className="nav-bar-header">
        <h1>NavBar</h1>
        <FcCalculator size={30} />
      </nav>
      <nav>
        <ul className="navigation-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
        </ul>
      </nav>
      <nav className="nav-buttons">
        <Button text="Login" path="/login" />
        <Button text="Logout"/>
        <Button
          text="Register"
          path="/register"
        />
      </nav>
    </header>
  );
}

export default NavBar;
