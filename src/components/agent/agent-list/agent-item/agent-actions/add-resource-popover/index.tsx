import React, { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { Popover } from 'antd';
import { StyledButton } from '../../../../styles';

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
const AddResourcePopover: React.FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleCancelClick = (): void => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean): void => {
    setOpen(newOpen);
  };

  const content = (
    <div>
      <XButton
        onClick={handleCancelClick}
      >
        X
      </XButton>
      <p>Separate multiple resource name with commas</p>
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
