import React from 'react';
import { Mutation } from '@apollo/client/react/components';
import { Text, View, Switch } from 'react-native';
import { CHANGE_TODO_STATUS, GET_USER } from '../constants';
import styles from './styles';

const completeStyleMap = new Map([
  [true, { textDecorationLine: 'line-through' }],
  [false, {}],
]);

function Todo({ todo: { id, text, complete } }) {
  return (
    <Mutation
      mutation={CHANGE_TODO_STATUS}
      refetchQueries={[
        { query: GET_USER, variables: { userId: 'me' } },
      ]}
    >
      {(changeTodoStatus) => (
        <View style={styles.todoItem}>
          <Switch
            value={complete}
            onValueChange={(value) => changeTodoStatus({
              variables: { id, complete: value },
            })}
          />
          <Text style={completeStyleMap.get(complete)}>
            {text}
          </Text>
        </View>
      )}
    </Mutation>
  );
}

export default Todo;
