import Button from ".";
import { render } from "@testing-library/react";
describe("Button", () => {
  it("should render a button with the provided children", () => {
    const { getByText } = render(
      <Button type="submit" disabled={false}>
        Click me
      </Button>
    );
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("should render a button with the provided type", () => {
    const { container } = render(
      <Button type="submit" disabled={false}>
        Click me
      </Button>
    );
    const button = container.querySelector("button");
    expect(button).toHaveAttribute("type", "submit");
  });

  it("should render a button that is not disabled by default", () => {
    const { container } = render(
      <Button type="submit" disabled={false}>
        Click me
      </Button>
    );
    const button = container.querySelector("button");
    expect(button).not.toHaveAttribute("disabled");
  });
});
