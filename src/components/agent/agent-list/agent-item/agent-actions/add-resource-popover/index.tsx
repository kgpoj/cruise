import React, { PropsWithChildren, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Popover } from 'antd';
import { StyledButton } from '../../../../styles';
import PromptedInput from './PromptedInput';

const StyledPopover = styled(Popover)`
  position: relative;
`;

const CancelButton = styled(StyledButton)`
  background-color: #485362;
`;

const XButton = styled.button`
  position: absolute;
  top: 10px;
  right: 12px;
  background-color: transparent;
  border: none;
  font-weight: bold;
  padding: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
`;

const VALID_RESOURCE_PROMPT = 'Valid Resources: Firefox, Safari, Ubuntu, Chrome';
const VALID_RESOURCES = ['firefox', 'chrome', 'safari', 'ubuntu'];
const AddResourcePopover: React.FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  const handleCancelClick = (): void => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean): void => {
    setOpen(newOpen);
  };

  const handleInputChange = (value: string): void => {
    setInputValue(value);
  };

  const content = (
    <div>
      <XButton
        onClick={handleCancelClick}
      >
        X
      </XButton>
      <p>Separate multiple resource name with commas</p>
      <PromptedInput
        placeholder={VALID_RESOURCE_PROMPT}
        candidates={VALID_RESOURCES}
        onInputChange={handleInputChange}
      />
      <CancelButton onClick={handleCancelClick}>Cancel</CancelButton>
    </div>
  );

  return (
    <StyledPopover
      placement="bottomLeft"
      content={content}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      {children}
    </StyledPopover>
  );
};

export default AddResourcePopover;
