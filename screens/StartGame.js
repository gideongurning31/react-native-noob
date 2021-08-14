import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { palette } from '../constants/globalStyles';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Number!</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} keyboardType='number-pad' />
        <View style={styles.buttonContainer}>
          <Button title='Reset' color={palette.light1} />
          <Button title='Confirm' color={palette.dark2} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    color: palette.dark1,
    fontSize: 18
  },
  inputContainer: {
    width: 300,
    margin: 15,
    padding: 10,
    maxWidth: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.canvas,
    borderRadius: 10,
    elevation: 10
  },
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
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {}
});
