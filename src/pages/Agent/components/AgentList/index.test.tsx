import React from 'react';
import { screen } from '@testing-library/react';
import AgentList from './index';
import agentListData from '../../../../mock/agentMockData';
import renderWithGlobalWrapper from '../../../../utils/testUtils';

describe('AgentList', () => {
  it('should render correctly', () => {
    renderWithGlobalWrapper(<AgentList dataSource={agentListData} />);
    expect(screen.getByText('Agent 1')).toBeInTheDocument();
  });
});
