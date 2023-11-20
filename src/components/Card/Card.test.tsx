import { render, screen } from "@testing-library/react";
import Card from ".";
import { characterResponseMock } from "@/__mocks__/character";
describe("Card component", () => {
  it("should render card with title and image", () => {
    render(<Card character={characterResponseMock} />);
    const cardTitle = screen.getByText(characterResponseMock.name);
    expect(cardTitle).toBeInTheDocument();

    const cardImage = screen.getByAltText(characterResponseMock.name);
    expect(cardImage).toBeInTheDocument();
    expect(cardImage).toHaveAttribute("src");
  });
});
