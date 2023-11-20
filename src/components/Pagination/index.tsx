import * as S from "./styles";
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const itemsPerPage = 20;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const displayPages = 3;

  let startPage = 1;
  let endPage = totalPages;
  const isLastPage = currentPage === totalPages;

  if (totalPages > displayPages) {
    const middleIndex = Math.floor(displayPages / 2);
    if (currentPage > middleIndex) {
      startPage = currentPage - (middleIndex - 1);
      endPage = currentPage + middleIndex;

      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = totalPages - displayPages + 1;
      }
    } else {
      endPage = displayPages;
    }
  }

  const numbers = [...Array(endPage - startPage + 1).keys()].map(
    (num) => num + startPage
  );

  const handlePreviousPage = () => {
    if (currentPage !== firstIndex) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage !== lastIndex) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <S.PaginationContainer>
      <S.Wrapper>
        <S.PageNumberList>
          {startPage !== 1 && (
            <S.PaginationControlsWrapper>
              <S.PaginationControl onClick={handlePreviousPage}>
                Previous
              </S.PaginationControl>
            </S.PaginationControlsWrapper>
          )}

          {startPage > 1 && (
            <>
              <S.PageNumber onClick={() => onPageChange(1)}>1</S.PageNumber>
              {startPage > 2 && <span>...</span>}
            </>
          )}
          {numbers.map((number) => (
            <S.PageNumber
              data-testid="page-number"
              key={number}
              onClick={() => onPageChange(number)}
              $isCurrentPage={number === currentPage}
            >
              {number}
            </S.PageNumber>
          ))}
          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && <span>...</span>}
              <S.PageNumber onClick={() => onPageChange(totalPages)}>
                {totalPages}
              </S.PageNumber>
            </>
          )}
        </S.PageNumberList>
        {!isLastPage && (
          <S.PaginationControlsWrapper>
            <S.PaginationControl onClick={handleNextPage}>
              Next
            </S.PaginationControl>
          </S.PaginationControlsWrapper>
        )}
      </S.Wrapper>
    </S.PaginationContainer>
  );
};

export default Pagination;
