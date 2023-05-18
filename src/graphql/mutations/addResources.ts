import { gql } from '@apollo/client';
import AGENT_FIELDS from '../fragments/agentFields';

const ADD_RESOURCES_MUTATION = gql`
    ${AGENT_FIELDS}
    mutation addResources($agentId: String!, $resourceIds: [String!]!) {
        addResources(agentId: $agentId, resourceIds: $resourceIds) {
            ...AgentFields
        }
    }
`;

export default ADD_RESOURCES_MUTATION;
