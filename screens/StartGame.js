import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { palette } from '../constants/globalStyles';
import Card from './widgets/Card';
import NumberInput from './widgets/NumberInput';

export default () => {
  const [inputValue, setInputValue] = useState('');

  const inputHandler = input => setInputValue(input.replace(/[^0-9]/g, ''));

  const onReset = () => {
    setInputValue('');
    Keyboard.dismiss();
  };

  const onConfirm = () => {
    onReset();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Select a Number!</Text>
        <Card>
          <NumberInput maxLength={2} onChangeText={inputHandler} value={inputValue} />
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
    </TouchableWithoutFeedback>
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
  buttonContainer: {
    width: '100%',
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: { width: 100 }
});
