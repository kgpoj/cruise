import React, { PropsWithChildren, ReactElement } from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { ThemeProvider } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, RenderOptions } from '@testing-library/react';
import theme from '../constants/theme';
import ApolloMockedProvider from './ApolloMockedProvider';

type ConstructorWithHistory = (history?: MemoryHistory) => React.FC;

const ThemeWrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);
export const GlobalWrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <ThemeWrapper>
    <ApolloMockedProvider>
      {children}
    </ApolloMockedProvider>
  </ThemeWrapper>
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

export const renderWithThemeWrapper = (
  children: ReactElement,
  options?: RenderOptions,
): ReturnType<typeof render> => render(children, {
  wrapper: ThemeWrapper,
  ...options,
});

const renderWithGlobalWrapper = (
  children: ReactElement,
  history?: MemoryHistory,
  options?: RenderOptions,
): ReturnType<typeof render> => render(children, {
  wrapper: createGlobalWrapperWithHistory(history),
  ...options,
});
export default renderWithGlobalWrapper;
