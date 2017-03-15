import dva from 'dva';
import { addLocaleData, IntlProvider } from 'react-intl';
import './index.less';
import 'antd/dist/antd.less';
import { browserHistory } from 'dva/router';
import message from 'antd/lib/message';
import createLoading from 'dva-loading';
import * as Ii8n from './i18n';
import {CHINESE, ENGLISH} from './utils/constant';

addLocaleData(Ii8n[CHINESE]);
addLocaleData(Ii8n[ENGLISH]);

// 1. Initialize
const app = dva({
  history: browserHistory,
  onError: (e) => {
    message.error(e.message);
  }
});

// 2. Plugins
app.use(createLoading());
app.model(require('./models/layout'));
app.model(require('./models/i18n'));

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
