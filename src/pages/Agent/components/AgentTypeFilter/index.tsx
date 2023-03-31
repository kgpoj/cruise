import React from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import styled, { css } from 'styled-components';
import { Colors } from '../../../../interface/Colors';

interface AgentTypeFilterProps {
  onChange: (e: RadioChangeEvent) => void
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

const AgentTypeFilter = ({ onChange }: AgentTypeFilterProps): JSX.Element => (
  <StyledRadioGroup onChange={onChange} defaultValue="all">
    <Radio.Button value="all">All</Radio.Button>
    <Radio.Button value="physical">Physical</Radio.Button>
    <Radio.Button value="virtual">Virtual</Radio.Button>
  </StyledRadioGroup>
);

export default AgentTypeFilter;
