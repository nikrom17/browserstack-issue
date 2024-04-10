import type { Preview } from "@storybook/html";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "Button",
          [
            "Layout",
            "Color",
            "Shape",
            "Size",
            "Label",
            "Tagline",
            "FundingSources",
          ],
          "Mark",
          ["Color", "Size"],
        ],
      },
    },
  },
  globalTypes: {
    locale: {
      description: "Internationalization locale",
      defaultValue: "en",
      toolbar: {
        icon: "globe",
        items: [
          { value: "en", right: "🇺🇸", title: "English" },
          { value: "fr", right: "🇫🇷", title: "Français" },
          { value: "es", right: "🇪🇸", title: "Español" },
          { value: "zh", right: "🇨🇳", title: "中文" },
          { value: "kr", right: "🇰🇷", title: "한국어" },
        ],
      },
    },
  },
};

export default preview;
