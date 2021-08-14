import React from 'react';
import { View, StyleSheet } from 'react-native';
import { palette } from '../../constants/globalStyles';
import BoldText from '../widgets/BoldText';

export default () => {
  return (
    <View style={styles.header}>
      <BoldText style={styles.headerTitle}>Guess a Number</BoldText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    paddingTop: 36,
    backgroundColor: palette.dark1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  headerTitle: {
    color: palette.light2,
    fontSize: 25
  }
});
