import 'babel-polyfill';
import 'raf/polyfill';
import React from 'react';
import chai from 'chai';
import LoginModel from '../../src/models/login';

describe('models/login', () => {
  describe('test namespace', () => {
    it('The namespace validate for this model:', () => {
      chai.expect(LoginModel.namespace).to.equals('login');
    });
  });
  describe('test states', () => {
    it('validate initial state.', () => {
      chai.expect(LoginModel.state).to.be.an('object').that.have.property('changeLoginStatus');
      chai.expect(LoginModel.state).to.deep.equals({
        changeLoginStatus: {},
        user: []
      });
    });
  });

  describe('test reducers', () => {
    it('validate reducer function:', () => {
      chai.expect(LoginModel.reducers).to.be.an('object').that.have.property('setState');
      chai.expect(LoginModel.reducers.setState({}, {payload: {test: {}}})).to.deep.equals({test: {}});
    });
  });

  describe('test effects', function() {
    it('validate effects function:', function() {
      chai.expect(LoginModel.effects).to.be.an('object').that.have.property('accountSubmit');
      // const accountSubmit = LoginModel.effects.accountSubmit;
      // accountSubmit({payload: {username: '8888'}})
    });
  });
});
