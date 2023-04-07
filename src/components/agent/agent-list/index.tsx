import React from 'react';
import { Avatar, List } from 'antd';
import { Agent } from '../../../interface/Agent';

interface AgentListProps {
  dataSource: Agent[]
}

const AgentList = ({ dataSource }: AgentListProps): JSX.Element => (
  <List
    itemLayout="horizontal"
    dataSource={dataSource}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={item.iconUrl} />}
          title={item.name}
          description={`agentType: ${item.agentType}`}
        />
      </List.Item>
    )}
  />
);

export default AgentList;
