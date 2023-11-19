import type { Meta, StoryObj } from "@storybook/react";
import Form from ".";

const meta = {
  title: "Form",
  component: Form,
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormComponent: Story = {
  args: {
    onSubmit(value) {
      return value;
    },
  },
};
