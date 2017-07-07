import React from 'react';
import {Router, Route} from 'dva/router';
import AppIndex from './routes/app/AppIndex';
import {PATH_HOME} from './utils/constant';
const BasePath = `${PATH_HOME}app`;

export default ({history}) => {
  return <Router history={history}>
      <Route path={BasePath} component={AppIndex}/>
  </Router>;
};
