import dva from 'dva';
require('es6-promise').polyfill();
import 'intl';
import { addLocaleData } from 'react-intl';
import './index.less';
import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import * as I18n from '../i18n/index';
import {CHINESE, ENGLISH} from '../utils/constant';

addLocaleData(I18n[CHINESE]);
addLocaleData(I18n[ENGLISH]);

// 1. Initialize
const app = dva({
  history: createHistory()
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('../models/i18n').default);

// 4. Router
app.router(require('./routers/appRouter').default);

// 5. Start
app.start('#root');
