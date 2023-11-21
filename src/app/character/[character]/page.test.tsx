import { CHARACTER_DETAILS_QUERY } from "@/graphql/query/character";
import Character from "./page";
import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";

describe("Character", () => {
  const selectedCharacterMock = [
    {
      delay: 10,
      request: {
        query: CHARACTER_DETAILS_QUERY,
      },
      result: {
        data: {
          character: {
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
            name: "Beth Smith",
            species: "Human",
            status: "Alive",
            origin: {
              dimension: "Replacement Dimension",
              name: "Earth (Replacement Dimension)",
              created: "2017-11-18T19:33:01.173Z",
            },
            location: {
              dimension: "Replacement Dimension",
              id: "20",
              name: "Earth (Replacement Dimension)",
              type: "Planet",
            },
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
  it("should render character page", () => {
    const wrapper = render(
      <MockedProvider mocks={selectedCharacterMock} addTypename={false}>
        <Character params={{ character: "Rick" }} />
      </MockedProvider>
    );

    expect(wrapper).toBeTruthy();
  });
});
