import { IProjectsRepository } from "@features/projects/definitions/repositories/projects.repository.def";
import { FullProject } from "@features/projects/definitions/entities/projects";
import { SupportedLang } from "@/common/types";
import projectsContentEn from "../../../../../content/en/projects.json";
import projectsContentEs from "../../../../../content/es/projects.json";

type StaticRepoProjectPage = {
  header: string;
  projects: FullProject[];
};

export function getProjectsContent(
  lang: SupportedLang
): Promise<StaticRepoProjectPage> {
  if (lang === SupportedLang.EN) {
    return Promise.resolve(projectsContentEn);
  }

  if (lang === SupportedLang.ES) {
    return Promise.resolve(projectsContentEs);
  }

  throw new Error("Unsupported language");
}

export const staticProjectsRepository: IProjectsRepository = {
  getProjectBySlug: async (slug, lang) => {
    const projectsContent = await getProjectsContent(lang);
    const project = projectsContent.projects.find((p) => p.slug === slug);
    if (!project) {
      throw new Error("Project not found");
    }
    return project;
  },
  getProjects: async (lang) => {
    const projectsContent = await getProjectsContent(lang);
    return projectsContent.projects;
  },
  getPageContent: async (slug, lang) => {
    const projectsContent = await getProjectsContent(lang);
    const project = projectsContent.projects.find((p) => p.slug === slug);
    if (!project) {
      throw new Error("Project not found");
    }
    return {
      header: projectsContent.header,
      project,
    };
  },
};
