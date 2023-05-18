import React from 'react';
import { List } from 'antd';
import { Agent } from '../../../interface/Agent';
import AgentItem from './agent-item';

interface AgentListProps {
  dataSource: Agent[]
}

const AgentList = ({ dataSource }: AgentListProps): JSX.Element => (
  <List
    itemLayout="horizontal"
    dataSource={dataSource}
    renderItem={(item) => (
      <AgentItem
        id={item.id}
        iconUrl={item.iconUrl}
        name={item.name}
        availability={item.availability}
        ipAddress={item.ipAddress}
        resources={item.resources}
      />
    )}
  />
);

export default AgentList;
