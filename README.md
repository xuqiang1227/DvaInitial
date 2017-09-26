## DvaInitial
Dva初始化，包括layout 以及国际化
## 内容介绍
- React + Dva + Roadhog
- antd layout
- react-intl
## 使用方式
```
npm i
npm start
````
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
    ocation /assets/main {
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

    ```
    "dva": "^2.0.3",
    "dva-loading": "^1.0.2",
    
    "roadhog": "^1.2.2",
    "webpack": "^3.6.0"
    ```
    执行 `npm update`
### 2. update history
    
    ```
    import createHistory from 'history/createBrowserHistory';
    
    const app = dva({
      history: createHistory(),
      onError: (e) => {
        window.console.error(e);
        message.error(e.message);
      }
    });
    ```
### 3. upgrade router@2 to router@4
    ```
    import React from 'react';
    import {Router, Route, Switch} from 'dva/router';
    import dynamic from 'dva/dynamic';
    
    export default ({history, app}) => {
    
      const ExampleIndex = dynamic({
        app,
        component: () => import('./routes/Example'),
        models: () => [import('./models/layout')]
      });
    
      return <Router history={history}>
          <Switch>
            <Route exact path={'/'} component={dynamic({app, component: () => import('./routes/IndexPage')})}/>
            <Route exact path={'/main/example'}
                   component={ExampleIndex}/>
          </Switch>
      </Router>;
    };
    ```
    如果是公共model，可以放到index.js中。
### 4. 将原来的Layout 修改如下：
    ```
    import React from 'react';
    import { connect } from 'dva';
    import Layout from '../components/layout/Main';
    import {injectIntl} from 'react-intl';
    import App from './App';
    
    const Main = injectIntl(({routes, dispatch, children, layout, intl}) => {
      return (
        <Layout routes={routes} dispatch={dispatch} layout={layout} intl={intl}>
          {children}
        </Layout>
      );
    });
    
    export default connect(state => state)(props => <App><Main {...props}/></App>);
    ```
    修改这一步的目的是，将Layout组件和IntlProvide组件从Route中抽取出来，避免由Layout包裹的路由出现无法跳转的问题。
    也可以通过router@4提供的其他方式实现wrap.
### 5. Breadcrumb修改

    router@4不再提供routes参数，因此Breadcrumb需要自己手动实现。
    参考[Breadcrumb](https://ant.design/components/breadcrumb-cn/#components-breadcrumb-demo-router-4)
