import React from 'react';
import { render, screen } from '@testing-library/react';
import AgentTypeFilter from './index';

describe('AgentTypeFilter', () => {
  it('should render tab labels', () => {
    const labels = ['All', 'Physical', 'Virtual'];

    render(<AgentTypeFilter onChange={jest.fn} />);

    labels.forEach((label) => {
      const radio = screen.getByRole('radio', { name: label });
      expect(radio).toBeInTheDocument();
    });
  });
});
