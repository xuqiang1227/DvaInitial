
export default {
  namespace: 'layout',
  state: {
    menuMode: 'inline',
    pathname: '/main/example',
    loading: true
  },
  reducers: {
    setState(state, {payload}) {
      return Object.assign({}, state, {...payload});
    }
  },
  effects: {},
  subscriptions: {
    set({dispatch, history}) {
      return history.listen(({pathname}) => {
        dispatch({type: 'setState', payload: {pathname}});
      })
    }
  }
};
