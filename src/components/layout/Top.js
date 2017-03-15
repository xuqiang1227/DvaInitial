import React from 'react';
import * as styles from './Layout.less';
import Icon from 'antd/lib/icon';

export default ({layout, dispatch}) => {
  return (
    <div>
      <Icon
        className="trigger"
        type={layout.menuMode === 'vertical' ? 'menu-unfold' : 'menu-fold'}
        onClick={() => dispatch({type: 'layout/changeMenuMode', menuMode: layout.menuMode === 'vertical'? 'inline' : 'vertical'})}
      />
      <div className={styles['lang']}>
        <span onClick={() => dispatch({type: 'i18n/setLocale', locale: 'zh_CN'})}>中文</span> | <span onClick={() => dispatch({type: 'i18n/setLocale', locale: 'en_US'})}>英文</span>
      </div>
    </div>
  );
}
