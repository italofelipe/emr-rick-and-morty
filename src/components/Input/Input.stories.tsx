import type { Meta, StoryObj } from "@storybook/react";

import Input from ".";

const meta = {
  title: "Input component",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    onChange: {
      type: { name: "function", required: true },
      description: "Function triggered when input value changes.",
    },
    placeholder: {
      defaultValue: "Rick Sanchez",
      description: "Input placeholder text.",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputComponent: Story = {
  args: {
    onChange(value) {
      return value;
    },
    value: "",
    placeholder: "Rick Sanchez",
  },
};
