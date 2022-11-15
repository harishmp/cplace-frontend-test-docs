import { getStorybookConfig } from '@cplace-next/cf-frontend-sdk/src/lib/utils/storybook';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { resolve } from 'path';

const tsPathsPlugin = new TsconfigPathsPlugin({
  configFile: resolve(process.cwd(), './tsconfig.base.json'),
});

export const mainConfig = getStorybookConfig([], {
  resolve: {
    plugins: [tsPathsPlugin],
  },
});