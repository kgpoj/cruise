import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CruiseMenu from './index';
import renderWithGlobalWrapper from '../../../../utils/testUtils';

describe('CruiseMenu', () => {
  it('should render sider when desktop', () => {
    renderWithGlobalWrapper(<CruiseMenu />);
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
    renderWithGlobalWrapper(<CruiseMenu />);
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
