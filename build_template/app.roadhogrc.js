/**
 * this is app configuration
 */
const path = require('path');
const pxtorem = require('postcss-pxtorem');


const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  // path.resolve(__dirname, 'src/svg/'),  // 业务代码本地私有 svg 存放目录
];

export default {
  entry: 'src/app.js',
  extraBabelPlugins: [
    'transform-runtime',
    [
      'import',
      [
        {
          'libraryName': 'antd-mobile',
          'style': true
        }
      ]
    ],
    "lodash"
  ],
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 100,
      propWhiteList: [],
    })
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
    production: {}
  },
  proxy: {
    "/api": {
      "target": "http://192.168.0.170:8080/"
    },
    "/app" :{
      "target": "http://localhost:8000/",
      "pathRewrite": { "^/app.*$" : "/app.html" }
    }
  },
  multipage: true,
  "theme": "./src/styles/theme.js"
}
