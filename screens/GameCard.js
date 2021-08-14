import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { globalStyles, palette } from '../constants/globalStyles';
import Card from './widgets/Card';

export default ({ selectedNumber }) => (
  <Card style={styles.summaryContainer}>
    <Text>You've selected:</Text>
    <Text style={globalStyles.selectedNumber}>{selectedNumber}</Text>
    <Button title='START GAME' color={palette.dark2} onPress={() => console.log(selectedNumber)} />
  </Card>
);

const styles = StyleSheet.create({
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
});
