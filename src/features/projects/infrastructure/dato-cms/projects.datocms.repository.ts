import { IProjectsRepository } from "@features/projects/definitions/repositories/projects.repository.def";
import { GraphQLClient } from "graphql-request";
import {
  FullProject,
  ProjectPageContent,
} from "@features/projects/definitions/entities/projects";
import { propertyIsNotNull, SupportedLang } from "@/common/types";
import {
  ProjectPageContentModel,
  FullProjectModel,
} from "./models/projects.datocms.model";
import { PROJECTS_PAGE_QUERY } from "./projects-query";
import { fromFullProjectModelToDomain } from "./transformers";

type PageContentModel = Omit<ProjectPageContentModel, "projects">;

type PageContentModelLocalized = Record<SupportedLang, PageContentModel | null>;
type ProjectsLocalized = Record<SupportedLang, FullProjectModel[] | null>;

export class ProjectsDatoCMSRepository implements IProjectsRepository {
  private projectPageContentModel: PageContentModelLocalized;

  private projects: ProjectsLocalized;

  constructor(private client: GraphQLClient) {
    this.projectPageContentModel = {
      en: null,
      es: null,
    };
    this.projects = {
      en: null,
      es: null,
    };
  }

  async getProjectBySlug(slug: string, lang: SupportedLang): Promise<FullProject> {
    await this.fetchAllContent(lang);
    if (propertyIsNotNull(this.projects, lang)) {
      const project = this.projects[lang].find((p) => p.slug === slug);
      if (!project) {
        throw new Error(`project with slug ${slug} not found`);
      }
      return fromFullProjectModelToDomain(project);
    }

    throw new Error("could not fetch content from cms");
  }

  async getProjects(lang: SupportedLang): Promise<FullProject[]> {
    await this.fetchAllContent(lang);
    if (propertyIsNotNull(this.projects, lang)) {
      return this.projects[lang].map(fromFullProjectModelToDomain);
    }

    throw new Error("could not fetch content from cms");
  }

  async getPageContent(slug: string, lang: SupportedLang): Promise<ProjectPageContent> {
    await this.fetchAllContent(lang);
    const project = await this.getProjectBySlug(slug, lang);
    if (propertyIsNotNull(this.projectPageContentModel, lang)) {
      return {
        header: this.projectPageContentModel[lang].header,
        project,
      };
    }

    throw new Error("could not fetch content from cms");
  }

  private async fetchAllContent(lang: SupportedLang): Promise<void> {
    if (this.projects[lang] === null) {
      const result = await this.client.request<{
        projectContent: PageContentModel & { projects: FullProjectModel[] };
      }>(PROJECTS_PAGE_QUERY, {
        locale: lang,
      });
      const { projects, ...content } = result.projectContent;
      this.projects[lang] = projects;
      this.projectPageContentModel[lang] = content;
    }
  }
}
