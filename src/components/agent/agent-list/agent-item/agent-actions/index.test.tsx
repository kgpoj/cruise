import React from 'react';
import { screen } from '@testing-library/react';
import 'jest-styled-components';
import userEvent from '@testing-library/user-event';
import AgentActions, { AgentActionsProps } from './index';
import { renderWithThemeWrapper } from '../../../../../utils/testUtils';
import { Availability, Resource } from '../../../../../interface/Agent';

type WrapperFunc = (props?: AgentActionsProps) => void;

describe('AgentActions', () => {
  const addResourcePopoverText = 'Separate multiple resource name with commas';
  const popoverInputPromptText = 'Valid Resources: Firefox, Safari, Ubuntu, Chrome';
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
  const mockOnResourcesAdd = jest.fn();

  const wrapper: WrapperFunc = (props?: AgentActionsProps) => {
    renderWithThemeWrapper(
      <AgentActions
        resources={mockResources}
        availability={mockAvailability}
        onResourceDelete={mockOnResourceDelete}
        onResourcesAdd={mockOnResourcesAdd}
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

  describe('add resource popover', () => {
    const showPopover = (): void => {
      const plusButton = screen.getByRole('button', { name: '+' });
      userEvent.click(plusButton);
    };

    beforeEach(() => {
      showPopover();
    });

    it('should show popover when click add resource button', () => {
      expect(screen.getByText(addResourcePopoverText)).toBeVisible();
    });

    it('should hide popover when click cancel button', () => {
      const cancelButton = screen.getByRole('button', { name: 'Cancel' });
      userEvent.click(cancelButton);
      expect(screen.getByText(addResourcePopoverText))
        .not
        .toBeVisible();
    });

    it('should hide popover when click x button', () => {
      const xButton = screen.getByRole('button', { name: 'X' });
      userEvent.click(xButton);
      expect(screen.getByText(addResourcePopoverText))
        .not
        .toBeVisible();
    });

    it('should have placeholder text', () => {
      expect(screen.getByPlaceholderText(popoverInputPromptText))
        .toBeVisible();
    });

    it('should render `Add Resources` button', () => {
      expect(screen.getByRole('button', { name: 'Add Resources' }))
        .toBeVisible();
    });

    it('should hide popover when click `Add Resources` button with empty input', () => {
      const addResourcesButton = screen.getByRole('button', { name: 'Add Resources' });
      userEvent.click(addResourcesButton);
      expect(screen.getByText(addResourcePopoverText))
        .not
        .toBeVisible();
    });

    it('should not hide popover when click `Add Resources` button with invalid resource', () => {
      const addResourcesButton = screen.getByRole('button', { name: 'Add Resources' });
      const input = screen.getByPlaceholderText(popoverInputPromptText);
      userEvent.type(input, 'invalid resource');
      userEvent.click(addResourcesButton);
      expect(screen.getByText(addResourcePopoverText))
        .toBeVisible();
    });

    it('should show error message when click `Add Resources` button with invalid resource', () => {
      const addResourcesButton = screen.getByRole('button', { name: 'Add Resources' });
      const input = screen.getByPlaceholderText(popoverInputPromptText);
      userEvent.type(input, 'invalid resource');
      userEvent.click(addResourcesButton);
      expect(screen.getByText(popoverInputPromptText))
        .toBeVisible();
    });

    it('should hide popover when click `Add Resources` button with valid resource', () => {
      const addResourcesButton = screen.getByRole('button', { name: 'Add Resources' });
      const input = screen.getByPlaceholderText(popoverInputPromptText);
      userEvent.type(input, 'Firefox, Chrome, Safari,');
      userEvent.click(addResourcesButton);
      expect(screen.getByText(addResourcePopoverText))
        .not
        .toBeVisible();
    });

    it('should call onResourcesAdd when click `Add Resources` button with valid resource', () => {
      const addResourcesButton = screen.getByRole('button', { name: 'Add Resources' });
      const input = screen.getByPlaceholderText(popoverInputPromptText);
      userEvent.type(input, 'Firefox, Chrome, Safari,');
      userEvent.click(addResourcesButton);
      expect(mockOnResourcesAdd)
        .toHaveBeenCalledWith(['1', '2', '3']);
    });

    it('should clear input when reopen popover', () => {
      const addResourcesButton = screen.getByRole('button', { name: 'Add Resources' });
      const input = screen.getByPlaceholderText(popoverInputPromptText);
      userEvent.type(input, 'Firefox, Chrome, Safari,');
      userEvent.click(addResourcesButton);
      showPopover();
      expect(input)
        .toHaveValue('');
    });
  });
});
