/**
 * this is web configuration
 */
const publicPath = '/assets/';

export default {
  entry: 'src/index.js',
  extraBabelPlugins: [
    "lodash"
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
    production: {}
  },
  "theme": "./src/styles/theme.js",
  publicPath,
  hash:true,
  define: {publicPath}
}
