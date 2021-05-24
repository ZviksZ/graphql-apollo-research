import { gql } from "@apollo/client";

export const getAllPosts = gql`
  query GetPosts {
  posts {
    data {
      id
      title
    }
    meta {
      totalCount
    }
     
  }
}
`;
