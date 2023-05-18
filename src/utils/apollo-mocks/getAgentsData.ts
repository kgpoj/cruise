import GET_AGENTS_QUERY from '../../graphql/queries/getAgents';
import mockAgentsData from '../../mock/mockAgentsData';

const getAgentsDataMockQuery = {
  request: {
    query: GET_AGENTS_QUERY,
  },
  result: {
    data: {
      agents: mockAgentsData,
    },
  },
};

export default getAgentsDataMockQuery;
