import React, { PropsWithChildren } from 'react';
import { renderHook, RenderHookResult, waitFor } from '@testing-library/react';
import mockAgentsData from '../../mock/mockAgentsData';
import { AgentsContextProvider, ContextValues, useAgentsContext } from './index';
import { GlobalWrapper } from '../../utils/testUtils';

const AgentPageWrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <GlobalWrapper>
    <AgentsContextProvider>
      {children}
    </AgentsContextProvider>
  </GlobalWrapper>
);
describe('AgentsContext', () => {
  const render = (): RenderHookResult<ContextValues, undefined> => renderHook(
    () => useAgentsContext(),
    { wrapper: AgentPageWrapper },
  );

  it('should get mock data', async () => {
    const { result } = render();

    await waitFor(() => {
      expect(result.current.data).toStrictEqual(mockAgentsData);
    });
  });
});
