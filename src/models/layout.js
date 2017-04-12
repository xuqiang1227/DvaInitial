
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
    // set({dispatch, history}) {
    //   return history.listen(() => {
    //     if(pathname === '/') {
    //     }
    //   })
    // }
  }
};
