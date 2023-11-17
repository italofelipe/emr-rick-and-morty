import { gql } from "@apollo/client";

export const CHARACTERS_QUERY = gql`
  query characters($page: Int!, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`;


export const ALL_CHARACTERS_QUERY = gql`
  query characters {
    characters {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`;

export const SEARCH_CHARACTERS_QUERY = gql`
  query characters($filter: FilterCharacter) {
    characters(filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`;
