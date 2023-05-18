import {
  AgentType,
  Availability,
  ResourceName,
  Agent as AgentGql,
  Resource as ResourceGql,
} from '../__generated__/graphql';

export { Availability, ResourceName, AgentType };

export type Agent = Omit<AgentGql, '__typename'>;
export type Resource = Omit<ResourceGql, '__typename'>;

export type TypeFilter = AgentType | 'all';
