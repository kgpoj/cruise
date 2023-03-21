import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
  ClusterOutlined,
  DashboardOutlined,
  QuestionCircleOutlined, RobotOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';

const { Sider } = Layout;

const StyledMenu = styled(Menu)`
  .ant-menu-item {
    width: 100%;
    margin-inline: 0;
    margin-block: 15px 5px;
    border-radius: 0;
    
    a {
      transition: color 0.1s;
    }
  }
  .ant-menu-item-selected {
    background-color: #3e4959;
    color: #47a6c2;
  }
`;

const menuItems = [
  {
    key: 'dashboard',
    label: <Link to="/dashboard">DASHBOARD</Link>,
    icon: <DashboardOutlined />,
  },
  {
    key: 'agent',
    label: <Link to="/agent">AGENT</Link>,
    icon: <ClusterOutlined />,
  },
  {
    key: 'my-cruise',
    icon: <RobotOutlined />,
    label: <Link to="/my-cruise">MY CRUISE</Link>,
  },
  {
    key: 'help',
    icon: <QuestionCircleOutlined />,
    label: <Link to="/help">HELP</Link>,
  },
];

const CruiseSider: React.FC = () => {
  const location = useLocation();
  const currentKey = location.pathname.replace('/', '');

  return (
    <Sider
      theme="dark"
      width={250}
    >
      <StyledMenu
        items={menuItems}
        mode="inline"
        theme="dark"
        selectedKeys={[currentKey]}
        defaultSelectedKeys={['agent']}
      />
    </Sider>
  );
};

export default CruiseSider;
