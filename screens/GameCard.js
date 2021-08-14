import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import Card from './widgets/Card';
import { palette } from '../constants/globalStyles';

export default ({ selectedNumber }) => (
  <Card style={styles.summaryContainer}>
    <Text>You've selected:</Text>
    <Text style={styles.selectedNumber}>{selectedNumber}</Text>
    <Button title='START GAME' color={palette.dark2} onPress={() => console.log(selectedNumber)} />
  </Card>
);

const styles = StyleSheet.create({
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  selectedNumber: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: palette.dark1
  }
});
