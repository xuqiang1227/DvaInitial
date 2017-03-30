import React from 'react';
import {Router} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Layout from './routes/Layout';
import Example from './components/Example';
import App from './routes/App.js';
import Test from './routes/Test.js';

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
            },
            {
              path: 'nav2',
              component: Test,
              breadcrumbName: 'example.test.2'
            }
          ]
        }
      ]
    },
  ];

  return <Router history={history} routes={routes}/>;
};
