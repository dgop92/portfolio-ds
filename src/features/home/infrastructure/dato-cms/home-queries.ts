import { gql } from "graphql-request";

export const HOME_QUERY = gql`
  query ($locale: SiteLocale) {
    hero(locale: $locale) {
      name
      jobTitle
    }
    about(locale: $locale) {
      header
      mainDescription
      aboutMeItem {
        title
        svgIcon {
          url
        }
        description
      }
    }
    featuredProjectContent(locale: $locale) {
      header
      viewAllButton
      viewCompleteProjectMessage
      featuredProject {
        title
        image {
          url
        }
        description
        tag {
          name
        }
      }
    }
    footer(locale: $locale) {
      header
      copyrightMessage
      contactMeItem {
        title
        link
        icon {
          url
        }
      }
    }
  }
`;
