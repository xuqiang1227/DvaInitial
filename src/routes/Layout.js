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
