import {InMemoryCache}                         from "@apollo/client";
import {postsTypePolicy, postsQueryTypePolicy} from "./modules/posts/typePolicy";
import {userQueryTypePolicy}                   from "./modules/user/typePolicy";

export const rootCache = new InMemoryCache({
   typePolicies: {
      ...postsTypePolicy,
      Query: {
         fields: {
            ...postsQueryTypePolicy,
            ...userQueryTypePolicy
         }
      }
   }
})
