import {
  Agent, AgentType, Availability, ResourceName,
} from '../interface/Agent';

const mockAgentsData: Agent[] = [
  {
    id: '1',
    name: 'Agent 1',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '192.168.1.102',
    availability: Availability.Building,
    agentType: AgentType.Physical,
    resources: [
      {
        id: '1',
        name: ResourceName.Firefox,
      },
      {
        id: '2',
        name: ResourceName.Chrome,
      },
      {
        id: '3',
        name: ResourceName.Safari,
      },
      {
        id: '4',
        name: ResourceName.Ubuntu,
      },
    ],
  },
  {
    id: '2',
    name: 'Agent 2',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '192.168.1.103',
    availability: Availability.Idle,
    agentType: AgentType.Virtual,
    resources: [
      {
        id: '1',
        name: ResourceName.Firefox,
      },
      {
        id: '2',
        name: ResourceName.Chrome,
      },
    ],
  },
  {
    id: '3',
    name: 'Agent 3',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '192.168.1.104',
    availability: Availability.Building,
    agentType: AgentType.Physical,
    resources: [
      {
        id: '1',
        name: ResourceName.Firefox,
      },
      {
        id: '2',
        name: ResourceName.Chrome,
      },
      {
        id: '3',
        name: ResourceName.Safari,
      },
    ],
  },
  {
    id: '4',
    name: 'Agent 4',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '192.168.1.105',
    availability: Availability.Idle,
    agentType: AgentType.Virtual,
    resources: [
      {
        id: '1',
        name: ResourceName.Firefox,
      },
    ],
  },
  {
    id: '5',
    name: 'Agent 5',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '192.168.1.106',
    availability: Availability.Building,
    agentType: AgentType.Physical,
    resources: [],
  },
  {
    id: '6',
    name: 'Agent 6',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '192.168.1.107',
    availability: Availability.Idle,
    agentType: AgentType.Virtual,
    resources: [
      {
        id: '4',
        name: ResourceName.Ubuntu,
      },
    ],
  },
  {
    id: '7',
    name: 'Agent 7',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '192.168.1.108',
    availability: Availability.Building,
    agentType: AgentType.Physical,
    resources: [
      {
        id: '2',
        name: ResourceName.Chrome,
      },
    ],
  },
  {
    id: '8',
    name: 'Agent 8',
    iconUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    ipAddress: '192.168.1.109',
    availability: Availability.Idle,
    agentType: AgentType.Virtual,
    resources: [
      {
        id: '3',
        name: ResourceName.Safari,
      },
    ],
  },
];

export default mockAgentsData;
