import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PromptedInput from './index';

describe('PromptedInput', () => {
  const candidates = ['firefox', 'fire', 'fires', 'chrome'];

  it('should display input value', () => {
    render(<PromptedInput candidates={candidates} />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'firefox');
    expect(input).toHaveValue('firefox');
  });

  it('should display hint for matched candidate', () => {
    render(<PromptedInput candidates={candidates} />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'f');
    expect(screen.getByText('ire')).toBeInTheDocument();
  });

  it('should autocomplete with hint when Tab key is pressed', () => {
    render(<PromptedInput candidates={candidates} />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'f');
    userEvent.tab();
    expect(input).toHaveValue('fire,');
  });

  it('should autocomplete with hint when ArrowRight key is pressed', () => {
    render(<PromptedInput candidates={candidates} />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'f');
    userEvent.keyboard('{arrowright}');
    expect(input).toHaveValue('fire,');
  });

  it('should display hint for matched candidate when separator is entered', () => {
    render(<PromptedInput candidates={candidates} />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'fire,firef');
    expect(screen.getByText('ox')).toBeInTheDocument();
  });

  it('should autocomplete with hint and separator when Tab key is pressed', () => {
    render(<PromptedInput candidates={candidates} />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'fire,firef');
    userEvent.tab();
    expect(input).toHaveValue('fire,firefox,');
  });
});
