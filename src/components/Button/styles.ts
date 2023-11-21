import styled from 'styled-components';

export const StyledButton = styled.button`
  background: linear-gradient(#212121, #6A45A7) padding-box,
              linear-gradient(to right, #00C853, #B2FF59) border-box;
              border: 4px solid transparent;
  border-radius: 50em;
  color: white;
  margin-top: 1.3rem;
  padding: 0.5rem 1rem;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    background: gray;
  }
`;