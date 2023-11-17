import { Character } from "@/__generated__/graphql";

export type CharactersResponse = {
  characters: {
    info: Info;
    results: Character[];
  };
};


export type Info = {
  count: number;
  next: number
  pages: number;
  prev: number | null
}