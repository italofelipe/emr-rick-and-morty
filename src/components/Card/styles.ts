import Image from "next/image";
import styled from "styled-components";


const CardTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  text-align: center;
`;

const CardContainer = styled.div`
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  border-radius: 0.4rem;
  

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  border-radius: 0.4rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  
  @media screen and (min-width: 375px) and (max-width: 576px) {
    width: 90vw;
    img {
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (min-width: 1024px) {
    overflow: hidden;
    transition: background-image 0.3s ease;
    &:hover {
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 1;
    }

    &:hover::before {
      opacity: 1;
    }

    ${CardTitle} {
      margin: 0;
      padding: 1rem;
      color: #fff;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transform: translateY(100%);
      transition: transform 0.3s ease;
    }

    &:hover ${CardTitle} {
      transform: translateY(0);
    }
  }
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