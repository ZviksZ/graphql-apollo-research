import {gql} from "@apollo/client";

export const setTheme = gql`
   mutation SetTheme($theme: String!) {
      updateTheme(theme: $theme) @client
   }
`
