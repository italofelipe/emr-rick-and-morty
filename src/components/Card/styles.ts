import Image from "next/image";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  padding: 1rem;
  width: 20vw;
  height: 30vh;
  border-radius: 1rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  background-color: #A5D549;
`;

const CardTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  text-align: center;
`;

const CharacterAttributes = styled.p`
  font-size: 1rem;
  margin: 0;
  padding: 0.5rem 0;
`;

const StyledImage = styled(Image)`
  width: fit-content;
  height: 100%;
`;

export { CardContainer, CharacterAttributes, CardTitle, StyledImage };