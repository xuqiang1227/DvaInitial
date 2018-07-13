/**
 * Created by XuQiang on 2017/2/27.
 */
export const downloadFile = (url, fileName = '') => {
  if(!url) {
    throw new Error('url param is must be provided.');
  }
  if (isIE()) {
    ieDown(url)
  } else {
    const aLink = document.createElement('a');
    const evt = document.createEvent('MouseEvents');
    // var evt = document.createEvent("HTMLEvents")
    evt.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    // evt.initEvent("click", false, false)//initEvent 不加后两个参数在FF下会报错, 感谢 Barret Lee 的反馈
    aLink.download = fileName;
    aLink.href = url;
    aLink.dispatchEvent(evt)
  }
};
const ieDown = url => {
  window.open(url)
};
export const isIE = () => {
  const explorer = window.navigator.userAgent;
  return explorer.indexOf('MSIE') >= 0 || explorer.indexOf('Trident/7.0') >= 0 || explorer.indexOf('Edge') >= 0;
};
