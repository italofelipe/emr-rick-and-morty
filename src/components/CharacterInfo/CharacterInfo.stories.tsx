import type { Meta, StoryObj } from "@storybook/react";
import CharacterInfo from ".";

const meta = {
  title: "CharacterInfo",
  component: CharacterInfo,
  tags: ["autodocs"],
} satisfies Meta<typeof CharacterInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CharacterInfoComponent: Story = {
  args: {
    gender: "male",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    location: {
      name: "Earth (Replacement Dimension)",
    },
    name: "Rick Sanchez",
    origin: {
      name: "Earth",
    },
    species: "Human",
    status: "Alive",
  },
};
