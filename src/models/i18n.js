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
  subscriptions: {}
};
