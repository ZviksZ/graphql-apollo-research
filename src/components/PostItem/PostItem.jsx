import React from "react";
import Styles from "./PostItem.module.css";
import { useHistory } from "react-router-dom";

export const PostItem = ({ id, title }) => {
  const history = useHistory();

   const handleClick = () => {
      history.push(`/posts/${id}`)
   }

  return (
    <div onClick={handleClick} className={Styles.post}>
      {title}
    </div>
  );
};
