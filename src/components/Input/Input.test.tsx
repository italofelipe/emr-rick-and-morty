import { render, screen } from "@testing-library/react";
import Input from ".";
describe("Input", () => {
  it("should render an input element with the correct props", () => {
    const onChange = jest.fn();
    const value = "test value";
    const placeholder = "test placeholder";
    const otherProps = { id: "test-id" };

    render(
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...otherProps}
      />
    );

    const inputElement = screen.getByRole("textbox");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toHaveValue(value);
    expect(inputElement).toHaveAttribute("placeholder", placeholder);
    expect(inputElement).toHaveAttribute("id", otherProps.id);
  });
});
