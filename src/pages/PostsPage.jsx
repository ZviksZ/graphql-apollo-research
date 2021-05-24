import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { PostItem } from "../components/PostItem/PostItem";
import { getAllPosts } from "../graphql/modules/posts/queries/getAllPosts";
import { getFilteredPosts } from "../graphql/modules/posts/queries/getFilteredPosts";

export const PostsPage = () => {
  const [search, setSearch] = useState("");
  const { loading } = useQuery(getAllPosts);
  const { data, refetch } = useQuery(getFilteredPosts, {
    variables: { search },
  });

  const onChangeHandler = ({ target }) => {
    setSearch(target.value);
  };

  if (loading) {
    return <>LOADING...</>;
  }

  return (
    <>
      <input value={search} onChange={onChangeHandler} />
      {data.filteredPosts.map(({ id, title }) => (
        <PostItem key={id} id={id} title={title} />
      ))}
    </>
  );
};
