import type { StoryObj, Meta } from "@storybook/html";
import type { ButtonProps } from "../types";
import { createButton } from "./Button";
import { buttonArgTypes } from "../utils";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Button/BorderRadius",
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
        borderRadius: 4,
    },
};

export const Pill: Story = {
    args: {
        ...defaultArgs,
        borderRadius: 50,
    },
};

export const Sharp: Story = {
    args: {
        ...defaultArgs,
        borderRadius: 0,
    },
};
