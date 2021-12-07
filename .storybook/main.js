module.exports = {
  stories: ["../src/components/**/*.stories.js"],
  staticDir: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
};
//stories: ["../src/components/**/*.stories.js"],
// module.exports = {
//   stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
//   staticDir: ["../public"],
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/preset-create-react-app",
//     "@storybook/addon-interactions",
//   ],
// };
