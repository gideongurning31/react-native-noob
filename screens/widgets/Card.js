import React from 'react';
import { StyleSheet, View } from 'react-native';
import { palette } from '../../constants/globalStyles';

export default ({ children, style }) => (
  <View style={{ ...styles.card, ...style }}>{children}</View>
);

const styles = StyleSheet.create({
  card: {
    width: 300,
    margin: 15,
    padding: 10,
    maxWidth: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.canvas,
    borderRadius: 10,
    elevation: 10
  }
});
