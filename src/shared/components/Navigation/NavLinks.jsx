import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

export default function NavLinks(props) {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
        <NavLink to="/u1/places">MY PLACES</NavLink>
        <NavLink to="/places/new">ADD PLAYERS</NavLink>
        <NavLink to="/auth">LOGIN</NavLink>
      </li>
    </ul>
  );
}
