import React, { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { Popover } from 'antd';
import { StyledButton } from '../../../../styles';
import PromptedInput from './prompted-input';
import { Resource, ResourceName } from '../../../../../../interface/Agent';

interface Props {
  onConfirm: (resourceIds: string[]) => void;
}

const StyledPopover = styled(Popover)`
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 130px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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

const VALID_RESOURCES: Resource[] = [
  { id: '1', name: 'Firefox' },
  { id: '2', name: 'Chrome' },
  { id: '3', name: 'Safari' },
  { id: '4', name: 'Ubuntu' },
];
const ID_NOT_FOUND = 'ID_NOT_FOUND';
const getResourceByName = (name: string): Resource | undefined => VALID_RESOURCES
  .find((r: Resource) => r.name.toLowerCase() === name.toLowerCase());
const VALID_RESOURCE_PROMPT = 'Valid Resources: Firefox, Safari, Ubuntu, Chrome';
const separator = ',';

const AddResourcePopover: React.FC<PropsWithChildren<Props>> = ({ children, onConfirm }) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const validResourceNames: ResourceName[] = VALID_RESOURCES.map((resource) => resource.name);

  const handleCancelClick = (): void => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean): void => {
    setOpen(newOpen);
  };

  const handleInputChange = (value: string): void => {
    setInputValue(value);
    setError(false);
  };

  const checkValidated = (
    resourceIds: string[],
  ): boolean => resourceIds.every((resourceId) => resourceId !== ID_NOT_FOUND);
  const handleAddClick = (): void => {
    const resourceNames = inputValue.split(separator)
      .filter((name) => name)
      .map((name) => name.trim());

    const resourceIds = resourceNames
      .map((name) => getResourceByName(name)?.id || ID_NOT_FOUND);

    if (!checkValidated(resourceIds)) {
      setError(true);
      return;
    }
    onConfirm(resourceIds);
    setOpen(false);
  };

  const content = (
    <Content>
      <XButton
        onClick={handleCancelClick}
      >
        X
      </XButton>
      <InputWrapper>
        <p>Separate multiple resource name with commas</p>
        <PromptedInput
          placeholder={VALID_RESOURCE_PROMPT}
          candidates={validResourceNames}
          onInputChange={handleInputChange}
          status={error ? 'error' : ''}
          errorMessage={VALID_RESOURCE_PROMPT}
        />
      </InputWrapper>
      <ButtonsWrapper>
        <StyledButton onClick={handleAddClick}>Add Resources</StyledButton>
        <CancelButton onClick={handleCancelClick}>Cancel</CancelButton>
      </ButtonsWrapper>
    </Content>
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
