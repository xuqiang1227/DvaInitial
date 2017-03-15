import React from 'react';
import {Router} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Layout from "./routes/Layout";
import Example from './components/Example';

import App from "./routes/App.js";

export default ({history}) => {
  const routes = [
    {
      path: '/',
      component: App,
      indexRoute: {component: IndexPage},
      childRoutes: [
        {
          path: 'index',
          component: IndexPage
        },
        {
          path: 'main',
          breadcrumbName: 'layout.index',
          component: Layout,
          childRoutes: [
            {
              path: 'example',
              component: Example,
              breadcrumbName: 'example.test'
            }
          ]
        }
      ]
    },
  ];

  return <Router history={history} routes={routes}/>;
};
