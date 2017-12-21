const path = require('path');
const pxtorem = require('postcss-pxtorem');
const publicPath = '/';

const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  // path.resolve(__dirname, 'src/svg/'),  // 业务代码本地私有 svg 存放目录
  require.resolve('antd').replace(/index\.js$/, ''),
];

export default {
  "entry": ["src/index.js", "src/app.js"],
  extraBabelPlugins: [
    'transform-runtime',
    [
      'import',
      [
        {
          'libraryName': 'antd',
          'style': true,
        },
        {
          'libraryName': 'antd-mobile',
          'style': true
        }
      ]
    ],
    "lodash"
  ],
  //extraPostCSSPlugins: [
  //  pxtorem({
  //    rootValue: 100,
  //    propWhiteList: [],
  //  })
  // ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
    production: {
    }
  },
  "proxy": {
    "/api": {
      "target": "http://localhost:8080/"
    },
    "/app" :{
      "target": "http://localhost:8000/",
      "pathRewrite": { "^/app.*$" : "/app.html" }
    }
  },
  svgSpriteLoaderDirs: svgSpriteDirs,
  "theme": "./src/styles/theme.js",
  publicPath,
  define: {publicPath}
}
