import React from 'react';
import styled from 'styled-components';
import { Avatar, List } from 'antd';
import { useMutation } from '@apollo/client';
import { Availability, Resource } from '../../../../interface/Agent';
import AgentInfos from './agent-infos';
import AgentActions from './agent-actions';
import ADD_RESOURCES_MUTATION from '../../../../graphql/mutations/addResources';
import REMOVE_RESOURCE_MUTATION from '../../../../graphql/mutations/removeResource';

interface AgentItemProps {
  iconUrl?: string | null,
  name: string,
  availability: Availability,
  ipAddress: string,
  resources: Resource[],
  id: string,
}

const StyledListItem = styled(List.Item)`
  background-color: white;
  margin-top: 10px;
  justify-content: space-around;
  column-gap: 20px;
  padding: 10px !important;
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.normal};
`;

const StyledAvatar = styled(Avatar)`
  display: none;

  ${({ theme }) => theme.mediaQueries.isDesktop} {
    display: block;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  row-gap: 20px;

  ${({ theme }) => theme.mediaQueries.isMobile} {
    margin-left: 5px;
  }
`;

const AgentItem: React.FC<AgentItemProps> = ({
  iconUrl,
  name,
  availability,
  ipAddress,
  resources,
  id: agentId,
}) => {
  const [removeResource] = useMutation(REMOVE_RESOURCE_MUTATION);
  const [addResources] = useMutation(ADD_RESOURCES_MUTATION);

  const handleResourceDelete = (resourceId: string): void => {
    removeResource({
      variables: {
        agentId,
        resourceId,
      },
    });
  };

  const handleResourcesAdd = (resourceIds: string[]): void => {
    addResources({
      variables: {
        agentId,
        resourceIds,
      },
    });
  };

  return (
    <StyledListItem>
      <StyledAvatar src={iconUrl} size="large" />
      <Content>
        <AgentInfos ipAddress={ipAddress} name={name} availability={availability} />
        <AgentActions
          resources={resources}
          availability={availability}
          onResourceDelete={handleResourceDelete}
          onResourcesAdd={handleResourcesAdd}
        />
      </Content>
    </StyledListItem>
  );
};

export default AgentItem;
