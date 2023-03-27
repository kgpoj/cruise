import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import CruiseSider from './index';

describe('CruiseSider', () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    history.push('/dashboard');
  });

  it('renders a menu with correct items', async () => {
    render(
      <Router location={history.location} navigator={history}>
        <CruiseSider />
      </Router>,
    );

    const dashboardMenuItem = screen.getByRole('link', {
      name: /dashboard/i,
    });
    const agentMenuItem = screen.getByRole('link', {
      name: /agent/i,
    });
    const myCruiseMenuItem = screen.getByRole('link', {
      name: /my cruise/i,
    });
    const helpMenuItem = screen.getByRole('link', {
      name: /help/i,
    });

    await waitFor(() => {
      expect(dashboardMenuItem).toBeInTheDocument();
      expect(agentMenuItem).toBeInTheDocument();
      expect(myCruiseMenuItem).toBeInTheDocument();
      expect(helpMenuItem).toBeInTheDocument();
    });
  });

  it('route to correct location based on selected menu item', async () => {
    render(
      <Router location={history.location} navigator={history}>
        <CruiseSider />
      </Router>,
    );
    const agentMenuItem = screen.getByRole('link', {
      name: /agent/i,
    });

    await waitFor(() => {
      userEvent.click(agentMenuItem);

      expect(history.location.pathname).toBe('/agent');
    });
  });
});
