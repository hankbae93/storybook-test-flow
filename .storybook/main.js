module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions', // Addon has to be registered
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y',
  ],
  features: {
    interactionsDebugger: true, // enable playback controls
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
