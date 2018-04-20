/**
 * date: 2018-04-20 10:10
 * auth: XuQiang
 **/

import React from 'react';
import { Route, Redirect} from 'dva/router';
import {PATH_HOME} from "../utils/constant";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      sessionStorage.getItem('hasLogin') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: PATH_HOME,
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
