export interface AboutMeItem {
  title: string;
  description: string;
  svgIconUrl: string;
}

export interface AboutContent {
  header: string;
  mainDescription: string;
  aboutMeItems: AboutMeItem[];
}
