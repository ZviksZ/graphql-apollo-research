import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./PostDetail.module.css";

export const PostDetail = ({ post }) => {
  return (
    <div className={Styles.post}>
      <div className={Styles.title}>ID: {post.id}</div>
      <div className={Styles.title}>{post.title}</div>
      <div className={Styles.body}>{post.body}</div>
       <div className={Styles.title}>Comments</div>
       <ul>
          {
             post.comments.data.map(({id, email, body, name}) => {
                return <li key={id}>
                   <div className={Styles.body}><b>{email}</b></div>
                   <div>{body}</div>
                </li>
             })
          }
       </ul>
    </div>
  );
};
