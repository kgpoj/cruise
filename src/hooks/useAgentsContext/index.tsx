import React, { createContext, useContext } from 'react';
import { Agent } from '../../interface/Agent';
import mockAgentsData from '../../mock/mockAgentsData';

export interface ContextValues {
  data: Agent[];
}

const AgentsContext = createContext({} as ContextValues);

interface Props {
  children: React.ReactNode;
}

const exposedValues = {
  data: mockAgentsData,
};

export const AgentsContextProvider: React.FC<Props> = ({ children }) => (
  <AgentsContext.Provider value={exposedValues}>
    {children}
  </AgentsContext.Provider>
);

export const useAgentsContext = (): ContextValues => useContext(AgentsContext);
