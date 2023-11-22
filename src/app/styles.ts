import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45vw;
  align-self: center;

  p {
    margin-right: 2rem;
  }
  button {
    margin-top: 0;
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    width: 90vw;
    flex-direction: column;
    padding: 1rem;
    justify-content: center;
  }
`;

export {
  Container,
  NotFoundContainer,
  TitleContainer
};