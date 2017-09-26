import React from 'react';
import { connect } from 'dva';
import Layout from '../components/layout/Main';
import {injectIntl} from 'react-intl';

const Main = injectIntl((props) => {
  const {dispatch, children, layout, intl} = props;
  return (
    <Layout dispatch={dispatch} layout={layout} intl={intl}>
      {children}
    </Layout>
  );
});

export default connect(state => state)(props => <Main {...props}/>);
