const { merge } = require('webpack-merge');
const { getConfig } = require('@cplace-next/cf-frontend-sdk/src/lib/utils/webpack');

module.exports = (config) => {
  const appName = 'cf_docs_test';
  const sharedLibraries = ['@cplace-next/cf-frontend-sdk'];
  return merge(config, getConfig(config.mode, appName, sharedLibraries));
};