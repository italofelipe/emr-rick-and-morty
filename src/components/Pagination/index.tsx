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
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const isCurrentPage = (page: number): boolean => {
    return currentPage === page;
  };

  const isFirstPage = (currentPage: number): boolean => {
    return currentPage === 1;
  };

  const isLastPage = (currentPage: number, totalPages: number): boolean => {
    return currentPage === totalPages;
  };

  const renderAdjacentPages = () => {
    const adjacentPages = [];
    const maxAdjacentPages = 2;

    const start =
      currentPage - maxAdjacentPages > 0 ? currentPage - maxAdjacentPages : 1;
    const end =
      currentPage + maxAdjacentPages <= totalPages
        ? currentPage + maxAdjacentPages
        : totalPages;

    for (let i = start; i <= end; i++) {
      adjacentPages.push(
        <S.PageNumber
          $isCurrentPage={isCurrentPage(i)}
          key={i}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </S.PageNumber>
      );
    }

    return adjacentPages;
  };

  return (
    <S.PaginationContainer>
      <S.Wrapper>
        {!isFirstPage(currentPage) && (
          <>
            <S.PaginationControlsWrapper>
              <S.PaginationControl onClick={() => handlePageChange(1)}>
                Primeira
              </S.PaginationControl>

              <S.PaginationControl
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Anterior
              </S.PaginationControl>
            </S.PaginationControlsWrapper>
          </>
        )}
        <S.PageNumberWrapper>{renderAdjacentPages()}</S.PageNumberWrapper>

        {!isLastPage(currentPage, totalPages) && (
          <S.PaginationControlsWrapper>
            <S.PaginationControl
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Próxima
            </S.PaginationControl>
            <S.PaginationControl onClick={() => handlePageChange(totalPages)}>
              Ultima
            </S.PaginationControl>
          </S.PaginationControlsWrapper>
        )}
      </S.Wrapper>
    </S.PaginationContainer>
  );
};

export default Pagination;
