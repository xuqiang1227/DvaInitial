import React from 'react';
import { connect } from 'dva';
import * as styles from './Test.less';
import Example from '../components/Example';

export default connect(state => state)(({dispatch}) => {
  return (
    <div className={styles.normal}>
      <div>Route Component: Test</div>
      <Example dispatch={dispatch}/>
    </div>
  );
});
