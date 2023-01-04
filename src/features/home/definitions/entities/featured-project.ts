export interface FeaturedProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
}
export interface FeaturedProjectsContent {
  featuredProjects: FeaturedProject[];
  header: string;
  viewAllButton: string;
  viewCompleteProjectMessage: string;
}
