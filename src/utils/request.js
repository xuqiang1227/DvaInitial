import fetch from 'dva/fetch';
import {isIE} from './download';

const parseJSON = response => {
  return response.json();
};

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default (url, options) => {
  return new Promise(resolve => {
    resolve(myRequest(url, options));
  }).then(data => {
    if (data.result === 1) {
      return data.data || data.msg;
    } else {
      throw new Error(data.msg);
    }
  });//这里不需要再catch了。
};

export const myRequest = (url, options) => {
  if (options && options.hasOwnProperty('method')) {
    options.headers = {'Content-Type': 'application/json'};
  } else {
    if (isIE()) {
      url += `${url.indexOf('?') > -1 ? '&' : '?'}t=${Date.now()}`;
    }
  }
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(err => {
      throw new Error(err);
    });
};

//获取URL地址的参数值。
//name为URL参数名
//例如：?param1=abc&param2=123
//当调用GetURLparam("param2"）时，获取到的值为：123
export const getUrlParam = (name) => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = window.location.search.substr(1).match(reg);
  if (r != null)return r[2];
  return null;
};
