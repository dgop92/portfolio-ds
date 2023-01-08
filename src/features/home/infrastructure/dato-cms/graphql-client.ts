import { GraphQLClient } from "graphql-request";

export const graphQLClient = new GraphQLClient("https://graphql.datocms.com/", {
  headers: {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  },
});
