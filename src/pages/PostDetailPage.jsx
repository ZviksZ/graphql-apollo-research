import {useQuery}    from "@apollo/client";
import React         from "react";
import { useParams } from "react-router-dom";
import {getPost}     from "../graphql/modules/posts/queries/getPost";

export const PostDetailPage = () => {
  const { id } = useParams();
  const {data, loading} = useQuery(getPost, {
     variables: { id }
  })
   if (loading) {
      return <>LOADING...</>
   }
  return <>{JSON.stringify(data)}</>;
};
