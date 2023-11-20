import styled from "styled-components";


const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  @media screen and (min-width: 375px) and (max-width: 768px) {
  }
`;
const PaginationControl = styled.span`
  margin: 0 1rem;
  cursor: pointer;
  
`;

const PaginationControlsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 1.5rem;
  @media screen and (min-width: 375px) and (max-width: 768px) {
    margin: 0;

  }
`;

const PageNumber = styled.span<{ $isCurrentPage?: boolean }>`
  background-color: ${({ $isCurrentPage }) => $isCurrentPage ? '#97ce4c' : 'white'};
  border-radius: 50%;
  color: ${({ $isCurrentPage }) => $isCurrentPage ? 'white' : 'black'};
  height: 30px;
  padding: 0.3rem 0;
  text-align: center;
  width: 30px;
  cursor: pointer;
`;

const PageNumberList = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  width: 30vw;
  @media screen and (min-width: 375px) and (max-width: 768px) {
    justify-content: center;
    width: 100vw;
  }
`;
export {
  PageNumber,
  PaginationContainer,
  PaginationControl,
  PaginationControlsWrapper,
  PageNumberList,
  Wrapper
};