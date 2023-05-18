import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import getAgentsDataMockQuery from './apollo-mocks/getAgentsData';

interface Props {
  children: React.ReactNode;
}

const ApolloMockedProvider: React.FC<Props> = ({ children }) => {
  const mocks = [
    getAgentsDataMockQuery,
  ];

  return (
    <MockedProvider
      mocks={mocks}
      addTypename={false}
      defaultOptions={{
        watchQuery: { fetchPolicy: 'no-cache' },
        query: { fetchPolicy: 'no-cache' },
      }}
    >
      {children}
    </MockedProvider>
  );
};

export default ApolloMockedProvider;
