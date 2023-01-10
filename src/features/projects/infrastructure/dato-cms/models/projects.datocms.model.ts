export interface FullProjectModel {
  slug: string;
  title: string;
  content: string;
  image: {
    url: string;
  };
  tag: {
    name: string;
  }[];
}

export interface ProjectPageContentModel {
  projects: FullProjectModel[];
  header: string;
}
