import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Button, Image, Alert } from 'react-native';
import { globalStyles, palette } from '../constants/globalStyles';
import StdText from './widgets/StdText';
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

  const gameOver = () => {
    return usersNumber === comNumber;
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
      {!gameOver() && <StdText style={styles.cardText}>Is your number greater or lower than:</StdText>}
      {gameOver() && (
        <StdText style={styles.cardText}>
          It took <Text style={styles.bold}>{count.current}</Text> turns to guess your number, here's your reward
        </StdText>
      )}

      {gameOver() && count.current % 2 === 0 && <Image source={require('../assets/images/emi.jpg')} style={styles.image} fadeDuration={600} />}
      {gameOver() && count.current % 2 !== 0 && <Image source={require('../assets/images/gal.jpg')} style={styles.image} fadeDuration={600} />}
      <StdText style={globalStyles.selectedNumber}>{usersNumber !== comNumber ? comNumber : `Your number is ${comNumber}`}</StdText>
      {!gameOver() && displayButtons()}
      {gameOver() && (
        <View style={styles.button}>
          <Button title='RESTART' color={palette.dark1} onPress={restartGame} />
        </View>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  cardText: {
    textAlign: 'center'
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: { width: 100 },
  bold: {
    fontFamily: 'bold',
    color: palette.dark2
  },
  image: {
    margin: 20,
    width: '80%',
    height: '50%'
  }
});
