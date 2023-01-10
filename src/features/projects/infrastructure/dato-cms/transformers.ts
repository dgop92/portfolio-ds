import { FullProject } from "@features/projects/definitions/entities/projects";
import { FullProjectModel } from "./models/projects.datocms.model";

export function fromFullProjectModelToDomain(project: FullProjectModel): FullProject {
  return {
    title: project.title,
    slug: project.slug,
    image: project.image.url,
    content: project.content,
    tags: project.tag.map((t) => t.name),
  };
}
