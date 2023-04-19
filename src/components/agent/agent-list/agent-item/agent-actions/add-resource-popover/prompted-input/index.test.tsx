import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PromptedInput from './index';
import { renderWithThemeWrapper } from '../../../../../../../utils/testUtils';

describe('PromptedInput', () => {
  const candidates = ['firefox', 'fire', 'fires', 'chrome'];
  const wrapper = (): void => {
    renderWithThemeWrapper(
      <PromptedInput
        candidates={candidates}
        onInputChange={jest.fn()}
      />,
    );
  };
  beforeEach(() => {
    wrapper();
  });

  it('should display input value', () => {
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'firefox');
    expect(input).toHaveValue('firefox');
  });

  it('should display hint for matched candidate', () => {
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'f');
    expect(screen.getByText('fire')).toBeInTheDocument();
  });

  it('should autocomplete with hint when Tab key is pressed', () => {
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'f');
    userEvent.tab();
    expect(input).toHaveValue('fire,');
  });

  it('should autocomplete with hint when ArrowRight key is pressed', () => {
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'f');
    userEvent.keyboard('{arrowright}');
    expect(input).toHaveValue('fire,');
  });

  it('should display hint for matched candidate when separator is entered', () => {
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'fire,firef');
    expect(screen.getByText('fire,firefox')).toBeInTheDocument();
  });

  it('should autocomplete with hint and separator when Tab key is pressed', () => {
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'fire,firef');
    userEvent.tab();
    expect(input).toHaveValue('fire,firefox,');
  });
});
