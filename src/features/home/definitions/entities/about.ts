export interface AboutMeItem {
  title: string;
  description: string;
  svgIconUrl: string;
}

export interface AboutContent {
  mainDescription: string;
  aboutMeItems: AboutMeItem[];
}
