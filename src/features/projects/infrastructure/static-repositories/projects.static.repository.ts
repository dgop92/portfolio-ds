import { IProjectsRepository } from "@features/projects/definitions/repositories/projects.repository.def";
import { FullProject } from "@features/projects/definitions/entities/projects";
import { SupportedLang } from "@/common/types";

type StaticRepoProjectPage = {
  header: string;
  projects: FullProject[];
};

export async function getProjectsContent(
  lang: SupportedLang
): Promise<StaticRepoProjectPage> {
  const content = await import(`../../../../../content/${lang}/projects.json`);
  return content.default;
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
