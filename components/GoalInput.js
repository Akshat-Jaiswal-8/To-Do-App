import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import GoalItem from './GoalItem';

export default GoalInput = (props) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder="Your course Goal"
      onChangeText={props.goal}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});
