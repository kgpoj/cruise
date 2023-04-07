import { renderHook, RenderHookResult } from '@testing-library/react';
import mockAgentsData from '../../mock/mockAgentsData';
import { AgentsContextProvider, ContextValues, useAgentsContext } from './index';

describe('AgentsContext', () => {
  const render = (): RenderHookResult<ContextValues, undefined> => renderHook(
    () => useAgentsContext(),
    { wrapper: AgentsContextProvider },
  );

  it('should get mock data', () => {
    const { result } = render();

    expect(result.current.data).toBe(mockAgentsData);
  });
});
