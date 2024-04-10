import type { StoryObj, Meta } from "@storybook/html";
import { createMark } from "./Mark";
import { markArgTypes } from "../utils";
import { MarkProps } from "../types";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Mark/Size",
  tags: ["autodocs"],
  render: (args) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createMark(args);
  },
  argTypes: markArgTypes,
} satisfies Meta<MarkProps>;

export default meta;
type Story = StoryObj<MarkProps>;

const defaultArgs: MarkProps = {
  color: "gold",
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const Small: Story = {
  args: {
    ...defaultArgs,
    height: 20,
  },
};
