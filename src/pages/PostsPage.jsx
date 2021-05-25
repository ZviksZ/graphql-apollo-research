import { useQuery, useReactiveVar } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { PostItem } from "../components/PostItem/PostItem";
import { getAllPosts } from "../graphql/modules/posts/queries/getAllPosts";
import { getFilteredPosts } from "../graphql/modules/posts/queries/getFilteredPosts";
import { getPostsState } from "../graphql/modules/posts/queries/getPostsState";
import { postsStateVar } from "../graphql/modules/posts/variables";

export const PostsPage = () => {
  const [search, setSearch] = useState("");
  const { loading, refetch } = useQuery(getAllPosts);
  const {
    data: { postsState },
  } = useQuery(getPostsState);
  const { data } = useQuery(getFilteredPosts, {
    variables: { search },
  });

  const onChangeHandler = ({ target }) => {
    setSearch(target.value);
  };

   const refetchHandler = () => {
      refetch()
   };

   const clearHandler = () => {
      setSearch('')
   };

  useEffect(() => {
    if (data) {
      postsStateVar({ ...postsStateVar(), count: data.filteredPosts.length });
    }
  }, [data]);

  if (loading) {
    return <>LOADING POSTS...</>;
  }
  console.log('RENDER');

  return (
    <>
      <input value={search} onChange={onChangeHandler} />
      <button onClick={refetchHandler}>Refetch posts</button>
      <button onClick={clearHandler}>Clear filters</button>
      <div>Count: {postsState.count}</div>
      {data.filteredPosts.map(({ id, title }) => (
        <PostItem key={id} id={id} title={title} />
      ))}
    </>
  );
};
