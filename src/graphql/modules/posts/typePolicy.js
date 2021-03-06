import { postsStateVar } from "./variables";

export const postsQueryTypePolicy = {
  postsState: {
    read() {
      return postsStateVar();
    },
  },
  filteredPosts: {
    read(postsData, { variables, readField }) {
      const posts = readField("posts");
      const data = readField("data", posts) ?? [];
      return data.filter((postRef) =>
        readField("title", postRef)
          .toLowerCase()
          .includes(variables.search.toLowerCase())
      );
    },
  },
};

export const postsTypePolicy = {
  Post: {
    keyFields: (data) => `p${data.id}`,
    fields: {
      body: {
        read(data, { variables, readField }) {
          console.log("READ BODY - name of field", data);
          return data;
        },
      }
    }
  },
  PostsPage: {
    keyFields: () => `posts`,
    fields: {
      data: {
        read(data, { variables, readField }) {
          console.log("READ DATA", data);
          return data;
        },
      },
    },
  },
};
