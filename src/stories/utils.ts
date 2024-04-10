import { FundingSources } from "./types";

export const buttonArgTypes = {
  color: {
    defaultValue: "gold",
    control: { type: "select" },
    options: ["gold", "white", "blue", "black", "silver"],
    table: { category: "Props" },
  },
  label: {
    defaultValue: "paypal",
    control: { type: "select" },
    options: ["paypal", "checkout", "buynow", "pay", "installment"],
    table: { category: "Props" },
  },
  shape: {
    defaultValue: "rect",
    control: { type: "select" },
    options: ["rect", "pill", "sharp"],
    table: { category: "Props" },
  },
  layout: {
    defaultValue: "vertical",
    control: { type: "select" },
    options: ["horizontal", "vertical"],
    table: { category: "Props" },
  },
  tagline: {
    defaultValue: false,
    control: { type: "boolean" },
    table: { category: "Props" },
  },
  disableMaxWidth: {
    defaultValue: false,
    control: { type: "boolean" },
    table: { category: "Props" },
  },
  disableMaxHeight: {
    defaultValue: false,
    control: { type: "boolean" },
    table: { category: "Props" },
  },
  fundingSources: {
    defaultValue: "PayPal",
    control: { type: "select" },
    options: ["PayPal", "Card", "Credit", "All Eligible"],
    table: { category: "Props" },
  },
  height: {
    control: {
      type: "range",
      min: 24,
      max: 200,
      step: 1,
    },
    table: { category: "Props" },
  },
  containerWidth: {
    name: " Container Width",
    control: {
      type: "range",
      min: 100,
      max: 1000,
      step: 5,
    },
    table: { category: "Button Container" },
  },
  containerHeight: {
    name: "Container Height",
    control: {
      type: "range",
      min: 24,
      max: 200,
      step: 5,
    },
    table: { category: "Button Container" },
  },
  borderRadius: {
    control: {
      type: "number",
    },
    table: { category: "Props" },
  },
};

export const markArgTypes = {
  color: {
    defaultValue: "gold",
    control: { type: "select" },
    options: ["gold", "white"],
  },
  height: {
    control: {
      type: "range",
      min: 1,
      max: 30,
      step: 3,
    },
  },
  fundingSources: {
    defaultValue: "PayPal",
    control: { type: "select" },
    options: ["PayPal", "Card", "Credit", "All Eligible"],
  },
};

export const cardFieldArgTypes = {
  width: {
    control: {
      type: "range",
      min: 100,
      max: 1000,
      step: 5,
    },
    table: { category: "Card Field Container" },
  },
};

function getRandomInt() {
  return Math.floor(Math.random() * 1000);
}

export const createButtonContainer = () => {
  const id = getRandomInt();
  const container = document.createElement("div");
  container.setAttribute("id", `paypal-container-${id}`);
  container.style.width = "100%";

  return { container, id };
};

export const createCardFieldContainer = () => {
  const id = getRandomInt();
  const container = document.createElement("div");
  container.setAttribute("id", `paypal-container-${id}`);

  const nameField = document.createElement("div");
  nameField.id = `card-name-field-container-${id}`;

  const numberField = document.createElement("div");
  numberField.id = `card-number-field-container-${id}`;

  const expiryField = document.createElement("div");
  expiryField.id = `card-expiry-field-container-${id}`;

  const cvvField = document.createElement("div");
  cvvField.id = `card-cvv-field-container-${id}`;

  container.appendChild(nameField);
  container.appendChild(numberField);
  container.appendChild(expiryField);
  container.appendChild(cvvField);

  return { container, id };
};

export function getFundingSources(source: FundingSources) {
  if (source === "All Eligible") {
    return "";
  } else if (source === "PayPal") {
    return `fundingSource: paypal.FUNDING.PAYPAL`;
  } else if (source === "Card") {
    return `fundingSource: paypal.FUNDING.CARD`;
  } else if (source === "Credit") {
    return `fundingSource: paypal.FUNDING.CREDIT`;
  }

  return "";
}
