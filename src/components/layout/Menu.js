import React from 'react';
import * as styles from './Layout.less';
import AntMenu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';

export default ({layout}) => {
  return (
    <div className={styles['menu']}>
      <AntMenu theme="dark" mode={layout.menuMode} defaultSelectedKeys={['1']}>
        <AntMenu.Item key="1">
          <Icon type="user" />
          <span className={layout.menuMode !== 'inline' && styles['nav-text']}>nav 1</span>
        </AntMenu.Item>
        <AntMenu.Item key="2">
          <Icon type="video-camera" />
          <span className={layout.menuMode !== 'inline' && styles['nav-text']}>nav 2</span>
        </AntMenu.Item>
        <AntMenu.Item key="3">
          <Icon type="upload" />
          <span className={layout.menuMode !== 'inline' && styles['nav-text']}>nav 3</span>
        </AntMenu.Item>
      </AntMenu>
    </div>
  );
}
