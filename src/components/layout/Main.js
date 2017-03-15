import React from 'react';
import * as styles from './Layout.less';
import Menu from './Menu';
import Top from './Top';
import Breadcrumb from 'antd/lib/breadcrumb';
import Layout from 'antd/lib/layout';
const { Header, Content, Sider } = Layout;


export default ({children, routes, layout, dispatch, intl}) => {
  return (
    <Layout className={styles['normal']}>
      <Sider trigger={null} collapsible collapsed={layout.menuMode === 'vertical'}>
        <Menu layout={layout} dispatch={dispatch}/>
      </Sider>
      <Layout>
        <Header className={styles['header']}>
          <Top dispatch={dispatch} layout={layout} />
        </Header>
        <Content className={styles['content']}>
          <Breadcrumb routes={routes} separator=">" className={styles['bread-crumb']} itemRender={(route) => intl.formatMessage({id: route.breadcrumbName})} />
          <div className={styles['main']}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
