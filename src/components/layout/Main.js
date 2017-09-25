import React from 'react';
import * as styles from './Layout.less';
import DvaMenu from './Menu';
import Top from './Top';
import {Breadcrumb, Layout} from 'antd';
const { Header, Content, Sider } = Layout;


export default ({children, layout, dispatch, location}) => {
  const breadcrumbNameMap = {
    '/main': 'Main',
    '/main/example': 'Application1',
    '/main/test': 'Application2'
  };
  const pathSnippets = location.pathname.split('/').filter(i => i);
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
      <Sider trigger={null} collapsible collapsed={layout.menuMode === 'vertical'}>
        <DvaMenu layout={layout} dispatch={dispatch}/>
      </Sider>
      <Layout>
        <Header className={styles['header']}>
          <Top dispatch={dispatch} layout={layout} />
        </Header>
        <Content className={styles['content']}>
          <Breadcrumb separator=">" className={styles['bread-crumb']}>
            {breadcrumbItems}
          </Breadcrumb>
          <div className={styles['main']}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
