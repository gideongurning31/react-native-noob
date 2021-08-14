import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { palette } from '../constants/globalStyles';
import Card from './widgets/Card';
import NumberInput from './widgets/NumberInput';
import GameCard from './GameCard';

export default () => {
  const [inputValue, setInputValue] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const inputHandler = input => {
    setInputValue(input.replace(/[^0-9]/g, ''));
  };

  const onReset = () => {
    setInputValue('');
    setIsConfirmed(false);
    Keyboard.dismiss();
  };

  const confirmHandler = () => {
    const selected = parseInt(inputValue);
    if (isNaN(selected) || selected <= 0 || selected > 99) {
      Alert.alert('Invalid number!', 'Value must be between 1 and 99.', [
        { text: 'Okay', style: 'destructive', onPress: onReset }
      ]);
      return;
    }
    setInputValue('');
    setSelectedNumber(selected);
    setIsConfirmed(true);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {!isConfirmed && <Text style={styles.title}>Select a Number!</Text>}
        <Card>
          <NumberInput maxLength={2} value={inputValue} onChangeText={inputHandler} />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='Reset' color={palette.light1} onPress={onReset} />
            </View>
            <View style={styles.button}>
              <Button title='Confirm' color={palette.dark2} onPress={confirmHandler} />
            </View>
          </View>
        </Card>
        {isConfirmed && <GameCard selectedNumber={selectedNumber} />}
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
