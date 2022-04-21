import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={`${classes.navbar__flex} container`}>
        <div className={classes.navbar__image}>
          <h2>edurald</h2>
        </div>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">About us</a>
          </li>
          <li>
            <a href="#home">Projects</a>
          </li>
          <li>
            <a href="#home">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
