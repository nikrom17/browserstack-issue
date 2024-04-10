import type { StoryObj, Meta } from "@storybook/html";
import { createButton } from "./Button";
import { buttonArgTypes } from "../utils";
import { ButtonProps } from "../types";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Button/Size",
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
  fundingSources: "PayPal",
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Large: Story = {
  args: {
    ...defaultArgs,
    containerWidth: 500,
  },
};

export const Medium: Story = {
  args: {
    ...defaultArgs,
    containerWidth: 200,
  },
};

export const Small: Story = {
  args: {
    ...defaultArgs,
    containerWidth: 150,
  },
};

const disableMaxHeight: Story = {
  args: {
    ...defaultArgs,
    label: "checkout",
    disableMaxHeight: true,
    containerHeight: 100,
  },
};

disableMaxHeight.name = "disableMaxHeight";

export { disableMaxHeight };
