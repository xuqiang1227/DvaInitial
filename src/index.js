import dva from 'dva';
import 'core-js/fn/object/assign';
require('es6-promise').polyfill();
import 'babel-polyfill';//endsWith等的兼容性处理。
import 'intl';
import { addLocaleData } from 'react-intl';
import './index.less';
import createHistory from 'history/createBrowserHistory';
import {message} from 'antd';
import createLoading from 'dva-loading';
import * as Ii8n from './i18n';
import {CHINESE, ENGLISH} from './utils/constant';

addLocaleData(Ii8n[CHINESE]);
addLocaleData(Ii8n[ENGLISH]);

// 1. Initialize
const app = dva({
  history: createHistory(),
  onError: (e) => {
    window.console.error(e);
    message.error(e.message);
  }
});

// 2. Plugins
app.use(createLoading());

// 3. Model
// app.model(require('./models/example'));
app.model(require('./models/i18n'));
app.model(require('./models/layout'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
