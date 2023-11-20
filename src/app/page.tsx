"use client";
import {
  ALL_CHARACTERS_QUERY,
  CHARACTERS_QUERY,
  SEARCH_CHARACTERS_QUERY,
} from "@/graphql/query/characters";
import { CharactersResponse, Info } from "@/types/characters";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import { CardsList } from "@/components/CardsList/styles";
import { Character } from "@/__generated__/graphql";
import Form from "@/components/Form";
import Link from "next/link";
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

  const [fetchCharactersByName] = useLazyQuery<CharactersResponse>(
    SEARCH_CHARACTERS_QUERY,
    {
      onCompleted: (data) => {
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

  const handlePageChange = (page: number) => {
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
        <CardsList>
          {charactersList.map((character) => (
            <Link
              href={{
                pathname: `/character/${character.id}`,
                query: character.name,
                href: `/character/${character.name}`,
              }}
              key={character.id}
            >
              <Card character={character} key={character.id} />
            </Link>
          ))}
        </CardsList>
      );
    }

    return null;
  };

  const handleSearch = (value: string) => {
    setLoading(true);
    fetchCharactersByName({ variables: { filter: { name: value } } });
  };

  return (
    <div>
      <h1>Rick and Morty - EMR Challenge</h1>

      <h2>Characters</h2>
      <Form onSubmit={(value) => handleSearch(value)} />

      {renderContent()}
      <Pagination
        currentPage={currentPage}
        totalPages={requestInfo?.pages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
