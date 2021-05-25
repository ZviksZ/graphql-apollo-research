import {gql} from "@apollo/client";

export const rootTypeDefs = gql`
  extend type Query {
    theme: String!
  }
`;
