export const parameters = {
  actions: { argTypesRegex: "^on.*" },

  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
