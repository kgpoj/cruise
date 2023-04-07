import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Layout } from 'antd';
import theme from '../constants/theme';

const StyledLayout = styled(Layout)`
  height: 100vh;
`;
const CruiseContextProvider = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <StyledLayout>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </StyledLayout>
);

export default CruiseContextProvider;
