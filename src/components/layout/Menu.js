import React from 'react';
import * as styles from './Layout.less';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';

export default ({layout}) => {
  return (
    <div className={styles['menu']}>
      <Menu theme="dark" mode={layout.menuMode} defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span className={styles['nav-text']}>nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span className={styles['nav-text']}>nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span className={styles['nav-text']}>nav 3</span>
        </Menu.Item>
      </Menu>
    </div>
  );
}
