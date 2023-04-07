import React from 'react';
import { AgentsContextProvider } from '../../hooks/useAgentsContext';
import Agent from '../../components/agent';

const AgentPage: React.FC = () => (
  <AgentsContextProvider>
    <Agent />
  </AgentsContextProvider>
);

export default AgentPage;
