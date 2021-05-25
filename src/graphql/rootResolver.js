import {postsMutationResolvers, postsQueryResolvers} from "./modules/posts/resolvers";
import {userMutationResolvers}                       from "./modules/user/resolvers";

export const rootResolver = {
   Query: {
      ...postsQueryResolvers
   },
   Mutation: {
      ...postsMutationResolvers,
      ...userMutationResolvers
   }
}
