import React, { createContext, useContext, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { Agent } from '../../interface/Agent';
import GET_AGENTS_QUERY from '../../graphql/queries/getAgents';
// import { GetAgentsResponse } from '../../interface/graphql/queries/GetAgentsResponse';

export interface ContextValues {
  data: Agent[];
}

export const AgentsContext = createContext({} as ContextValues);

interface Props {
  children: React.ReactNode;
}

export const AgentsContextProvider: React.FC<Props> = ({ children }) => {
  const { data } = useQuery(GET_AGENTS_QUERY);
  const exposedValues = useMemo(() => ({ data: data?.agents || [] }), [data]);

  return (
    <AgentsContext.Provider value={exposedValues}>
      {children}
    </AgentsContext.Provider>
  );
};

export const useAgentsContext = (): ContextValues => useContext(AgentsContext);
