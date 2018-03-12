import React from 'react';
import * as styles from './Layout.less';
import DvaMenu from './Menu';
import Top from './Top';
import {Breadcrumb, Layout} from 'antd';

export default ({children, layout, dispatch}) => {
  const breadcrumbNameMap = {
    '/main': 'Main',
    '/main/example': 'Application1',
    '/main/test': 'Application2'
  };
  const pathSnippets = layout.pathname.split('/').filter(i => i);
  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
          {breadcrumbNameMap[url]}
      </Breadcrumb.Item>
    );
  });
  return (
    <Layout className={styles['normal']}>
      <Layout.Sider trigger={null} collapsible collapsed={layout.menuMode === 'vertical'}>
        <DvaMenu layout={layout} dispatch={dispatch}/>
      </Layout.Sider>
      <Layout>
        <Layout.Header className={styles['header']}>
          <Top dispatch={dispatch} layout={layout} />
        </Layout.Header>
        <Layout.Content className={styles['content']}>
          <Breadcrumb separator=">" className={styles['bread-crumb']}>
            {breadcrumbItems}
          </Breadcrumb>
          <div className={styles['main']}>
            {children}
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
