// import { gql } from '@apollo/client';
import { gql } from '../../__generated__';

const GET_AGENTS_QUERY = gql(/* GraphQL */ `
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
`);

export default GET_AGENTS_QUERY;
