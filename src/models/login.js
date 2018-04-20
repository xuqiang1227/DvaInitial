import {fakeAccountLogin, fakeUser} from "../services/api";
import {PATH_MAIN} from "../utils/constant";
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
    *accountSubmit({ payload, from = {pathname: ''} }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);
      if(response.status === 'ok') {
        const user = yield call(fakeUser);
        yield put({
          type: 'setState',
          payload: {changeLoginStatus: response, user},
        });
        sessionStorage.setItem('hasLogin', 'true');
        if(from.pathname) {
          yield put(routerRedux.push(from.pathname));
        } else {
          yield put(routerRedux.push(PATH_MAIN));
        }
      } else {
        sessionStorage.setItem('hasLogin', 'false');
        throw new Error('用户名密码错误！')
      }
    }
  },
  subscriptions: {

  }
};
