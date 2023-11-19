import { CardContainer, CardTitle, StyledImage as Image } from "./styles";
import { Character } from "@/__generated__/graphql";

type CardsProps = {
  onClick: () => void;
  character: Omit<Character, "episode" | "created" | "type" | "__typename">;
};

const Card = ({ character, onClick }: CardsProps) => {
  return (
    <CardContainer>
      <CardTitle>{character.name}</CardTitle>
      <Image
        src={character.image!}
        alt={character.name!}
        width={200}
        height={200}
      />
    </CardContainer>
  );
};

export default Card;
