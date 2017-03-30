import React from 'react';
import * as styles from './Layout.less';
import AntMenu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import {Link} from 'dva/router';

export default ({layout}) => {
  return (
    <div className={styles['menu']}>
      <AntMenu theme="dark" mode={layout.menuMode} defaultSelectedKeys={['1']}>
        <AntMenu.Item key="1">
          <Link to="/main/example">
            <Icon type="user"/>
            <span className={layout.menuMode !== 'inline' && styles['nav-text']}>nav 1</span>
          </Link>
        </AntMenu.Item>
        <AntMenu.Item key="2">
          <Link to="/main/nav2">
            <Icon type="video-camera"/>
            <span className={layout.menuMode !== 'inline' && styles['nav-text']}>nav 2</span>
          </Link>
        </AntMenu.Item>
        <AntMenu.Item key="3">
          <Icon type="upload"/>
          <span className={layout.menuMode !== 'inline' && styles['nav-text']}>nav 3</span>
        </AntMenu.Item>
      </AntMenu>
    </div>
  );
}
