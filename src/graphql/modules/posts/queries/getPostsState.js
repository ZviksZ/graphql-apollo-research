import {gql} from "@apollo/client";

export const getPostsState = gql`
   query GetPostsState {
      postsState @client
   }
`
