import React from "react";
import { Link } from "@reach/router";
import { NavStyled, NavCenter, NavLogo } from "../styles";

const Nav = () => {
  return (
    <NavStyled>
      <div className="nav-logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="nav-center">
        <Link className="nav-link" to="/">
          <h1>Home</h1>
        </Link>
        <Link className="nav-link" to="/about">
          <h1>About</h1>
        </Link>
        <Link className="nav-link" to="/shop">
          <h1>Shop</h1>
        </Link>
        <Link className="nav-link" to="/gallery">
          <h1>Gallery</h1>
        </Link>
        <Link className="nav-link" to="/contact">
          <h1>Contact</h1>
        </Link>
      </div>
      <div className="nav-right">
        <h3>login</h3>
      </div>
    </NavStyled>
  );
};

export default Nav;
