import { RepositoryProviderName } from "../types";
import { getOsEnv, parseIntOrThrow } from "./env-utils";

function isRepositoryProviderName(value: string): value is RepositoryProviderName {
  return ["cms", "static"].includes(value);
}

function getRepositoryProviderName(key: string) {
  const value = getOsEnv("REPOSITORY_PROVIDER");
  if (!isRepositoryProviderName(value)) {
    throw new Error(`Invalid value for ${key} environment variable`);
  }
  return value;
}

export const APP_ENV_VARS = {
  NODE_ENV: process.env.NODE_ENV,
  isProduction: process.env.NODE_ENV === "production",
  isTest: process.env.NODE_ENV === "test",
  isDevelopment: process.env.NODE_ENV === "development",
  cms: {
    API_TOKEN: getOsEnv("DATOCMS_API_TOKEN"),
  },
  repositoryProvider: getRepositoryProviderName("REPOSITORY_PROVIDER"),
  content_revalidation: parseIntOrThrow(getOsEnv("CONTENT_REVALIDATION")),
};
