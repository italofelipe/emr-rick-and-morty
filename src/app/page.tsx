/* eslint-disable no-console */
"use client";
import {
  ALL_CHARACTERS_QUERY,
  CHARACTERS_QUERY,
} from "@/graphql/query/characters";
import { CharactersResponse, Info } from "@/types/characters";
import { useEffect, useState } from "react";
import { Character } from "@/__generated__/graphql";
import Pagination from "@/components/Pagination";

import { useLazyQuery } from "@apollo/client";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersList, setCharactersList] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [requestInfo, setRequestInfo] = useState<Info>({
    count: 1,
    pages: 1,
    next: 2,
    prev: null,
  });
  const [error, setError] = useState(false);

  const [fetchAllCharacters] = useLazyQuery<CharactersResponse>(
    ALL_CHARACTERS_QUERY,
    {
      onCompleted: (data) => {
        console.log("Data", data);
        setCharactersList(data.characters.results);
        setRequestInfo(data.characters.info);
        setLoading(false);
      },
      onError: () => {
        setLoading(false);
        setError(true);
      },
    }
  );

  const [fetchCharactersByPage] = useLazyQuery<CharactersResponse>(
    CHARACTERS_QUERY,
    {
      onCompleted: (data) => {
        console.log("Data", data);
        setCharactersList(data.characters.results);
        setRequestInfo(data.characters.info);
        setLoading(false);
      },
      onError: () => {
        setLoading(false);
        setError(true);
      },
      variables: { page: currentPage },
    }
  );

  const handlePageChange = (page: number) => {
    console.log("Clicadoo", page);
    setCurrentPage(page);
    setLoading(true);
    fetchCharactersByPage({ variables: { page } });
  };

  useEffect(() => {
    setLoading(true);
    fetchAllCharacters();
  }, [fetchAllCharacters]);

  const renderContent = () => {
    if (loading) {
      return <p>Carregando...</p>;
    }

    if (error) {
      return <p>Ocorreu um erro ao carregar os dados.</p>;
    }

    if (charactersList.length > 0) {
      return (
        <ul>
          {charactersList.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      );
    }

    return null;
  };

  return (
    <div>
      <h1>Rick and Morty - EMR Challenge</h1>

      <h2>Characters</h2>

      {renderContent()}
      <Pagination
        currentPage={requestInfo.next - 1}
        totalPages={requestInfo?.pages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
