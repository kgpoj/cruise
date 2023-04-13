import React from 'react';
import { screen } from '@testing-library/react';
import 'jest-styled-components';
import userEvent from '@testing-library/user-event';
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
  const mockOnResourceDelete = jest.fn();
  const wrapper: WrapperFunc = (props?: AgentActionsProps) => {
    renderWithThemeWrapper(
      <AgentActions
        resources={mockResources}
        availability={mockAvailability}
        onResourceDelete={mockOnResourceDelete}
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

  it('should call onResourceDelete when click trash icon', () => {
    const trashIcon = screen.getAllByTestId('trash-icon')[0];
    userEvent.click(trashIcon);
    expect(mockOnResourceDelete).toHaveBeenCalledWith(mockResources[0].id);
  });

  it('should show popover when click add resource button', () => {
    const addResourceButton = screen.getByRole('button', { name: '+' });
    userEvent.click(addResourceButton);
    expect(screen.getByText('Separate multiple resource name with commas')).toBeVisible();
  });

  it('should hide popover when click cancel button', () => {
    const addResourceButton = screen.getByRole('button', { name: '+' });
    userEvent.click(addResourceButton);
    const cancelButton = screen.getByRole('button', { name: 'Cancel' });
    userEvent.click(cancelButton);
    expect(screen.getByText('Separate multiple resource name with commas'))
      .not
      .toBeVisible();
  });

  it('should hide popover when click x button', () => {
    const addResourceButton = screen.getByRole('button', { name: '+' });
    userEvent.click(addResourceButton);
    const xButton = screen.getByRole('button', { name: 'X' });
    userEvent.click(xButton);
    expect(screen.getByText('Separate multiple resource name with commas'))
      .not
      .toBeVisible();
  });
});
