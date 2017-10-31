import React from 'react';
import {connect} from 'dva';
import {IntlProvider} from 'react-intl';
import enUS from 'antd-mobile/lib/locale-provider/en_US';
import {ENGLISH} from '../../utils/constant';
import {ActivityIndicator, LocaleProvider} from 'antd-mobile';

const App = ({children, i18n, loading}) => {
  return (
    <div style={{height: '100vh'}}>
      <ActivityIndicator size="large" toast animating={loading.global} text={'loading...'}/>
      <LocaleProvider locale={i18n.locale === ENGLISH ? enUS : null}>
        <IntlProvider locale={i18n.locale} messages={i18n.messages}>{children}</IntlProvider>
      </LocaleProvider>
    </div>
  );
};

export default connect(state => state)(App)
