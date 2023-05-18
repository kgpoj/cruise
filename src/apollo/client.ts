import { ApolloClient, InMemoryCache } from '@apollo/client';

const PRODUCTION_API = 'http://ec2-3-26-180-216.ap-southeast-2.compute.amazonaws.com:3001/graphql';
const DEVELOPMENT_API = 'http://localhost:3001/graphql';
const CRUISE_API = process.env.NODE_ENV === 'development' ? DEVELOPMENT_API : PRODUCTION_API;
const client = new ApolloClient({
  uri: CRUISE_API,
  cache: new InMemoryCache(),
});

export default client;
