export interface FullProject {
  slug: string;
  title: string;
  content: string;
  image: string;
  tags: string[];
}

export interface ProjectPageContent {
  project: FullProject;
  header: string;
}
