import { Container, InfoLabel, InfoRow, InfoValue } from "./styles";
import { CharacterInfoProps } from "./types";
import Image from "next/image";

const CharacterInfo = ({
  gender,
  image,
  location,
  name,
  origin,
  species,
  status,
}: CharacterInfoProps) => {
  return (
    <Container>
      <h1>{name}&apos; Info</h1>
      <Image
        alt={name!}
        height={200}
        loading="lazy"
        priority={false}
        quality={100}
        src={image!}
        width={200}
      />
      <InfoRow>
        <InfoLabel>Nome:</InfoLabel>
        <InfoValue>{name}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>Gênero:</InfoLabel>
        <InfoValue>{gender}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>Origem:</InfoLabel>
        <InfoValue>{origin?.dimension}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>Localização:</InfoLabel>
        <InfoValue>{location?.name}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>Espécie:</InfoLabel>
        <InfoValue>{species}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>Status:</InfoLabel>
        <InfoValue>{status}</InfoValue>
      </InfoRow>
    </Container>
  );
};

export default CharacterInfo;
