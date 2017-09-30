import React from 'react';
import {connect} from 'dva';
import * as styles from './IndexPage.less';
import {Form, Input, Button, Icon} from 'antd';

const FormItem = Form.Item;
import {routerRedux} from 'dva/router';
import {APP_PATH} from '../utils/constant';

export const IndexPage = ({form, dispatch}) => {
  const {getFieldDecorator, validateFields} = form;
  return (
      <div className={styles.normal}>
        <div className={styles.login}>
          <div className={styles.title}>Dva Initial</div>
          <div className={styles['login-form']}>
            <div className={styles['form']}>
              <div className={styles['form-title']}>
                用户登录
              </div>
              <div className={styles['form-login']}>
                <Form className={styles['form-input']} onSubmit={
                  (e) => {
                    e.preventDefault();
                    validateFields((err, values) => {
                      if (!err) {
                        window.console.log('Received values of form: ', values);
                        dispatch(routerRedux.push(APP_PATH.example));
                      }
                    });
                  }
                }>
                  <FormItem className={styles['form-item']}>
                    {getFieldDecorator('userName', {
                      rules: [{required: true, message: 'Please input your username!'}],
                    })(
                      <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="Username"/>
                    )}
                  </FormItem>
                  <FormItem className={styles['form-item']}>
                    {getFieldDecorator('password', {
                      rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                      <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                             placeholder="Password"/>
                    )}
                  </FormItem>
                  <Button type="primary" htmlType="submit" className={styles['form-btn']}>
                    Log in
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

IndexPage.propTypes = {};

export default connect(state => state)(Form.create()(IndexPage));
