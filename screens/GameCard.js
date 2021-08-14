import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { globalStyles, palette } from '../constants/globalStyles';
import BoldText from './widgets/BoldText';
import StdText from './widgets/StdText';
import Card from './widgets/Card';

export default ({ selectedNumber, startGame }) => {
  return (
    <Card style={styles.summaryContainer}>
      <StdText>You've picked:</StdText>
      <BoldText style={globalStyles.selectedNumber}>{selectedNumber}</BoldText>
      <Button title='START GAME' color={palette.dark2} onPress={() => startGame(selectedNumber)} />
    </Card>
  );
};

const styles = StyleSheet.create({
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
});
