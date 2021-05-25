import {gql, useApolloClient, useMutation, useQuery} from "@apollo/client";
import {CachePersistor}                              from "apollo3-cache-persist";
import React                                         from 'react';
import {setTheme}                                    from "../graphql/modules/user/mutations/setTheme";
import {getTheme}                                    from "../graphql/modules/user/queries/getTheme";
import {getThemeVar}                                 from "../graphql/modules/user/queries/getThemeVar";
import {themeVar}                                    from "../graphql/modules/user/variables";

export const MainPage = () => {
   //const client = useApolloClient();

   const {data} = useQuery(getTheme)


   const [set] = useMutation(setTheme, {
      variables: {
         theme: data?.theme === 'dark' ? 'white' : 'dark'
      }
   })

   const changeThemeHandler = () => {
      themeVar(themeVar() === 'dark' ? 'white' : 'dark')
   }
   return (
      <>
         <button onClick={set}>Write query theme</button>
         <button onClick={changeThemeHandler}>Change theme var</button>
      </>
   );
}

