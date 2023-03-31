export type Availability = 'building' | 'idle';

export type AgentType = 'physical' | 'virtual';

export type ResourceName = 'Firefox' | 'Chrome' | 'Safari' | 'Ubuntu';

export interface Resource {
  id: string;
  name: ResourceName;
}

export interface Agent {
  id: string;
  name: string;
  iconUrl: string;
  ipAddress: string;
  availability: Availability;
  agentType: AgentType;
  resources: Resource[];
}
