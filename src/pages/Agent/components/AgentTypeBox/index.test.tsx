import React from 'react';
import { render, screen } from '@testing-library/react';
import AgentTypeBox from './index';

describe('AgentTypeBox', () => {
  it('should render correctly', () => {
    const physicalCount = 4;
    const virtualCount = 5;
    render(<AgentTypeBox physicalCount={physicalCount} virtualCount={virtualCount} />);
    expect(screen.getByText('ALL')).toBeInTheDocument();
    expect(screen.getByText('PHYSICAL')).toBeInTheDocument();
    expect(screen.getByText('VIRTUAL')).toBeInTheDocument();
    expect(screen.getByText(physicalCount)).toBeInTheDocument();
    expect(screen.getByText(virtualCount)).toBeInTheDocument();
    expect(screen.getByText(physicalCount + virtualCount)).toBeInTheDocument();
  });
});
