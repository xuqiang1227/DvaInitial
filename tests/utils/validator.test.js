import 'babel-polyfill';
import {checkUsername} from '../../src/utils/validator';
import chai from 'chai';
const {expect} = chai;

describe('helpers/validator', () => {
  describe('Function: checkUsername', () => {
    it('Should not return error while input foobar.', () => {
      expect(checkUsername('foobar')).to.be.empty
    });
    it('Should return error while empty.', () => {
      expect(checkUsername('')).to.equal('用户名必须为1-15个字')
    });
    it('Should return error while more then 15 words.', () => {
      expect(checkUsername('abcdefghijklmnop')).to.equal('用户名必须为1-15个字');
      expect(checkUsername('一二三四五六七八九十一二三四五六')).to.equal('用户名必须为1-15个字')
    });
  });
});
