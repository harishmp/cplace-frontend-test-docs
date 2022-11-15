import type { StorybookConfig } from '@storybook/core-common';
import { mainConfig } from '../../../.storybook/main';

const config: StorybookConfig = {
  ...mainConfig,
  stories: ['../src/lib/**/*.stories.mdx', '../src/lib/**/*.stories.@(js|jsx|ts|tsx)'],
};
module.exports = config;