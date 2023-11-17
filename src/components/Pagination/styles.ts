import styled from "styled-components";


const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const PaginationControl = styled.span`
  margin: 0 1rem;
  color
  &:hover {
    cursor: pointer;
  }
`;

const PaginationControlsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 1.5rem;
`;

const PageNumber = styled.span<{ $isCurrentPage?: boolean }>`
  background-color: ${({ $isCurrentPage }) => $isCurrentPage ? '#97ce4c' : 'white'};
  border-radius: 50%;
  color: ${({ $isCurrentPage }) => $isCurrentPage ? 'white' : 'black'};
  height: 30px;
  padding: 1%;
  text-align: center;
  width: 30px;
`;

const PageNumberWrapper = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  width: 30vw;
`;
export {
  PageNumber,
  PaginationContainer,
  PaginationControl,
  PaginationControlsWrapper,
  PageNumberWrapper,
  Wrapper
};