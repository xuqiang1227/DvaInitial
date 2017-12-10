import React from 'react';
import {FormattedMessage} from 'react-intl';

const Example = ({loginData}) => {
  return (
    <div>
      <FormattedMessage id="example.test"/>
      <div>data from mock</div>
      {loginData.user.join(', ')}
    </div>
  );
};

Example.propTypes = {
};

export default Example;
