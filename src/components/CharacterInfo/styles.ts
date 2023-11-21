import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 30vw;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
`;

const InfoLabel = styled.span`
  font-weight: bold;
`;

const InfoValue = styled.span`
  color: #555;
  text-align: right;
`;

const CharacterImage = styled(Image)`
  width: fit-content;
  height: 100%;
`;
export {
  CharacterImage,
  Container,
  InfoRow,
  InfoLabel,
  InfoValue
};
