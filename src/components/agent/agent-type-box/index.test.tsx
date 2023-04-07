import React from 'react';
import { screen } from '@testing-library/react';
import AgentTypeBox from './index';
import renderWithGlobalWrapper from '../../../utils/testUtils';

describe('AgentTypeBox', () => {
  const physicalCount = 4;
  const virtualCount = 5;

  it('should render ALL correctly', () => {
    renderWithGlobalWrapper(
      <AgentTypeBox physicalCount={physicalCount} virtualCount={virtualCount} />,
    );

    expect(screen.getByText('ALL')).toBeInTheDocument();
    expect(screen.getByText(physicalCount + virtualCount)).toBeInTheDocument();
  });

  it('should render PHYSICAL correctly', () => {
    renderWithGlobalWrapper(
      <AgentTypeBox physicalCount={physicalCount} virtualCount={virtualCount} />,
    );

    expect(screen.getByText('PHYSICAL')).toBeInTheDocument();
    expect(screen.getByText(physicalCount)).toBeInTheDocument();
  });

  it('should render VIRTUAL correctly', () => {
    renderWithGlobalWrapper(
      <AgentTypeBox physicalCount={physicalCount} virtualCount={virtualCount} />,
    );

    expect(screen.getByText('VIRTUAL')).toBeInTheDocument();
    expect(screen.getByText(virtualCount)).toBeInTheDocument();
  });
});
