import { SupportedLang } from "@/common/types";
import { ProjectsContent } from "../entities/projects";

export interface ProjectsRepository {
  getProjectsContent: (lang: SupportedLang) => Promise<ProjectsContent>;
}
