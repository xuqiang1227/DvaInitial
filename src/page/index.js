import 'core-js/fn/object/assign';
import '@babel/polyfill';//endsWith等的兼容性处理。
import dva from 'dva';
import 'intl';
import { addLocaleData } from 'react-intl';
import './index.less';
import createHistory from 'history/createBrowserHistory';
import {message} from 'antd';
import createLoading from 'dva-loading';
import * as I18n from '../i18n/index';
import {CHINESE, ENGLISH} from '../utils/constant';

if (navigator && /Edge/.test(navigator.userAgent)) {
  delete window.fetch;
}
require('es6-promise').polyfill();

addLocaleData(I18n[CHINESE]);
addLocaleData(I18n[ENGLISH]);

// 1. Initialize
const app = dva({
  history: createHistory(),
  onError: (e) => {
    message.destroy();
    window.console.error(e);
    message.error(e.message);
  }
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('../models/i18n').default);
app.model(require('../models/layout').default);
app.model(require('../models/login').default);

// 4. Router
app.router(require('./routers/router').default);

// 5. Start
app.start('#root');
