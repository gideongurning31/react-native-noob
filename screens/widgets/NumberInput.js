import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { palette } from '../../constants/globalStyles';

export default props => (
  <TextInput
    {...props}
    style={{ ...styles.input, ...props.style }}
    autoCorrect={false}
    keyboardType='number-pad'
  />
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: palette.light2,
    borderColor: palette.dark2,
    color: palette.dark1,
    textAlign: 'center',
    fontSize: 25,
    padding: 10,
    margin: 15,
    width: 70
  }
});
