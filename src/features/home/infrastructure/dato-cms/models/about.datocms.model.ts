export type AboutMeItemModel = {
  title: string;
  description: string;
  svgIcon: {
    url: string;
  };
};

export type AboutContentModel = {
  header: string;
  mainDescription: string;
  aboutMeItem: AboutMeItemModel[];
};
