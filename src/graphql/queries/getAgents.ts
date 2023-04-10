import { gql } from '@apollo/client';

const AGENTS_QUERY = gql`
    query getAgents{
        agents {
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
    }
`;

export default AGENTS_QUERY;
