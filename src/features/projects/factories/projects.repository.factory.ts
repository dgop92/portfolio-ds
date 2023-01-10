import { IProjectsRepository } from "../definitions/repositories/projects.repository.def";
import { staticProjectsRepository } from "../infrastructure/static-repositories/projects.static.repository";

type ProviderName = "static" | "datoCMS";

let projectsRepository: IProjectsRepository;

function getRepository(providerName: ProviderName): IProjectsRepository {
  switch (providerName) {
    case "static":
      return staticProjectsRepository;
    case "datoCMS":
      throw new Error("Not implemented yet");
    default:
      throw new Error("Unknown provider name");
  }
}

export function projectsRepositoryFactory(providerName: ProviderName) {
  if (projectsRepository === undefined) {
    projectsRepository = getRepository(providerName);
  }
  return projectsRepository;
}
