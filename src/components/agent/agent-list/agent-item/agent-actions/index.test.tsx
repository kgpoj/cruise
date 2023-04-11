import React from 'react';
import { screen } from '@testing-library/react';
import 'jest-styled-components';
import AgentActions, { AgentActionsProps } from './index';
import { renderWithThemeWrapper } from '../../../../../utils/testUtils';
import { Availability, Resource } from '../../../../../interface/Agent';

type WrapperFunc = (props?: AgentActionsProps) => void;

describe('AgentActions', () => {
  const mockResources: Resource[] = [
    {
      id: '1',
      name: 'Firefox',
    },
    {
      id: '2',
      name: 'Chrome',
    },
    {
      id: '3',
      name: 'Safari',
    },
    {
      id: '4',
      name: 'Ubuntu',
    },
  ];
  const mockAvailability: Availability = 'idle';
  const wrapper: WrapperFunc = (props?: AgentActionsProps) => {
    renderWithThemeWrapper(
      <AgentActions
        resources={mockResources}
        availability={mockAvailability}
        {...props}
      />,
    );
  };
  beforeEach(() => {
    wrapper();
  });

  it('should render resources correctly', () => {
    mockResources.forEach((resource) => {
      expect(screen.getByText(resource.name))
        .toBeInTheDocument();
    });
  });

  it('should render trash icon correctly', () => {
    expect(screen.getAllByTestId('trash-icon'))
      .toHaveLength(mockResources.length);
  });

  it('should trash icon be clickable', () => {
    const trashIcon = screen.getAllByTestId('trash-icon')[0];
    expect(trashIcon).toHaveStyle('cursor: pointer');
  });

  it('should trash turn red when hover', () => {
    const trashIcon = screen.getAllByTestId('trash-icon')[0];
    expect(trashIcon).toHaveStyleRule('color', 'red', {
      modifier: ':hover',
    });
  });
});
