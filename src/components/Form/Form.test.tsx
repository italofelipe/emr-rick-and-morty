import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";
describe("Form", () => {
  it("should render form with input and submit button", () => {
    const wrapper = render(<Form onSubmit={() => {}} />);
    expect(wrapper.getByRole("textbox")).toBeInTheDocument();
    expect(
      wrapper.getByRole("button", { name: /procurar/i })
    ).toBeInTheDocument();
  });

  it("should call onSubmit function when submit button is clicked", () => {
    const onSubmit = jest.fn();
    const wrapper = render(<Form onSubmit={onSubmit} />);
    const input = wrapper.getByRole("textbox");
    const button = wrapper.getByRole("button", { name: /procurar/i });
    fireEvent.change(input, { target: { value: "Rick" } });
    button.click();
    expect(onSubmit).toHaveBeenCalledWith("Rick");
  });

  it("should not call onSubmit function when input value is empty", () => {
    const onSubmit = jest.fn();
    const wrapper = render(<Form onSubmit={onSubmit} />);
    const button = wrapper.getByRole("button", { name: /procurar/i });
    button.click();
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
