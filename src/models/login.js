import {fakeAccountLogin, fakeUser} from "../services/api";
import {APP_PATH} from "../utils/constant";
import {routerRedux} from 'dva/router';

export default {
  namespace: 'login',
  state: {
    changeLoginStatus: {},
    user: []
  },
  reducers: {
    setState(state, {payload}) {
      return {...state, ...payload};
    }
  },
  effects: {
    *accountSubmit({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);
      if(response.status === 'ok') {
        const user = yield call(fakeUser);
        yield put({
          type: 'setState',
          payload: {changeLoginStatus: response, user},
        });
        yield put(routerRedux.push(APP_PATH.example));
      } else {
        throw new Error('用户名密码错误！')
      }
    }
  },
  subscriptions: {

  }
};
