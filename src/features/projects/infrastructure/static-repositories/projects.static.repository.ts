import { ProjectsRepository } from "@features/projects/definitions/repositories/projects.repository.def";
import { ProjectsContent } from "@features/projects/definitions/entities/projects";
import { SupportedLang } from "@/common/types";
import projectsContentEn from "../../../../../content/en/projects.json";
import projectsContentEs from "../../../../../content/es/projects.json";

export function getProjectsContent(lang: SupportedLang): Promise<ProjectsContent> {
  if (lang === SupportedLang.EN) {
    return Promise.resolve(projectsContentEn);
  }

  if (lang === SupportedLang.ES) {
    return Promise.resolve(projectsContentEs);
  }

  throw new Error("Unsupported language");
}

export const staticProjectsRepository: ProjectsRepository = {
  getProjectsContent,
};
