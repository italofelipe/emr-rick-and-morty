import { fireEvent, render, screen } from "@testing-library/react";
import Pagination from ".";

describe("Pagination", () => {
  it("should render correctly", () => {
    const currentPage = 1;
    const totalPages = 10;
    const onPageChange = jest.fn();
    const wrapper = render(
      <Pagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalPages={totalPages}
      />
    );
    expect(wrapper).toBeTruthy();
  });

  it("should update the current when a page number is clicked", () => {
    const currentPage = 1;
    const totalPages = 10;
    const onPageChange = jest.fn();
    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    );
    const pageNumbers = screen.getAllByTestId("page-number");

    fireEvent.click(pageNumbers[2]);

    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it('should decrement the current page when "Previous" button is clicked', () => {
    const currentPage = 3;
    const totalPages = 10;
    const onPageChange = jest.fn();
    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    );
    const previousButton = screen.getByText("Anterior");

    fireEvent.click(previousButton);

    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it('should increment the current page when "Next" button is clicked', () => {
    const currentPage = 3;
    const totalPages = 10;
    const onPageChange = jest.fn();
    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    );
    const nextButton = screen.getByText("Próxima");

    fireEvent.click(nextButton);

    expect(onPageChange).toHaveBeenCalledWith(4);
  });
  it("should display ellipsis (...) when there are more than 3 pages and the current page is not near the beginning or end", () => {
    const currentPage = 2;
    const totalPages = 10;
    const onPageChange = jest.fn();
    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    );

    expect(screen.getByText("...")).toBeInTheDocument();
  });

  it("should display the correct page numbers when there is only one page", () => {
    const currentPage = 1;
    const totalPages = 1;
    const onPageChange = jest.fn();
    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    );

    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
