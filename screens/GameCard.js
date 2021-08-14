import React from 'react';
import { StyleSheet } from 'react-native';
import { globalStyles } from '../constants/globalStyles';
import BtnPrimary from './widgets/BtnPrimary';
import BoldText from './widgets/BoldText';
import StdText from './widgets/StdText';
import Card from './widgets/Card';

export default ({ selectedNumber, startGame }) => {
  return (
    <Card style={styles.summaryContainer}>
      <StdText>You've picked:</StdText>
      <BoldText style={globalStyles.selectedNumber}>{selectedNumber}</BoldText>
      <BtnPrimary onPress={() => startGame(selectedNumber)}>START GAME</BtnPrimary>
    </Card>
  );
};

const styles = StyleSheet.create({
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
});
