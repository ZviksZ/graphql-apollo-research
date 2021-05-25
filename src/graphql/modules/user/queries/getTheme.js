import {gql} from "@apollo/client";

export const getTheme = gql`
   query GetTheme {
      theme @client
   }
`
