
export default {
  namespace: 'layout',
  state: {
    menuMode: 'inline'
  },
  reducers: {
    changeMenuMode(state, {menuMode}) {
      return Object.assign({}, state, {menuMode});
    }
  },
  effects: {},
  subscriptions: {
    set({dispatch, history}) {
      return history.listen(({pathname}) => {
        // if(pathname === '/') {
          dispatch({type: 'i18n/setLocale', locale: 'zh_CN'});
        // }
      })
    }
  }
};
