const _ = require('lodash')
const getEntries = require('roadhog/lib/utils/getEntry').default

module.exports = function (webpackConfig, env) {

  for (let index in webpackConfig.plugins) {
    let plugin = webpackConfig.plugins[index]


    // 增加多页面
    if (plugin.constructor.name == 'HtmlWebpackPlugin') {
      const entries = getEntries(webpackConfig)
      if (Object.keys(entries).length > 1) { // 多页面下处理多html入口
        webpackConfig.plugins.splice(index, 1) // 删除旧插件
        for (let name in entries) {
          const newPlugin = _.cloneDeep(plugin)
          newPlugin.options.filename = name + '.html'
          newPlugin.options.chunks = [name]
          webpackConfig.plugins.splice(index, 0, newPlugin) // 在原先的旧插件位置插入
        }
      }

      break
    }
  }
  return webpackConfig;
}
