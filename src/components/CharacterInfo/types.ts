import { Character } from "@/__generated__/graphql";

export type CharacterInfoProps = {
  gender: Character["gender"],
  image: string,
  name: string,
  species: Character["species"],
  status: Character["status"],
  origin: Character["origin"],
  location: Character["location"]
}