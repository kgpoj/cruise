import React, { useEffect, useState } from 'react';
import { Input, InputProps } from 'antd';
import styled from 'styled-components';

interface Props extends InputProps {
  value?: string;
  candidates: string[],
  separator?: string,
  onInputChange: (value: string) => void,
  errorMessage?: string
}

interface HintProps {
  offset: number;
}

const INPUT_PADDING_LEFT = 11;

const StyledInput = styled(Input)`
  font-size: 12px;
  position: relative;
  padding-left: ${INPUT_PADDING_LEFT}px;
  
  & input {
    font-family: Monaco, monospace;
  }
`;

const Hint = styled.span<HintProps>`
  font-family: Monaco, monospace;
  color: #999;
  position: absolute;
  left: ${(props) => INPUT_PADDING_LEFT + props.offset}px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const PromptedInput: React.FC<Props> = ({
  value: propValue = '',
  candidates,
  separator = ',',
  onInputChange,
  errorMessage,
  status,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState(propValue);
  const [hint, setHint] = useState('');

  useEffect(() => {
    setInputValue(propValue);
  }, [propValue]);

  useEffect(() => {
    onInputChange(inputValue);
    updateHint(inputValue);
  }, [inputValue]);

  const offset = 7.2 * inputValue.length;

  const candidatesLower = candidates
    .map((candidate) => candidate.toLowerCase())
    .sort((a, b) => a.length - b.length);

  const getHint = (typingWord: string | undefined): string => {
    if (!typingWord) {
      return '';
    }
    const matchedCandidate = candidatesLower.find((word) => word.startsWith(typingWord)) || '';

    return matchedCandidate.slice(typingWord.length);
  };

  const updateHint = (value: string): void => {
    const latestValueLower = value.toLowerCase()
      .split(separator)
      .pop();

    setHint(getHint(latestValueLower));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
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
    <>
      <StyledInput
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        suffix={<Hint offset={offset}>{hint}</Hint>}
        status={status}
        {...rest}
      />
      {status === 'error' && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};

export default PromptedInput;
