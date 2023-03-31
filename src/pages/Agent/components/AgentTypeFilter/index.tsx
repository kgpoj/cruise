import React from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import styled, { css } from 'styled-components';
import { Colors } from '../../../../interface/Colors';
import { TypeFilter } from '../../../../interface/Agent';

interface AgentTypeFilterProps {
  onChange: (e: RadioChangeEvent) => void
}

interface AgentTypeButtonProps {
  value: TypeFilter;
  children: React.ReactNode;
}

const COLORS: Colors = {
  GREY: (props) => props.theme.colors.grey,
  PRIMARY: (props) => props.theme.colors.primary,
};

const checkedStyle = css`
  border-color: ${COLORS.GREY};
  border-bottom: 3px solid ${COLORS.PRIMARY};
  color: ${COLORS.PRIMARY};
`;

const StyledRadioGroup = styled(Radio.Group)`
  .ant-radio-button-wrapper {
    overflow: hidden;
    border-radius: 0;
    border: none;
    border-right: 1px solid ${COLORS.GREY};

    &:hover {
      border-bottom: 3px solid ${COLORS.PRIMARY};
      color: ${COLORS.PRIMARY};
    }

    &::before, &:hover::before {
      background-color: ${COLORS.GREY};
    }
  }

  .ant-radio-button-wrapper-checked {
    ${checkedStyle}

    &:hover, &:first-child {
      ${checkedStyle}
    }
  }
`;

const AgentTypeButton = ({ value, children }: AgentTypeButtonProps): JSX.Element => (
  <Radio.Button value={value}>{children}</Radio.Button>
);

const AgentTypeFilter = ({ onChange }: AgentTypeFilterProps): JSX.Element => (
  <StyledRadioGroup onChange={onChange} defaultValue="all">
    <AgentTypeButton value="all">All</AgentTypeButton>
    <AgentTypeButton value="physical">Physical</AgentTypeButton>
    <AgentTypeButton value="virtual">Virtual</AgentTypeButton>
  </StyledRadioGroup>
);

export default AgentTypeFilter;
