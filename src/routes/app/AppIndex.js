/**
 * Created by XuQiang on 2017/6/2.
 */
import React from 'react';
import { connect } from 'dva';
import {injectIntl, defineMessages} from 'react-intl';

export default connect(state => state)(injectIntl(({intl}) => {
  const messages = defineMessages({
    'example.test.2': {
      id: 'example.test.2',
      defaultMessage: 'APP 首页'
    }
  });
 return <div>{intl.formatMessage(messages['example.test.2'])}</div>;
}));
