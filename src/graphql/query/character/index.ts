import { gql } from "@apollo/client";

export const CHARACTER_DETAILS_QUERY = gql`
  query character($id: ID!) {
    character(id: $id) {
      gender
      image
      name
      species
      status
      type
   
    }
  }
`;