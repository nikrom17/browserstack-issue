import type { StoryObj, Meta } from "@storybook/html";
import { createButton } from "./Button";
import { buttonArgTypes } from "../utils";
import { ButtonProps } from "../types";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Button/Shape",
  tags: ["autodocs"],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createButton(args);
  },
  argTypes: buttonArgTypes,
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

const defaultArgs: ButtonProps = {
  color: "gold",
  layout: "horizontal",
  label: "paypal",
  shape: "rect",
  tagline: false,
  fundingSources: "All Eligible",
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Rect: Story = {
  args: {
    ...defaultArgs,
  },
};

export const Pill: Story = {
  args: {
    ...defaultArgs,
    shape: "pill",
  },
};

export const Sharp: Story = {
  args: {
    ...defaultArgs,
    shape: "sharp",
  },
};
