import { gql } from "@apollo/client";

export const getPost = gql`
  query GetPost($id: ID!) {
  post(id: $id) {
    id
    title
    body
    comments {
      data {
         id
         name
         email
         body
      }
    }
  }
}
`;
