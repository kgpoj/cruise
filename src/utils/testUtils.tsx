import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import { render, RenderOptions } from '@testing-library/react';
import theme from '../constants/theme';

type ConstructorWithHistory = (history?: MemoryHistory) => React.FC;
type RenderWithWrapper = (
  children: React.ReactElement,
  history?: MemoryHistory,
) => ReturnType<typeof render>;

const createWrapper: ConstructorWithHistory = (
  history = createMemoryHistory(),
) => ({ children }: React.PropsWithChildren): JSX.Element => (
  <Router location={history.location} navigator={history}>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </Router>
);

const renderWithGlobalWrapper: RenderWithWrapper = (
  children,
  history?,
  options?: RenderOptions,
) => render(children, {
  wrapper: createWrapper(history),
  ...options,
});
export default renderWithGlobalWrapper;
