import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import Agent from './index';
import mockAgentsData from '../../mock/mockAgentsData';
import renderWithGlobalWrapper from '../../utils/testUtils';
import { AgentsContextProvider } from '../../hooks/useAgentsContext';

describe('Agent', () => {
  it('should render correctly', () => {
    renderWithGlobalWrapper(
      <AgentsContextProvider>
        <Agent />
      </AgentsContextProvider>,
    );

    mockAgentsData.map((agent) => agent.name).forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('should filter correctly', () => {
    renderWithGlobalWrapper(
      <AgentsContextProvider>
        <Agent />
      </AgentsContextProvider>,
    );

    waitFor(() => {
      userEvent.click(screen.getByRole('radio', { name: 'Virtual' }));

      const virtualAgents = mockAgentsData.filter((agent) => agent.agentType === 'virtual');
      const physicalAgents = mockAgentsData.filter((agent) => agent.agentType === 'physical');
      virtualAgents.map((agent) => agent.name).forEach((name) => {
        expect(screen.getByText(name)).toBeInTheDocument();
      });
      physicalAgents.map((agent) => agent.name).forEach((name) => {
        expect(screen.queryByText(name)).not.toBeInTheDocument();
      });
    });
  });
});
