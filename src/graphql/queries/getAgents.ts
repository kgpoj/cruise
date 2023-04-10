import { gql } from '@apollo/client';

const GET_AGENTS_QUERY = gql`
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

export default GET_AGENTS_QUERY;
