const publicPath = '/';

export default {
  "entry": "src/page/*.js",
  "extraBabelPlugins": [
    [
      "import",
      {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": true
      }
    ],
    [
      "import",
      {
        "libraryName": "antd-mobile",
        "libraryDirectory": "es",
        "style": true
      },
      "antd-mobile-import"
    ],
    "lodash"
  ],
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr"
      ]
    }
  },
  "proxy": {
    // "/api": {
    //   "target": "http://localhost:8080/"
    // },
    "/app": {
      "target": "http://localhost:8000/",
      "pathRewrite": {"^/app.*$": "/app.html"}
    }
  },
  "theme": "./src/styles/theme.js",
  publicPath,
  // hash: true,
  // html: {
  //   "template": "./src/index.ejs"
  // },
  define: {publicPath},
  es5ImcompatibleVersions: true
}
