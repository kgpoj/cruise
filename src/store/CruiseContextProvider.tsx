import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Layout } from 'antd';
import { ApolloProvider } from '@apollo/client';
import theme from '../constants/theme';
import client from '../apollo/client';

const StyledLayout = styled(Layout)`
  height: 100vh;
`;
const CruiseContextProvider = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <StyledLayout>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </ThemeProvider>
  </StyledLayout>
);

export default CruiseContextProvider;
