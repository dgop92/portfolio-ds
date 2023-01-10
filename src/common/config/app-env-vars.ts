import { RepositoryProviderName } from "../types";
import { getOsEnv } from "./env-utils";

function isRepositoryProviderName(value: string): value is RepositoryProviderName {
  return ["cms", "static"].includes(value);
}

function getRepositoryProviderName(key: string) {
  const value = getOsEnv("NEXT_REPOSITORY_PROVIDER");
  if (!isRepositoryProviderName(value)) {
    throw new Error(`Invalid value for ${key} environment variable`);
  }
  return value;
}

export const APP_ENV_VARS = {
  NODE_ENV: getOsEnv("NODE_ENV"),
  isProduction: getOsEnv("NODE_ENV") === "production",
  isTest: getOsEnv("NODE_ENV") === "test",
  isDevelopment: getOsEnv("NODE_ENV") === "development",
  cms: {
    API_TOKEN: getOsEnv("NEXT_DATOCMS_API_TOKEN"),
  },
  repositoryProvider: getRepositoryProviderName("NEXT_REPOSITORY_PROVIDER"),
};
