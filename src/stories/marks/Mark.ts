import { MarkProps } from "../types";
import { createButtonContainer, getFundingSources } from "../utils";

/**
 * PayPal Marks
 */
export const createMark = ({
  color = "gold",
  height = 24,
  fundingSources = "All Eligible",
}: MarkProps) => {
  const { container, id } = createButtonContainer();

  const src = document.createElement("script");
  const string = document.createTextNode(`
  paypal.Marks({
    color: "${color}",
    height: "${height}",
    ${getFundingSources(fundingSources)}
  }).render('#paypal-container-${id}');`);

  src.appendChild(string);
  container.appendChild(src);
  return container;
};
