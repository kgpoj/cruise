import React from 'react';
import { screen } from '@testing-library/react';
import AgentTypeFilter from './index';
import renderWithGlobalWrapper from '../../../../utils/testUtils';

describe('AgentTypeFilter', () => {
  it('should render tab labels', () => {
    const labels = ['All', 'Physical', 'Virtual'];

    renderWithGlobalWrapper(<AgentTypeFilter onChange={jest.fn} />);

    labels.forEach((label) => {
      const radio = screen.getByRole('radio', { name: label });
      expect(radio).toBeInTheDocument();
    });
  });
});
