import React from 'react';
import {Router, Route} from 'dva/router';
import AppIndex from '../../routes/app/AppIndex';
import {PATH_HOME} from '../../utils/constant';
import App from '../../routes/app/APPContainer';

const BasePath = `${PATH_HOME}app`;

export default ({history}) => {
  return <App>
    <Router history={history}>
      <Route path={BasePath} component={AppIndex}/>
    </Router>
  </App>;
};
