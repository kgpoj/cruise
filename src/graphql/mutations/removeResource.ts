import { gql } from '@apollo/client';
import AGENT_FIELDS from '../fragments/agentFields';

const REMOVE_RESOURCE_MUTATION = gql`
    ${AGENT_FIELDS}
    mutation removeResource($agentId: String!, $resourceId: String!) {
        removeResource(agentId: $agentId, resourceId: $resourceId) {
            ...AgentFields
        }
    }
`;

export default REMOVE_RESOURCE_MUTATION;
