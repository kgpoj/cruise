import React, { useContext } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import DeviceContext from '../../store/DeviceContext';
import CruiseMenu from '../CruiseMenu';

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

const CruiseSider: React.FC = () => {
  const isMobile = useContext(DeviceContext) === 'mobile';

  return (
    <StyledSider
      theme="dark"
      width={250}
      breakpoint="lg"
      collapsedWidth="0"
      defaultCollapsed={isMobile}
    >
      <CruiseMenu />
    </StyledSider>
  );
};

export default CruiseSider;
