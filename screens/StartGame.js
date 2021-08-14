import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { palette } from '../constants/globalStyles';
import Card from './widgets/Card';

export default () => {
  const onReset = () => {
    console.log('RESET');
  };

  const onConfirm = () => {
    console.log('CONFIRM');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Number!</Text>
      <Card>
        <TextInput style={styles.input} keyboardType='number-pad' />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Reset' color={palette.light1} onPress={onReset} />
          </View>
          <View style={styles.button}>
            <Button title='Confirm' color={palette.dark2} onPress={onConfirm} />
          </View>
        </View>
      </Card>
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
  button: { width: 100 }
});
