import { ApolloClient, InMemoryCache } from '@apollo/client';

const CRUISE_API = 'http://localhost:3001/graphql';
const client = new ApolloClient({
  uri: CRUISE_API,
  cache: new InMemoryCache(),
});

export default client;
