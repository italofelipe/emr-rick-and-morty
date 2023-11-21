"use client";
import { CharacterResponse, CharacterVariables } from "@/types/character";
import { useEffect, useState } from "react";
import { CHARACTER_DETAILS_QUERY } from "@/graphql/query/character";
import { Character } from "@/__generated__/graphql";
import CharacterInfo from "@/components/CharacterInfo";
import { Container } from "./styles";
import Image from "next/image";
import Link from "next/link";
import gif from "../../../../assets/loading-gif-1.gif";
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
    <Container>
      <Link data-testid="back-button" href="/">
        Voltar
      </Link>

      {loading ? (
        <Image
          alt="Rick and Morty Portal gif while the page loads"
          src={gif}
          width={200}
          height={200}
        />
      ) : (
        <CharacterInfo
          image={character?.image!}
          location={character?.location}
          name={character?.name || ""}
          origin={character?.origin}
          species={character?.species}
          status={character?.status}
          gender={character?.gender}
        />
      )}
      {error && <p>Erro ao carregar o personagem</p>}
    </Container>
  );
};
export default CharacterPage;
