import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import dynamic from 'dva/dynamic';

export default ({history, app}) => {

  const ExampleIndex = dynamic({
    app,
    component: () => import('./routes/Example')
  });
  const TestIndex = dynamic({
    app,
    component: () => import('./routes/Test')
  });

  return <Router history={history}>
      <Switch>
        <Route exact path={'/'} component={dynamic({app, component: () => import('./routes/IndexPage')})}/>
        <Route exact path={'/main/example'}
               component={ExampleIndex}/>
        <Route exact path={'/main/test'} component={TestIndex}/>
      </Switch>
  </Router>;
};
