import { gql } from "graphql-request";

export const PROJECTS_PAGE_QUERY = gql`
  query ($locale: SiteLocale) {
    projectContent(locale: $locale) {
      header
      projects {
        title
        slug
        image {
          url
        }
        content
        tag {
          name
        }
      }
    }
  }
`;

export const PROJECT_PAGE_CONTENT_QUERY = gql`
  query ($locale: SiteLocale) {
    projectContent(locale: $locale) {
      header
    }
  }
`;

export const ALL_PROJECTS_QUERY = gql`
  query ($locale: SiteLocale) {
    projectContent(locale: $locale) {
      projects {
        title
        slug
        image {
          url
        }
        content
        tag {
          name
        }
      }
    }
  }
`;
