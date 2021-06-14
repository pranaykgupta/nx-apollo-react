import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache,
  NormalizedCacheObject, HttpLink} from '@apollo/client';
import React from 'react';
import './app.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:3000/graphql',
    headers: {
      authorization: localStorage.getItem('token'),
    },
  }),
});

const App = () => (
  <ApolloProvider client={client}>
    <h1>My Lego Sets</h1>
  </ApolloProvider>
);

export default App;