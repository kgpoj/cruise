import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import CruiseMenu from './index';
import DeviceContext from '../../../../store/DeviceContext';

describe('CruiseMenu', () => {
  const history = createMemoryHistory();

  it('should render sider when desktop', () => {
    render(
      <Router location={history.location} navigator={history}>
        <CruiseMenu />
      </Router>,
    );
    const menu = screen.getByRole('menu');
    waitFor(() => {
      expect(menu).toBeInTheDocument();
    });
  });

  it('should render drawer when mobile', () => {
    render(
      <DeviceContext.Provider value="mobile">
        <Router location={history.location} navigator={history}>
          <CruiseMenu />
        </Router>
      </DeviceContext.Provider>,
    );
    const button = screen.getByRole('button');
    const menu = screen.queryByRole('menu');

    expect(menu).not.toBeInTheDocument();
    expect(button).toBeInTheDocument();

    waitFor(() => {
      userEvent.click(button);
      expect(menu).toBeInTheDocument();
    });
  });

  it('should render drawer when tablet', () => {
    render(
      <DeviceContext.Provider value="tablet">
        <Router location={history.location} navigator={history}>
          <CruiseMenu />
        </Router>
      </DeviceContext.Provider>,
    );
    const button = screen.getByRole('button');
    const menu = screen.queryByRole('menu');

    expect(menu).not.toBeInTheDocument();
    expect(button).toBeInTheDocument();

    waitFor(() => {
      userEvent.click(button);
      expect(menu).toBeInTheDocument();
    });
  });
});
