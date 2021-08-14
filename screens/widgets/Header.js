import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles, palette } from '../../constants/globalStyles';

export default () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Guess a Number</Text>
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
    alignItems: 'center'
  },
  headerTitle: {
    color: palette.light2,
    fontSize: 18
  }
});
