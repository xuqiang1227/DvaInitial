import React from 'react';
import { connect } from 'dva';
import Test from '../components/Test';

export default connect(state => state)(({login: loginData}) => <Test loginData={loginData}/>);
