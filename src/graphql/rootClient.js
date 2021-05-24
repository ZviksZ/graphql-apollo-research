import { ApolloClient } from "@apollo/client";
import { rootCache }    from "./rootCache";
import {rootResolver}   from "./rootResolver";

export const rootClient = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: rootCache,
  resolvers: rootResolver,
  /*headers: {
      authorization: localStorage.getItem('token') || '',
      'rootClient-name': 'ac3-todos-backend',
      'rootClient-version': '1.0.0',
   },*/
  connectToDevTools: true,
});
