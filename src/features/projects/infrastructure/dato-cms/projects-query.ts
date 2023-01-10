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
