import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import MenuContent from '../MenuContent';

const { Sider } = Layout;

const StyledSider = styled(Sider)`
  .ant-layout-sider-zero-width-trigger {
    position: absolute;
    top: -50px;
    left: 0;
    background: transparent;
    color: black;
  }
`;

const CruiseSider: React.FC = () => (
  <StyledSider
    theme="dark"
    width={250}
    collapsible={false}
  >
    <MenuContent />
  </StyledSider>
);

export default CruiseSider;
