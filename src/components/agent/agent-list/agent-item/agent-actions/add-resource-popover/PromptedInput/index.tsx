import React, { useState } from 'react';
import { Input } from 'antd';

interface Props {
  candidates: string[];
  separator?: string;
}

const PromptedInput: React.FC<Props> = ({ candidates, separator = ',' }) => {
  const [inputValue, setInputValue] = useState('');
  const [hint, setHint] = useState('');

  const candidatesLower = candidates
    .map((candidate) => candidate.toLowerCase())
    .sort((a, b) => a.length - b.length);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);

    const latestValueLower = e.target.value.toLowerCase().split(separator).pop();
    if (!latestValueLower) {
      setHint('');
      return;
    }
    const matchedCandidate = candidatesLower.find((word) => word.startsWith(latestValueLower)) || '';

    setHint(matchedCandidate.slice(latestValueLower.length));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if ((e.key === 'Tab' || e.key === 'ArrowRight') && hint) {
      e.stopPropagation();
      e.preventDefault();
      setInputValue(inputValue + hint + separator);
      setHint('');
    }
  };

  return (
    <Input
      value={inputValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      suffix={<span style={{ color: '#999' }}>{hint}</span>}
    />
  );
};

export default PromptedInput;
