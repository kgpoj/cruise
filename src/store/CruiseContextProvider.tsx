import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import DeviceContext from './DeviceContext';

const StyledLayout = styled(Layout)`
  height: 100vh;
`;
const CruiseContextProvider = ({ children }: { children: React.ReactNode }) => (
  <StyledLayout>
    <DeviceContext.Provider value={window.innerWidth < 992 ? 'mobile' : 'desktop'}>
      {children}
    </DeviceContext.Provider>
  </StyledLayout>
);

export default CruiseContextProvider;
