import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles, palette } from '../constants/globalStyles';
import Card from './widgets/Card';

export default ({ usersNumber }) => {
  const [comNumber, setComNumber] = useState(guessNumber(1, 100));

  function guessNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <Card>
      <Text>Computer guessed:</Text>
      <Text style={globalStyles.selectedNumber}>{comNumber}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title='LOWER' color={palette.dark1} onPress={() => console.log('LOWER')} />
        </View>
        <View style={styles.button}>
          <Button title='GREATER' color={palette.dark1} onPress={() => console.log('GREATER')} />
        </View>
      </View>
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
