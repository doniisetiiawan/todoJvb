import React from 'react';
import { TextInput } from 'react-native';
import { Mutation } from '@apollo/client/react/components';
import styles from './styles';
import { ADD_TODO, GET_USER } from '../constants';

function TodoInput() {
  return (
    <Mutation
      mutation={ADD_TODO}
      refetchQueries={[
        { query: GET_USER, variables: { userId: 'me' } },
      ]}
    >
      {(addTodo) => (
        <TextInput
          style={styles.textInput}
          placeholder="What needs to be done?"
          onSubmitEditing={({ nativeEvent: { text } }) => addTodo({ variables: { text } })}
        />
      )}
    </Mutation>
  );
}

export default TodoInput;
