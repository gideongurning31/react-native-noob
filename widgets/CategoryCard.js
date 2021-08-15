import React from 'react';
import { StyleSheet, View } from 'react-native';

export default ({ children, color }) => <View style={{ ...styles.card, backgroundColor: color }}>{children}</View>;

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 100,
    margin: 15,
    padding: 10,
    maxWidth: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 10
  }
});
