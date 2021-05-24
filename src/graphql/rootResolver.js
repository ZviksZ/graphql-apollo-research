import {postsMutationResolvers, postsQueryResolvers} from "./modules/posts/resolvers";

export const rootResolver = {
   Query: {
      ...postsQueryResolvers
   },
   Mutation: {
      ...postsMutationResolvers
   }
}
