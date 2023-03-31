import React from 'react';
import { render, screen } from '@testing-library/react';
import AgentList from './index';
import agentListData from '../../../../mock/agentMockData';

describe('AgentList', () => {
  it('should render correctly', () => {
    render(<AgentList dataSource={agentListData} />);
    expect(screen.getByText('Agent 1')).toBeInTheDocument();
  });
});
