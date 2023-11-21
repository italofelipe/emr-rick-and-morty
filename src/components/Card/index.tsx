import { CardContainer, CardTitle, StyledImage as Image } from "./styles";
import { Character } from "@/__generated__/graphql";

type CardsProps = {
  character: Omit<Character, "episode" | "created" | "type" | "__typename">;
};

const Card = ({ character }: CardsProps) => {
  return (
    <CardContainer data-testid="character-card">
      <Image
        alt={character.name!}
        height={200}
        loading="lazy"
        priority={false}
        quality={100}
        src={character.image!}
        width={200}
      />
      <CardTitle>{character.name}</CardTitle>
    </CardContainer>
  );
};

export default Card;
