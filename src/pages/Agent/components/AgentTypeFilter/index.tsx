import React from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';

interface AgentTypeFilterProps {
  onChange: (e: RadioChangeEvent) => void
}

const AgentTypeFilter = ({ onChange }: AgentTypeFilterProps): JSX.Element => (
  <Radio.Group onChange={onChange} defaultValue="all">
    <Radio.Button value="all">All</Radio.Button>
    <Radio.Button value="physical">Physical</Radio.Button>
    <Radio.Button value="virtual">Virtual</Radio.Button>
  </Radio.Group>
);

export default AgentTypeFilter;
