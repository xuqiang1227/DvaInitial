import React from 'react';
import { connect } from 'dva';
import Layout from '../components/layout/Main';
import {injectIntl} from 'react-intl';

const Main = ({routes, dispatch, children, layout, intl}) => {
  return (
    <Layout routes={routes} dispatch={dispatch} layout={layout} intl={intl}>
      {children}
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return Object.assign({}, state);
};

export default connect(mapStateToProps)(injectIntl(Main));
