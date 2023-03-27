import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

const StyledLayout = styled(Layout)`
  height: 100vh;
`;
const CruiseContextProvider = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <StyledLayout>
    {children}
  </StyledLayout>
);

export default CruiseContextProvider;
