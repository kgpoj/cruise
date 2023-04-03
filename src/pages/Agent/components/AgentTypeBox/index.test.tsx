import React from 'react';
import { render, screen } from '@testing-library/react';
import AgentTypeBox from './index';

describe('AgentTypeBox', () => {
  const physicalCount = 4;
  const virtualCount = 5;

  it('should render ALL correctly', () => {
    render(<AgentTypeBox physicalCount={physicalCount} virtualCount={virtualCount} />);

    expect(screen.getByText('ALL')).toBeInTheDocument();
    expect(screen.getByText(physicalCount + virtualCount)).toBeInTheDocument();
  });

  it('should render PHYSICAL correctly', () => {
    render(<AgentTypeBox physicalCount={physicalCount} virtualCount={virtualCount} />);

    expect(screen.getByText('PHYSICAL')).toBeInTheDocument();
    expect(screen.getByText(physicalCount)).toBeInTheDocument();
  });

  it('should render VIRTUAL correctly', () => {
    render(<AgentTypeBox physicalCount={physicalCount} virtualCount={virtualCount} />);

    expect(screen.getByText('VIRTUAL')).toBeInTheDocument();
    expect(screen.getByText(virtualCount)).toBeInTheDocument();
  });
});
