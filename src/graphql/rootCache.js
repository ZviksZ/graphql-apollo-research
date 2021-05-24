import {InMemoryCache}                         from "@apollo/client";
import {postsTypePolicy, postsQueryTypePolicy} from "./modules/posts/typePolicy";

export const rootCache = new InMemoryCache({
   typePolicies: {
      ...postsTypePolicy,
      Query: {
         fields: {
            ...postsQueryTypePolicy
         }
      }
   }
})
