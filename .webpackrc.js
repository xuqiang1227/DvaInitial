const publicPath = '/';

export default {
  "entry": "src/index.js",
  "extraBabelPlugins": [
    [
      "import",
      {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": true
      }
    ]
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
  define: {publicPath}
}