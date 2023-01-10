import { RepositoryProviderName } from "@/common/types";
import { IProjectsRepository } from "../definitions/repositories/projects.repository.def";
import { staticProjectsRepository } from "../infrastructure/static-repositories/projects.static.repository";

let projectsRepository: IProjectsRepository;

function getRepository(providerName: RepositoryProviderName): IProjectsRepository {
  switch (providerName) {
    case "static":
      return staticProjectsRepository;
    case "cms":
      throw new Error("Not implemented yet");
    default:
      throw new Error("Unknown provider name");
  }
}

export function projectsRepositoryFactory(providerName: RepositoryProviderName) {
  if (projectsRepository === undefined) {
    projectsRepository = getRepository(providerName);
  }
  return projectsRepository;
}
