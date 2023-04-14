import React from 'react';
import { screen } from '@testing-library/react';
import AgentList from './index';
import mockAgentsData from '../../../mock/mockAgentsData';
import renderWithGlobalWrapper from '../../../utils/testUtils';

describe('AgentList', () => {
  it('should render correctly', () => {
    renderWithGlobalWrapper(<AgentList dataSource={mockAgentsData} />);
    const listItems = screen.getAllByRole('listitem');

    expect(listItems).toHaveLength(mockAgentsData.length);
  });
});
