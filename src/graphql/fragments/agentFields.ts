import { gql } from '@apollo/client';

const AGENT_FIELDS = gql`
    fragment AgentFields on Agent {
        id
        name
        iconUrl
        ipAddress
        availability
        agentType
        resources {
            id
            name
        }
    }
`;

export default AGENT_FIELDS;
