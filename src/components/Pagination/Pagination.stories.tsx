import type { Meta, StoryObj } from "@storybook/react";

import Pagination from ".";

const meta = {
  title: "Pagination Component",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    currentPage: {
      description: "Current page number",
      control: {
        type: "number",
      },
    },
    totalPages: {
      description: "Total number of pages",
      control: {
        type: "number",
      },
    },
    onPageChange: {
      description: "Function to handle page change",
      control: {
        type: "function",
      },
    },
  },
} satisfies Meta<typeof Pagination>;

type Story = StoryObj<typeof Pagination>;
export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 50,
  },
};

export default meta;
