import {useQuery}    from "@apollo/client";
import React         from "react";
import { NavLink }   from "react-router-dom";
import {getTheme}    from "../../graphql/modules/user/queries/getTheme";
import {getThemeVar} from "../../graphql/modules/user/queries/getThemeVar";
import Styles        from "./Navbar.module.css";

export const Navbar = () => {
   const {data} = useQuery(getTheme)
   const {data: theme} = useQuery(getThemeVar)
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

       <span className={Styles.theme}>{theme?.userTheme || ''}</span>
       <span >{data?.theme || ''}</span>
    </div>
  );
};
