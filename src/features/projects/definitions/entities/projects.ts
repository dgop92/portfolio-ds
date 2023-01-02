export interface FullProject {
  title: string;
  content: string;
  image: string;
  tags: string[];
}

export interface ProjectsContent {
  projects: FullProject[];
  header: string;
}
