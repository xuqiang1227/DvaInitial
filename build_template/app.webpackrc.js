/**
 * this is app configuration
 */
const publicPath = '/assets/';


export default {
  entry: 'src/app.js',
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
  define: {publicPath}
}
