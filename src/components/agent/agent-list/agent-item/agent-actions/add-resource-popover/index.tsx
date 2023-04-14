import React, { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { Input, Popover } from 'antd';
import { StyledButton } from '../../../../styles';

const StyledPopover = styled(Popover)`
  position: relative;
`;

const StyledInput = styled(Input)`
  font-size: 12px;
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

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;

const INVALID_CHARACTER = 'Please enter commas for separation';
const VALID_RESOURCE_PROMPT = 'Valid Resources: Firefox, Safari, Ubuntu, Chrome';
const VALID_RESOURCES = ['firefox', 'chrome', 'safari', 'ubuntu'];
const AddResourcePopover: React.FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');

  const handleCancelClick = (): void => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean): void => {
    setOpen(newOpen);
  };

  const isInvalidResource = (input: string): boolean => {
    const [latestResource, ...previousResources] = input.toLowerCase().split(',').reverse();
    const previousResourcesInvalid = previousResources
      .some((resource) => !VALID_RESOURCES.includes(resource));
    const latestResourceInvalid = !VALID_RESOURCES
      .some((validResource) => validResource.startsWith(latestResource));
    return latestResourceInvalid || previousResourcesInvalid;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const inputPattern = /^[a-zA-Z,]*$/;
    if (!inputPattern.test(event.target.value)) {
      setError(INVALID_CHARACTER);
    } else if (isInvalidResource(event.target.value)) {
      setError(VALID_RESOURCE_PROMPT);
    } else {
      setError('');
    }
  };

  const content = (
    <div>
      <XButton
        onClick={handleCancelClick}
      >
        X
      </XButton>
      <p>Separate multiple resource name with commas</p>
      <StyledInput
        placeholder={VALID_RESOURCE_PROMPT}
        onChange={handleInputChange}
        status={error ? 'error' : ''}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
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
