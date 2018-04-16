// import 'raf/polyfill';
import React from 'react';
import 'dva';
import LoginModel from '../../src/models/login';

describe('models/login', () => {
  test('The namespace validate for this model:', () => {
    expect(LoginModel.namespace).toEqual('login');
  });
  describe('test states', () => {
    it('validate initial state.', () => {
      expect(LoginModel.state).toBeDefined();
      expect(LoginModel.state).toMatchObject({
        changeLoginStatus: {},
        user: []
      });
    });
  });

  describe('test reducers', () => {
    it('validate reducer function:', () => {
      expect(LoginModel.reducers).toBeDefined();
      expect(LoginModel.reducers.setState({}, {payload: {test: {}}})).toMatchObject({test: {}});
    });
  });

  describe('test effects', function() {
    it('validate effects function:', function() {
      expect(LoginModel.effects).toBeDefined();
      const accountSubmit = LoginModel.effects.accountSubmit;
      accountSubmit({payload: {username: '8888'}})
    });
  });
});
