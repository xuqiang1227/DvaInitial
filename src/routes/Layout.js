import React from 'react';
import { connect } from 'dva';
import MainIndex from '../components/layout/Main';
import {injectIntl} from 'react-intl';

const Main = injectIntl((props) => {
  const {dispatch, children, layout, intl} = props;
  return (
    <MainIndex dispatch={dispatch} layout={layout} intl={intl}>
      {children}
    </MainIndex>
  );
});

export default connect(state => state)(props => <Main {...props}/>);
