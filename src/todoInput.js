import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

function TodoInput() {
  return (
    <TextInput
      style={styles.textInput}
      placeholder="What needs to be done?"
    />
  );
}

export default TodoInput;
