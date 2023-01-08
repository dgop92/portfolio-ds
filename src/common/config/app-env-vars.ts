import { getOsEnv } from "./env-utils";

export const APP_ENV_VARS = {
  NODE_ENV: getOsEnv("NODE_ENV"),
  isProduction: getOsEnv("NODE_ENV") === "prod",
  isTest: getOsEnv("NODE_ENV") === "test",
  cms: {
    API_TOKEN: getOsEnv("NEXT_DATOCMS_API_TOKEN"),
  },
};
