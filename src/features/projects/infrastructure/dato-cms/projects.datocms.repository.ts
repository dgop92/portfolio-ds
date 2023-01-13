import { IProjectsRepository } from "@features/projects/definitions/repositories/projects.repository.def";
import { GraphQLClient } from "graphql-request";
import {
  FullProject,
  ProjectPageContent,
} from "@features/projects/definitions/entities/projects";
import { SupportedLang } from "@/common/types";
import {
  ProjectPageContentModel,
  FullProjectModel,
} from "./models/projects.datocms.model";
import { ALL_PROJECTS_QUERY, PROJECT_PAGE_CONTENT_QUERY } from "./projects-query";
import { fromFullProjectModelToDomain } from "./transformers";

type PageContentModel = Omit<ProjectPageContentModel, "projects">;

export class ProjectsDatoCMSRepository implements IProjectsRepository {
  constructor(private client: GraphQLClient) {}

  async getProjectBySlug(slug: string, lang: SupportedLang): Promise<FullProject> {
    const result = await this.client.request<{
      projectContent: { projects: FullProjectModel[] };
    }>(ALL_PROJECTS_QUERY, {
      locale: lang,
    });

    const project = result.projectContent.projects.find((p) => p.slug === slug);

    if (project) {
      return fromFullProjectModelToDomain(project);
    }

    throw new Error(`could not find project ${slug}`);
  }

  async getProjects(lang: SupportedLang): Promise<FullProject[]> {
    const result = await this.client.request<{
      projectContent: { projects: FullProjectModel[] };
    }>(ALL_PROJECTS_QUERY, {
      locale: lang,
    });

    return result.projectContent.projects.map(fromFullProjectModelToDomain);
  }

  async getPageContent(slug: string, lang: SupportedLang): Promise<ProjectPageContent> {
    const result = await this.client.request<{
      projectContent: PageContentModel;
    }>(PROJECT_PAGE_CONTENT_QUERY, {
      locale: lang,
    });
    const fullProject = await this.getProjectBySlug(slug, lang);
    return {
      header: result.projectContent.header,
      project: fullProject,
    };
  }
}
