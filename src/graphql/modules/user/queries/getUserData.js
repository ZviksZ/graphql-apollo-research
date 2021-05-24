import { gql } from "@apollo/client";

export const getUserData = gql`
  query GetUserData($id: ID){
    user(id: $id) {
      id
      username
      email
      address {
        geo {
          lat
          lng
        }
      }
    }
  }
`;
