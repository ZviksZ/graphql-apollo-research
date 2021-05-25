import {useQuery}           from "@apollo/client";
import React                from "react";
import {NavLink, useParams} from "react-router-dom";
import {PostDetail}         from "../components/PostDetail/PostDetail";
import {getPost}            from "../graphql/modules/posts/queries/getPost";

export const PostDetailPage = () => {
  const { id } = useParams();
  const {data, loading} = useQuery(getPost, {
     variables: { id }
  })
   if (loading) {
      return <>LOADING...</>
   }
  return <>
     <NavLink to={"/posts"}>back to posts</NavLink>
   <PostDetail post={data.post}/>
  </>;
};
