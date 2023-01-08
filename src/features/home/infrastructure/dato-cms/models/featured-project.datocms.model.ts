export type FeaturedProjectModel = {
  title: string;
  description: string;
  image: {
    url: string;
  };
  tag: {
    name: string;
  }[];
};

export type FeaturedProjectContentModel = {
  header: string;
  viewAllButton: string;
  viewCompleteProjectMessage: string;
  featuredProject: FeaturedProjectModel[];
};
