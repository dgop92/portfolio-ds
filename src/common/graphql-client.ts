import { GraphQLClient } from "graphql-request";
import { APP_ENV_VARS } from "./config/app-env-vars";

export const graphQLClient = new GraphQLClient("https://graphql.datocms.com/", {
  headers: {
    authorization: `Bearer ${APP_ENV_VARS.cms.API_TOKEN}`,
  },
});
