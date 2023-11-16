"use client";
import { CHARACTERS_QUERY } from "@/graphql/query/characters";
import { CharactersResponse } from "@/types/characters";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const Home = () => {
  const { data } = useSuspenseQuery<CharactersResponse>(CHARACTERS_QUERY, {
    variables: { page: 1 },
  });
  console.log("Dados", data.characters.results);

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};

export default Home;
