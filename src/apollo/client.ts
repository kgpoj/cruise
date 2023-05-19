import { ApolloClient, InMemoryCache } from '@apollo/client';

const PRODUCTION_API = 'http://ec2-13-236-66-159.ap-southeast-2.compute.amazonaws.com:3001/graphql';
const DEVELOPMENT_API = 'http://localhost:3001/graphql';
const CRUISE_API = process.env.NODE_ENV === 'development' ? DEVELOPMENT_API : PRODUCTION_API;
console.log(process.env.NODE_ENV);
const client = new ApolloClient({
  uri: CRUISE_API,
  cache: new InMemoryCache(),
});

export default client;
