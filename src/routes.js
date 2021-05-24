import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { PostDetailPage } from "./pages/PostDetailPage";
import { PostsPage } from "./pages/PostsPage";

export const useRoutes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          Main Page
        </Route>
        <Route path="/posts" exact>
          <PostsPage />
        </Route>
        <Route path="/posts/:id" exact>
          <PostDetailPage />
        </Route>
      </Switch>
    </>
  );
};
