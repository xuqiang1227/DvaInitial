import * as i18n from '../i18n';

export default {
  namespace: 'i18n',
  state: {
    locale: 'zh_CN',
    messages: null,
    formats: null
  },
  reducers: {
    setLocale(state, {locale}) {
      localStorage.setItem('locale', locale);
      return Object.assign({}, state, {
        locale: locale,
        messages: i18n[locale]
      });
    }
  },
  effects: {},
  subscriptions: {
    set({dispatch, history}) {
      return history.listen(() => {
          let lang = localStorage.getItem('locale');
          const type = navigator.appName;
          if (!lang) {
            if (type === 'Netscape') {
              lang = navigator.language
            } else {
              lang = navigator.userLanguage
            }
            let sec = lang.split('-');
            sec[1] = sec[1].toUpperCase();//解决safari浏览器下初化无法加载中英文的问题。
            lang = sec.join('_');

          }
          dispatch({type: 'setLocale', locale: lang});
          localStorage.setItem('locale', lang);
        }
      )
    }
  }
};
