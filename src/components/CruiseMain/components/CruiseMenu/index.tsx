import React, { useContext, useState } from 'react';
import { BarsOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Button, Drawer } from 'antd';
import CruiseSider from './components/CruiseSider';
import MenuContent from './components/MenuContent';
import DeviceContext from '../../../../store/DeviceContext';

const StyledButton = styled(Button)`
  font-size: 20px;
  color: black;
  position: fixed;
  left: 5px;
  top: 10px;
  z-index: 2;

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

const CruiseMenu = (): JSX.Element => {
  const deviceType = useContext(DeviceContext);
  const [open, setOpen] = useState(false);
  const showDrawer = (): void => {
    setOpen(true);
  };

  const onClose = (): void => {
    setOpen(false);
  };

  return deviceType === 'desktop' ? <CruiseSider /> : (
    <>
      <StyledButton type="link" icon={<BarsOutlined />} onClick={showDrawer} />
      <StyledDrawer
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
      >
        <MenuContent />
      </StyledDrawer>
    </>
  );
};

export default CruiseMenu;
