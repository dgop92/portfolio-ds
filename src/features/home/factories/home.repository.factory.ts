import { IHomeRepository } from "../definitions/repositories/home.repository.def";
import { graphQLClient } from "../infrastructure/dato-cms/graphql-client";
import { HomeDatoCMSRepository } from "../infrastructure/dato-cms/home.datocms.repository";
import { staticHomeRepository } from "../infrastructure/static-repositories/home.static.repository";

type ProviderName = "static" | "datoCMS";

let homeRepository: IHomeRepository;

function getRepository(providerName: ProviderName): IHomeRepository {
  switch (providerName) {
    case "static":
      return staticHomeRepository;
    case "datoCMS":
      return new HomeDatoCMSRepository(graphQLClient);
    default:
      throw new Error("Unknown provider name");
  }
}

export function homeRepositoryFactory(providerName: ProviderName) {
  if (homeRepository === undefined) {
    homeRepository = getRepository(providerName);
  }
  return homeRepository;
}
