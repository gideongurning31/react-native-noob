import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import { globalStyles, palette } from '../constants/globalStyles';
import Card from './widgets/Card';

function guessNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default ({ usersNumber, restartGame }) => {
  const count = useRef(1);
  const currentMin = useRef(1);
  const currentMax = useRef(100);
  const [comNumber, setComNumber] = useState(guessNumber(currentMin.current, currentMax.current));

  const answerHandler = direction => {
    const isGreater = direction === 'greater';
    if ((isGreater && usersNumber < comNumber) || (!isGreater && usersNumber > comNumber)) {
      Alert.alert('Are you sure?', "Don't be a bitch please.", [{ text: 'Okay, I lied.', style: 'cancel' }]);
      return;
    } else nextGuess(isGreater);
  };

  const nextGuess = isGreater => {
    if (isGreater) currentMin.current = comNumber + 1;
    else currentMax.current = comNumber - 1;
    count.current++;
    setComNumber(guessNumber(currentMin.current, currentMax.current));
  };

  const displayButtons = () => {
    return (
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title='LOWER' color={palette.dark1} onPress={answerHandler.bind(this, 'lower')} />
        </View>
        <View style={styles.button}>
          <Button title='GREATER' color={palette.dark1} onPress={answerHandler.bind(this, 'greater')} />
        </View>
      </View>
    );
  };

  return (
    <Card>
      <Text>{usersNumber === comNumber ? `Computer guessed your number in ${count.current} turns.` : 'Is your number greater or lower than:'}</Text>
      <Text style={globalStyles.selectedNumber}>{comNumber}</Text>
      {usersNumber !== comNumber && displayButtons()}
      {usersNumber === comNumber && (
        <View style={styles.button}>
          <Button title='RESTART' color={palette.dark1} onPress={restartGame} />
        </View>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: { width: 100 }
});
