export interface ContactMeItemModel {
  icon: {
    url: string;
  };
  link: string;
  title: string;
}

export interface FooterContentModel {
  header: string;
  contactMeItem: ContactMeItemModel[];
  copyrightMessage: string;
}
