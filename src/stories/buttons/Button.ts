import { ButtonProps } from "../types";
import { createButtonContainer, getFundingSources } from "../utils";

/**
 * Primary UI component for user interaction
 */
export const createButton = ({
  color = "gold",
  layout = "horizontal",
  tagline = false,
  label = "paypal",
  shape = "rect",
  fundingSources = "PayPal",
  containerHeight,
  height,
  containerWidth,
  disableMaxWidth,
  disableMaxHeight,
  borderRadius,
  styleOverrides,
}: ButtonProps) => {
  const { container, id } = createButtonContainer();
  container.style.width = `${containerWidth}px`;
  container.style.height = `${containerHeight}px`;

  const styles = {
    layout,
    color,
    shape,
    label,
    tagline,
    height,
    disableMaxWidth,
    disableMaxHeight,
    borderRadius,
    ...styleOverrides,
  };

  const scriptTag = document.createElement("script");
  const scriptString = document.createTextNode(`
  paypal.Buttons({
    style: ${JSON.stringify(styles)},
    ${getFundingSources(fundingSources)}
  }).render('#paypal-container-${id}');`);

  scriptTag.appendChild(scriptString);
  container.appendChild(scriptTag);

  return container;
};
