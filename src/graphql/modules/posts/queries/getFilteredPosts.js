import {gql} from "@apollo/client";

export const getFilteredPosts = gql`
   query GetFilteredPosts($search: String) {
      filteredPosts @client {
         id
         title
      }
   }
`
