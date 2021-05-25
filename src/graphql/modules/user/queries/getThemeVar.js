import {gql} from "@apollo/client";

export const getThemeVar = gql`
   query GetThemeVar {
       userTheme @client  
   }
`
