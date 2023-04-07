import { Agent } from '../interface/Agent';

const mockAgentsData: Agent[] = [
  {
    id: '1',
    name: 'Agent 1',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '192.168.1.102',
    availability: 'building',
    agentType: 'physical',
    resources: [
      {
        id: '1',
        name: 'Firefox',
      },
      {
        id: '2',
        name: 'Chrome',
      },
      {
        id: '3',
        name: 'Safari',
      },
      {
        id: '4',
        name: 'Ubuntu',
      },
    ],
  },
  {
    id: '2',
    name: 'Agent 2',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '192.168.1.103',
    availability: 'idle',
    agentType: 'virtual',
    resources: [
      {
        id: '1',
        name: 'Firefox',
      },
      {
        id: '2',
        name: 'Chrome',
      },
    ],
  },
  {
    id: '3',
    name: 'Agent 3',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '192.168.1.104',
    availability: 'building',
    agentType: 'physical',
    resources: [
      {
        id: '1',
        name: 'Firefox',
      },
      {
        id: '2',
        name: 'Chrome',
      },
      {
        id: '3',
        name: 'Safari',
      },
    ],
  },
  {
    id: '4',
    name: 'Agent 4',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '192.168.1.105',
    availability: 'idle',
    agentType: 'virtual',
    resources: [
      {
        id: '1',
        name: 'Firefox',
      },
    ],
  },
  {
    id: '5',
    name: 'Agent 5',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '',
    availability: 'building',
    agentType: 'physical',
    resources: [],
  },
  {
    id: '6',
    name: 'Agent 6',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '',
    availability: 'idle',
    agentType: 'virtual',
    resources: [
      {
        id: '4',
        name: 'Ubuntu',
      },
    ],
  },
  {
    id: '7',
    name: 'Agent 7',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '',
    availability: 'building',
    agentType: 'physical',
    resources: [
      {
        id: '2',
        name: 'Chrome',
      },
    ],
  },
  {
    id: '8',
    name: 'Agent 8',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '',
    availability: 'idle',
    agentType: 'virtual',
    resources: [
      {
        id: '3',
        name: 'Safari',
      },
    ],
  },
];

export default mockAgentsData;
