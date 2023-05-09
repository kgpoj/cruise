/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Agent = {
  __typename?: 'Agent';
  agentType: AgentType;
  availability: Availability;
  iconUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ipAddress: Scalars['String'];
  name: Scalars['String'];
  resources: Array<Resource>;
};

export enum AgentType {
  Physical = 'physical',
  Virtual = 'virtual'
}

export enum Availability {
  Building = 'building',
  Idle = 'idle'
}

export type CreateAgentInput = {
  agentType?: AgentType;
  availability?: Availability;
  iconUrl?: InputMaybe<Scalars['String']>;
  ipAddress: Scalars['String'];
  name: Scalars['String'];
  resources: Array<ResourceInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addResources: Agent;
  createAgent: Agent;
  removeAgent: Agent;
  removeResource: Agent;
  updateAgent: Agent;
};


export type MutationAddResourcesArgs = {
  agentId: Scalars['String'];
  resourceIds: Array<Scalars['String']>;
};


export type MutationCreateAgentArgs = {
  createAgentInput: CreateAgentInput;
};


export type MutationRemoveAgentArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveResourceArgs = {
  agentId: Scalars['String'];
  resourceId: Scalars['String'];
};


export type MutationUpdateAgentArgs = {
  updateAgentInput: UpdateAgentInput;
};

export type Query = {
  __typename?: 'Query';
  agent: Agent;
  agents: Array<Agent>;
};


export type QueryAgentArgs = {
  id: Scalars['Int'];
};

export type Resource = {
  __typename?: 'Resource';
  id: Scalars['ID'];
  name: ResourceName;
};

export type ResourceInput = {
  id: Scalars['ID'];
  name: ResourceName;
};

export enum ResourceName {
  Chrome = 'chrome',
  Firefox = 'firefox',
  Safari = 'safari',
  Ubuntu = 'ubuntu'
}

export type UpdateAgentInput = {
  agentType?: InputMaybe<AgentType>;
  availability?: InputMaybe<Availability>;
  iconUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  ipAddress?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  resources?: InputMaybe<Array<ResourceInput>>;
};

export type AgentFieldsFragment = { __typename?: 'Agent', id: string, name: string, iconUrl?: string | null, ipAddress: string, availability: Availability, agentType: AgentType, resources: Array<{ __typename?: 'Resource', id: string, name: ResourceName }> } & { ' $fragmentName'?: 'AgentFieldsFragment' };

export type AddResourcesMutationVariables = Exact<{
  agentId: Scalars['String'];
  resourceIds: Array<Scalars['String']> | Scalars['String'];
}>;


export type AddResourcesMutation = { __typename?: 'Mutation', addResources: (
    { __typename?: 'Agent' }
    & { ' $fragmentRefs'?: { 'AgentFieldsFragment': AgentFieldsFragment } }
  ) };

export type RemoveResourceMutationVariables = Exact<{
  agentId: Scalars['String'];
  resourceId: Scalars['String'];
}>;


export type RemoveResourceMutation = { __typename?: 'Mutation', removeResource: (
    { __typename?: 'Agent' }
    & { ' $fragmentRefs'?: { 'AgentFieldsFragment': AgentFieldsFragment } }
  ) };

export type GetAgentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAgentsQuery = { __typename?: 'Query', agents: Array<{ __typename?: 'Agent', id: string, name: string, iconUrl?: string | null, ipAddress: string, availability: Availability, agentType: AgentType, resources: Array<{ __typename?: 'Resource', id: string, name: ResourceName }> }> };

export const AgentFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AgentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Agent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"iconUrl"}},{"kind":"Field","name":{"kind":"Name","value":"ipAddress"}},{"kind":"Field","name":{"kind":"Name","value":"availability"}},{"kind":"Field","name":{"kind":"Name","value":"agentType"}},{"kind":"Field","name":{"kind":"Name","value":"resources"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AgentFieldsFragment, unknown>;
export const AddResourcesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addResources"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"resourceIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addResources"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"agentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"resourceIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"resourceIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AgentFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AgentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Agent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"iconUrl"}},{"kind":"Field","name":{"kind":"Name","value":"ipAddress"}},{"kind":"Field","name":{"kind":"Name","value":"availability"}},{"kind":"Field","name":{"kind":"Name","value":"agentType"}},{"kind":"Field","name":{"kind":"Name","value":"resources"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AddResourcesMutation, AddResourcesMutationVariables>;
export const RemoveResourceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeResource"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"resourceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeResource"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"agentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"resourceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"resourceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AgentFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AgentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Agent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"iconUrl"}},{"kind":"Field","name":{"kind":"Name","value":"ipAddress"}},{"kind":"Field","name":{"kind":"Name","value":"availability"}},{"kind":"Field","name":{"kind":"Name","value":"agentType"}},{"kind":"Field","name":{"kind":"Name","value":"resources"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<RemoveResourceMutation, RemoveResourceMutationVariables>;
export const GetAgentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAgents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"iconUrl"}},{"kind":"Field","name":{"kind":"Name","value":"ipAddress"}},{"kind":"Field","name":{"kind":"Name","value":"availability"}},{"kind":"Field","name":{"kind":"Name","value":"agentType"}},{"kind":"Field","name":{"kind":"Name","value":"resources"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetAgentsQuery, GetAgentsQueryVariables>;