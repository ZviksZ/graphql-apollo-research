import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <NavLink to={"/"} className={Styles.logo}>
        GRAPHQL APOLLO
      </NavLink>
      <NavLink
        to={"/posts"}
        className={Styles.link}
        activeClassName={Styles.active}
      >
        Posts
      </NavLink>
    </div>
  );
};
