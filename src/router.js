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

// This approach causes the entire page to be refreshed, so deprecated.
//
// export default ({history, app}) => {
//
//   const ExampleIndex = dynamic({
//     app,
//     component: () => import('./routes/Example')
//   });
//   const TestIndex = dynamic({
//     app,
//     component: () => import('./routes/Test')
//   });
//
//   return <Router history={history}>
//       <Switch>
//         <Route exact path={'/'} component={dynamic({app, component: () => import('./routes/IndexPage')})}/>
//         <Route exact path={'/main/example'}
//                render={() => <ExampleIndex breadcrumbName={'layout.index'}/>}/>
//         <Route exact path={'/main/test'} component={TestIndex}/>
//       </Switch>
//   </Router>;
// };
