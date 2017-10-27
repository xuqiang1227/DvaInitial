import fetch from 'dva/fetch';
import {isIE} from './download';

//resole no response
const parseJSON = response => {
  switch (response.status) {
    case 201:
      return {message: 'Created', status: 201};
      break;
    case 204:
      return {message: 'Successfully', status: 204};
      break;
    default:
      return response.json();
  }
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
    if (data.status >= 200 && data.status < 300 || !data.status) {
      return data;
    } else {
      throw new Error(data.message);
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
  if (r !== null)return r[2];
  return null;
};
