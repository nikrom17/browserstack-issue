export type FundingSources = "PayPal" | "Card" | "Credit" | "All Eligible";

export interface ButtonProps {
  /**
   * Set the style.layout option to determine the button layout when multiple buttons are available:
   */
  layout?: "vertical" | "horizontal";
  /**
   * Set the style.color option to change the color of the PayPal button
   */
  color?: "gold" | "white" | "blue" | "black" | "silver";
  /**
   * Add the tagline to the button
   */
  tagline?: boolean;
  /**
   * Add a label to the button
   */
  label: "paypal" | "checkout" | "buynow" | "pay";
  /**
   * Optional click handler
   */
  shape?: "rect" | "pill" | "sharp";
  /**
   * Funding sources to render
   */
  fundingSources?: FundingSources;
  /**
   * Height of the button
   */
  height?: number;
  containerHeight?: number;
  containerWidth?: number;
  disableMaxWidth?: boolean;
  disableMaxHeight?: boolean;
  borderRadius?: number;
  /**
   * Allows you to pass anything into the styles to test
   * edge cases and error handling.
   */
  styleOverrides?: { [key: string]: any };
}

export interface MarkProps {
  /**
   * Set the style.color option to change the color of the PayPal Mark
   */
  color?: "gold" | "white";
  /**
   * Set the style.height of the mark to change its height. It always maintains a 1:1.5 height:width ratio
   */
  height?: number;
  /**
   * Funding sources to render
   */
  fundingSources?: FundingSources;
}

export interface CardFieldProps {
  width?: number;
}
