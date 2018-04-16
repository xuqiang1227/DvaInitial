// import 'raf/polyfill';
import {checkUsername} from '../../src/utils/validator';

describe('helpers/validator', () => {
  describe('Function: checkUsername', () => {
    test('Should not return error while input foobar.', () => {
      expect(checkUsername('foobar')).toBe.empty
    });
    test('Should return error while empty.', () => {
      expect(checkUsername('')).toEqual('用户名必须为1-15个字')
    });
    test('Should return error while more then 15 words.', () => {
      expect(checkUsername('abcdefghijklmnop')).toEqual('用户名必须为1-15个字');
      expect(checkUsername('一二三四五六七八九十一二三四五六')).toEqual('用户名必须为1-15个字')
    });
  });
});
