import React, { useContext, useState } from 'react';
import { BarsOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Button, Drawer, Layout } from 'antd';
import CruiseMenu from '../CruiseMenu';
import logo from '../../assets/logo.png';
import DeviceContext from '../../store/DeviceContext';

const { Header } = Layout;

const StyledHeader = styled(Header)`
  background-color: #fff;
  height: 58px;
  box-shadow: inset 0 15px 15px -15px rgb(0 0 0 / 50%), rgb(0 0 0 / 20%) 0px 2px 5px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  font-size: 20px;
  color: black;
  position: absolute;
  left: 5px;
  top: 10px;

  &.ant-btn-link:hover {
    color: black;
  }
`;

const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding: 0;
  }
  
  .ant-menu {
    height: 100%;
  }
`;
const CruiseHeader = () => {
  const deviceType = useContext(DeviceContext);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <StyledHeader>
      {!(deviceType === 'desktop')
        && (
          <>
            <StyledButton type="link" icon={<BarsOutlined />} onClick={showDrawer} />
            <StyledDrawer
              placement="left"
              closable={false}
              onClose={onClose}
              open={open}
            >
              <CruiseMenu />
            </StyledDrawer>
          </>
        )}
      <img alt="logo" src={logo} width={80} height={27} />
    </StyledHeader>
  );
};

export default CruiseHeader;
