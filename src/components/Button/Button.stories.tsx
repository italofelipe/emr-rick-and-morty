import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

const meta = {
  title: "Button component",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: {
      defaultValue: "Click me",
      description: "Button text or text with icons, symbols, etc.",
    },
    disabled: {
      defaultValue: false,
      description: "Disable the button if set to true.",
    },
    type: {
      defaultValue: "submit",
      description: "Button type.",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonComponent: Story = {
  args: {
    children: "Click me",
    disabled: false,
    type: "submit",
  },
};
