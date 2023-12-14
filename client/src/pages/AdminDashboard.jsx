// AdminDashboard.jsx

import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  UserOutlined,
  FileOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminDashboard = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={80} theme="dark" collapsible>
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1" icon={<DesktopOutlined />} />
          <Menu.Item key="2" icon={<UserOutlined />} />
          <Menu.Item key="3" icon={<FileOutlined />} />
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            Content Goes Here
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Admin Dashboard</Footer>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
