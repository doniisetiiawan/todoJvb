import React from 'react';
import { Text, View } from 'react-native';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import { Query } from '@apollo/client/react/components';
import styles from './styles';
import { GET_USER } from '../constants';
import TodoInput from './todoInput';

const NETWORK_IP = '192.168.43.157';

const client = new ApolloClient({
  uri: `http://${NETWORK_IP}:3000/graphql`,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Query
        query={GET_USER}
        variables={{
          // Mock authenticated ID that matches database
          userId: 'me',
        }}
      >
        {({ loading, error, data }) => {
          if (loading) {
            return <Text>Loading</Text>;
          }

          if (error) {
            return <Text>{error.message}</Text>;
          }

          return (
            <View style={styles.container}>
              <TodoInput />
            </View>
          );
        }}
      </Query>
    </ApolloProvider>
  );
}

export default App;
