import React, { useState } from 'react';
import { BarsOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Button, Drawer, Layout } from 'antd';
import MenuContent from './components/MenuContent';

const { Sider } = Layout;

const DesktopOnlySider = styled(Sider)`
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    display: none;
  }
`;

const MobileOnlyButton = styled(Button)`
  font-size: 20px;
  color: black;
  position: fixed;
  left: 5px;
  top: 10px;
  z-index: 2;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    display: none;
  }

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

const drawerContentWrapperStyle = {
  maxWidth: '50vw',
};

const CruiseMenu = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const showDrawer = (): void => {
    setOpen(true);
  };

  const onClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <DesktopOnlySider
        width={250}
        collapsible={false}
        data-testid="sider"
      >
        <MenuContent />
      </DesktopOnlySider>
      <MobileOnlyButton type="link" icon={<BarsOutlined />} onClick={showDrawer} data-testid="menu-button" />
      <StyledDrawer
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        data-testid="drawer"
        contentWrapperStyle={drawerContentWrapperStyle}
      >
        <MenuContent />
      </StyledDrawer>
    </>
  );
};

export default CruiseMenu;
