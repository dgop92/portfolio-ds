import { graphQLClient } from "@/common/graphql-client";
import { getAppLogger } from "@/common/logging/logger-factory";
import { RepositoryProviderName } from "@/common/types";
import { IProjectsRepository } from "../definitions/repositories/projects.repository.def";
import { ProjectsDatoCMSRepository } from "../infrastructure/dato-cms/projects.datocms.repository";
import { staticProjectsRepository } from "../infrastructure/static-repositories/projects.static.repository";

const myLogger = getAppLogger().createLogger(__filename);

let projectsRepository: IProjectsRepository;

function getRepository(providerName: RepositoryProviderName): IProjectsRepository {
  switch (providerName) {
    case "static":
      return staticProjectsRepository;
    case "cms":
      return new ProjectsDatoCMSRepository(graphQLClient);
    default:
      throw new Error("Unknown provider name");
  }
}

export function projectsRepositoryFactory(providerName: RepositoryProviderName) {
  myLogger.info("calling projectsRepositoryFactory");
  if (projectsRepository === undefined) {
    myLogger.info("creating projectsRepository");
    projectsRepository = getRepository(providerName);
  }
  return projectsRepository;
}
