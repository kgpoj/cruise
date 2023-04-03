import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import Agent from './index';
import CruiseContextProvider from '../../store/CruiseContextProvider';
import agentListData from '../../mock/agentMockData';

describe('Agent', () => {
  it('should render correctly', () => {
    render(
      <Agent />,
      { wrapper: CruiseContextProvider },
    );

    agentListData.map((agent) => agent.name).forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('should filter correctly', () => {
    render(
      <Agent />,
      { wrapper: CruiseContextProvider },
    );

    waitFor(() => {
      userEvent.click(screen.getByRole('radio', { name: 'Virtual' }));

      const virtualAgents = agentListData.filter((agent) => agent.agentType === 'virtual');
      const physicalAgents = agentListData.filter((agent) => agent.agentType === 'physical');
      virtualAgents.map((agent) => agent.name).forEach((name) => {
        expect(screen.getByText(name)).toBeInTheDocument();
      });
      physicalAgents.map((agent) => agent.name).forEach((name) => {
        expect(screen.queryByText(name)).not.toBeInTheDocument();
      });
    });
  });
});
