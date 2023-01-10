import { SupportedLang } from "@/common/types";
import { FullProject, ProjectPageContent } from "../entities/projects";

export interface IProjectsRepository {
  getProjectBySlug(slug: string, lang: SupportedLang): Promise<FullProject>;
  getProjects(lang: SupportedLang): Promise<FullProject[]>;
  getPageContent(slug: string, lang: SupportedLang): Promise<ProjectPageContent>;
}
