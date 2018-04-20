## DvaInitial
> 基于Dva，Antd的一个初始化工程。包含国际化、多页入口、移动设备的高清处理、兼容性等问题。
## 内容介绍
- React + Dva + Roadhog
- antd layout
- react-intl
## 使用方式
```
npm i
npm start
````
### Loading的使用
  默认情况会在每一次effects中添加loading，如果在某次effect时，不需要loading时，如下操作：
  ```
    dispatch({type: 'layout/setState', payload: {loading: false}});
    dispatch(/* your effects */).then(() => dispatch({type: 'layout/setState', payload: {loading: true}}));
  ```
## 移动设备高清开发
需要在roadhog中打开 extraPostCSSPlugins
## 打包方式
* 只有pc端
```
npm run build
```
* 移动设备高清
```
npm run dist
```

# 打包配置publicPath
* 修改roadhog.js中的publicPath
* nginx配置
* 例如：publicPath配置为 /assets/
```(javascript)
  server {
    listen 8009;
    erver_name localhost;
    location /assets {
      alias html/visitor;
      #root  html/visitor;
      index  index.html index.htm;
      try_files $uri $uri/ /assets/index.html;
    }
    location /assets/main {
      alias html/visitor;
      #root   html/visitor;
      index  index.html index.htm;
      try_files $uri $uri /assets/index.html;
    }
    location /api/ {
      proxy_pass   http://192.168.0.19:8202/api/;
    }
    location /assets/virsical {    
      alias html/visitor;
      index  visitApp.html;
      try_files $uri $uri/ /assets/visitApp.html;
    }
  }
```
注意：打包出来的html文件，将引入路径修改为相对路径。开发时，应该为/,否则在browserHistory下二级目录刷新异常。

# Upgrade to dva 2.X
### 1. update package.json

    
    "dva": "^2.0.3",
    "dva-loading": "^1.0.2",
    
    "roadhog": "^1.2.2",
    "webpack": "^3.6.0"
执行 `npm update`
### 2. update history
    
    
    import createHistory from 'history/createBrowserHistory';
    
    const app = dva({
      history: createHistory(),
      onError: (e) => {
        window.console.error(e);
        message.error(e.message);
      }
    });
    
### 3. upgrade router@2 to router@4

   [Reat-Router@4](https://reacttraining.com/react-router/web/guides/philosophy)
    
    import React from 'react';
    import {Router, Route, Switch} from 'dva/router';
    import dynamic from 'dva/dynamic';
    import App from './routes/App';
    import Layout from './routes/Layout';
    
    export default ({history, app}) => {
      const ExampleIndex = dynamic({
        app,
        component: () => import('./routes/Example')
      });
      const TestIndex = dynamic({
        app,
        component: () => import('./routes/Test')
      });
      return (
        <App>
          <Router history={history}>
            <Switch>
              <Route exact path={'/'} component={dynamic({app, component: () => import('./routes/IndexPage')})}/>
              <Layout>
                <Route exact path={'/main/example'}
                       render={() => <ExampleIndex/>}/>
                <Route exact path={'/main/test'} component={TestIndex}/>
              </Layout>
            </Switch>
          </Router>
        </App>
      );
    }
    
如果是公共model，可以放到index.js中。
    
   [migration](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/migrating.md)
    
### 4. Breadcrumb修改

   router@4不再提供routes参数，因此Breadcrumb需要自己手动实现。
  
   参考[Breadcrumb](https://ant.design/components/breadcrumb-cn/#components-breadcrumb-demo-router-4)
   
## Test 

   执行所有的测试
  
   `npm run test:all  // 执行所有测试`
   
   执行单个文件的测试
   
   `npm test test\\components\\Example.test1.js      //windows ` 
   
   `npm test test/components/Example.test1.js        //mac ` 
   
   Got it to work with jsdom@11.1.0 and enzyme@2.9.1 as follows:
   
   ```javascript
   var jsdom = require('jsdom');
   const { JSDOM } = jsdom;
   
   const { document } = (new JSDOM('')).window;
   global.document = document;
   ```
   
   提示安装electron失败时：
   
   `npm i electron`
  
 [babel for mocha](http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/)
 
 可参考：
 
 [Ant design Pro test](https://pro.ant.design/docs/ui-test)
 
 这里需要注意的是，测试带有import 'antd'的js时，会找不到js依赖，需要删除`package-loc.json`后，重新执行`npm install`。
 
## 兼容性
  现代浏览器及 IE10, IE11。
  
## roadhog upgrade to 2.x

  [upgrade site](https://github.com/sorrycc/blog/issues/55)
  
  请将`babel-plugin-import`  升级到最新版本，否则会出现无法`import` `antd`组件的问题。
  
  升级后的打包命令为：`npm run build`
  
## Auth Router

  请在`PrivateRouter.js`中自行实现认证。
