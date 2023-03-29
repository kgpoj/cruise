import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import CruiseMenu from './index';

describe('CruiseMenu', () => {
  const history = createMemoryHistory();
  it('should render sider when desktop', () => {
    render(
      <Router location={history.location} navigator={history}>
        <CruiseMenu />
      </Router>,
    );
    const button = screen.queryByTestId('menu-button');
    const sider = screen.getByTestId('sider');

    waitFor(() => {
      expect(sider).toBeVisible();
      expect(button).not.toBeVisible();
    });
  });

  it('should render drawer when mobile', () => {
    Object.defineProperty(
      window,
      'innerWidth',
      { writable: true, configurable: true, value: 200 },
    );
    render(
      <Router location={history.location} navigator={history}>
        <CruiseMenu />
      </Router>,
    );
    const button = screen.getByTestId('menu-button');
    const sider = screen.getByTestId('sider');
    const drawer = screen.queryByTestId('drawer');

    expect(button).toBeInTheDocument();
    expect(sider).toBeInTheDocument();
    expect(drawer).not.toBeInTheDocument();

    waitFor(() => {
      userEvent.click(button);
      expect(drawer).toBeInTheDocument();
    });
  });
});
