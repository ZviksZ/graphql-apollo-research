import {gql} from "@apollo/client";

export const userQueryResolvers = {

}
export const userMutationResolvers = {
   updateTheme: (_, { theme }, { cache }) => {
      console.log('update', theme);
      const data = {
         theme,
      };
      cache.writeQuery({
         query: gql`
      query SetTheme {
        theme
      }
    `,
         data
      });
      return null;
   }
}
