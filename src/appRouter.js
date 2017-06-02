import React from 'react';
import {Router, Route} from 'dva/router';
import AppIndex from './routes/app/AppIndex';

export default ({history}) => {
  return <Router history={history}>
    <Route path="/app" component={AppIndex}/>
  </Router>;
};
