import type { Meta, StoryObj } from "@storybook/react";
import Card from ".";
import { characterResponseMock } from "../../__mocks__/character";

const meta = {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    character: "Describes all the character's information",
    onClick: "Function to handle click. It redirects to the character's page",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardComponent: Story = {
  args: {
    character: characterResponseMock,
  },
  parameters: {
    character: characterResponseMock,
  },
};
