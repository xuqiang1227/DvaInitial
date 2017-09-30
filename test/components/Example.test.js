import React from 'react';
import {connect} from 'dva';
import {Form, Input, Button, Icon} from 'antd';

import {routerRedux} from 'dva/router';

import { shallow, render, configure } from 'enzyme';
import chai from 'chai';
const {expect} = chai;

import Adapter from 'enzyme-adapter-react-15';
configure({ adapter: new Adapter() });

import Example from '../../src/components/Example';
import {IntlProvider} from 'react-intl';

describe('routers/IndexPage', () => {
  let _props, _spies, _wrapper;
  let register = {
    username: '',
    password: ''
  }

  beforeEach(() => {
    _spies = {}
    _props = {
      register,
      // ...bindActionCreators({
      //   onChangeUsername: (_spies.onChangeUsername = sinon.spy()),
      //   onSubmit: (_spies.onSubmit = sinon.spy())
      // }, _spies.dispatch = sinon.spy())
    }
    // _wrapper = render(Form.create()(props => <IndexPage {..._props} {...props} />))
    _wrapper = render( <IntlProvider><Example {..._props} /></IntlProvider>)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })

  it('Should has two children.', () => {
    expect(_wrapper.children()).to.have.length(2);
  })

  // it('Each element of form should be <div>.', () => {
  //   _wrapper.children().forEach(function (node) {
  //     expect(node.is(div)).to.equal(true);
  //   })
  // })
  //
  // it('Should render username properly.', () => {
  //   expect(_wrapper.find(TextInput).prop('value')).to.be.empty
  //   _wrapper.setProps({register: {...register, username: 'foobar' }})
  //   expect(_wrapper.find(TextInput).prop('value')).to.equal('foobar')
  // })
  //
  // it('Should call onChangeUsername.', () => {
  //   _spies.onChangeUsername.should.have.not.been.called
  //   _wrapper.find(TextInput).prop('onChange')('hello')
  //   _spies.dispatch.should.have.been.called
  //
  // })
})
