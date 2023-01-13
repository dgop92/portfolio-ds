import { IHomeRepository } from "../definitions/repositories/home.repository.def";
import { graphQLClient } from "../../../common/graphql-client";
import { HomeDatoCMSRepository } from "../infrastructure/dato-cms/home.datocms.repository";
import { staticHomeRepository } from "../infrastructure/static-repositories/home.static.repository";
import { RepositoryProviderName } from "@/common/types";
import { getAppLogger } from "@/common/logging/logger-factory";

const myLogger = getAppLogger().createLogger(__filename);

let homeRepository: IHomeRepository;

function getRepository(providerName: RepositoryProviderName): IHomeRepository {
  switch (providerName) {
    case "static":
      return staticHomeRepository;
    case "cms":
      return new HomeDatoCMSRepository(graphQLClient);
    default:
      throw new Error("Unknown provider name");
  }
}

export function homeRepositoryFactory(providerName: RepositoryProviderName) {
  myLogger.info("calling homeRepositoryFactory");
  if (homeRepository === undefined) {
    myLogger.info("creating homeRepository");
    homeRepository = getRepository(providerName);
  }
  return homeRepository;
}
