import { ALL_CHARACTERS_QUERY } from "@/graphql/query/characters";
import Home from "./page";
import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";

describe("Page tests", () => {
  const mocks = [
    {
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
            ],
          },
        },
      },
    },
  ];
  it("Should render the page", async () => {
    const wrapper = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );
    expect(wrapper).toBeTruthy();
  });
});
