import { Character } from "@/__generated__/graphql";

export type CharactersResponse = {
  characters: {
    results: Character[];
  };
};
 