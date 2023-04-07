import React, { useMemo } from 'react';
import { AgentsContext, ContextValues } from '../hooks/useAgentsContext';
import mockAgentsData from '../mock/mockAgentsData';

interface Props extends Partial<ContextValues> {
  children: React.ReactNode;
}

const MockedAgentsContextProvider: React.FC<Props> = ({
  children,
  data = mockAgentsData,
}) => {
  const mockContextValue: ContextValues = useMemo(() => ({ data }), [data]);

  return (
    <AgentsContext.Provider value={mockContextValue}>
      {children}
    </AgentsContext.Provider>
  );
};

export default MockedAgentsContextProvider;
