import React from 'react';
// import 'raf/polyfill';
import { shallow } from 'enzyme';
import Example from '../../src/components/Example';

describe('test component', () => {
  test('renders Dashboard', () => {
    // const fetchFn = jest.fn();
    const wrapper = shallow(
      <Example />
    );
    expect(wrapper.find('FormattedMessage').length).toBe(1);
    // expect(fetchFn).toBeCalled();
  });

});

