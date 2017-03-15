import React from 'react';
import { connect } from 'dva';
import {IntlProvider} from 'react-intl';

const App = ({children, i18n}) => {
  return (
    <IntlProvider locale={i18n.locale} messages={i18n.messages}>{children}</IntlProvider>
  );
};

export default connect(state => state)(App)
