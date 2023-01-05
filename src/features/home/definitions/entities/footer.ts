export interface ContactMeItem {
  icon: string;
  link: string;
  title: string;
}

export interface FooterContent {
  header: string;
  contactMeItems: ContactMeItem[];
  copyrightMessage: string;
}
