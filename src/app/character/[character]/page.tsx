"use client";
import { CharacterResponse, CharacterVariables } from "@/types/character";
import { useEffect, useState } from "react";
import { CHARACTER_DETAILS_QUERY } from "@/graphql/query/character";
import { Character } from "@/__generated__/graphql";
import Image from "next/image";
import { useLazyQuery } from "@apollo/client";

type PageParams = {
  params: {
    character: string;
  };
};
const CharacterPage = ({ params }: PageParams) => {
  const [character, setCharacter] = useState<Character>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [fetchCharactersByPage] = useLazyQuery<
    CharacterResponse,
    CharacterVariables
  >(CHARACTER_DETAILS_QUERY, {
    onCompleted: (data) => {
      console.log("Data do detalhes", data);
      setCharacter(data.character);

      setLoading(false);
    },
    onError: () => {
      setLoading(false);
      setError(true);
    },
    variables: { id: params.character },
  });
  useEffect(() => {
    setLoading(true);
    fetchCharactersByPage();
  }, [fetchCharactersByPage]);
  return (
    <div>
      {character && (
        <div>
          <h1>{character.name}</h1>
          <Image
            src={character.image!}
            alt={character.name!}
            width={200}
            height={200}
          />
        </div>
      )}
    </div>
  );
};
export default CharacterPage;
