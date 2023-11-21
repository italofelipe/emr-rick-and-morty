import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ALL_CHARACTERS_QUERY } from "@/graphql/query/characters";
import Home from "./page";
import { MockedProvider } from "@apollo/client/testing";

describe("Page tests", () => {
  const allCharactersMocks = [
    {
      delay: 10,
      request: {
        query: ALL_CHARACTERS_QUERY,
      },
      result: {
        data: {
          characters: {
            results: [
              {
                id: "1",
                name: "Rick Sanchez",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              },
              {
                id: 2,
                name: "Morty Smith",
                species: "Human",
                gender: "Male",
                image: "https://rickandmortyapi.com/api/character/2",
              },
            ],
          },
        },
      },
      info: {
        count: 2,
        pages: 1,
        next: null,
        prev: null,
      },
    },
  ];
  it("Should render the page", async () => {
    const wrapper = render(
      <MockedProvider mocks={allCharactersMocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );
    expect(wrapper).toBeTruthy();
  });

  it("should call fetchCharactersByName and see loading text", async () => {
    const { getByLabelText, getByText } = render(
      <MockedProvider mocks={allCharactersMocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );
    const input = getByLabelText("Nome do personagem");
    const button = getByText("Procurar");
    const inputValue = "Rick Sanchez";

    fireEvent.change(input, { target: { value: inputValue } });
    fireEvent.click(button);

    const loadingText = screen.getByText(/carregando\.\.\./i);

    expect(loadingText).toBeInTheDocument();
  });
});
