import React, {PropsWithChildren} from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import { render, RenderOptions } from '@testing-library/react';
import theme from '../constants/theme';
import ApolloMockedProvider from './ApolloMockedProvider';

type ConstructorWithHistory = (history?: MemoryHistory) => React.FC;
type RenderWithWrapper = (
  children: React.ReactElement,
  history?: MemoryHistory,
) => ReturnType<typeof render>;

export const GlobalWrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ApolloMockedProvider>
      {children}
    </ApolloMockedProvider>
  </ThemeProvider>
);
const createGlobalWrapperWithHistory: ConstructorWithHistory = (
  history = createMemoryHistory(),
) => ({ children }: React.PropsWithChildren): JSX.Element => (
  <Router location={history.location} navigator={history}>
    <GlobalWrapper>
      {children}
    </GlobalWrapper>
  </Router>
);

const renderWithGlobalWrapper: RenderWithWrapper = (
  children,
  history?,
  options?: RenderOptions,
) => render(children, {
  wrapper: createGlobalWrapperWithHistory(history),
  ...options,
});
export default renderWithGlobalWrapper;
