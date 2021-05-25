import { ApolloClient }                    from "@apollo/client";
import {LocalStorageWrapper, persistCache} from "apollo3-cache-persist";
import { rootCache }                       from "./rootCache";
import {rootResolver}                      from "./rootResolver";
import {rootTypeDefs}                      from "./rootTypeDefs";



export const rootClient = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: rootCache,
  typeDefs: rootTypeDefs,
  resolvers: rootResolver,
  /*headers: {
      authorization: localStorage.getItem('token') || '',
      'rootClient-name': 'ac3-todos-backend',
      'rootClient-version': '1.0.0',
   },*/
  connectToDevTools: true,
});


