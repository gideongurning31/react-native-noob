import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default ({ children, color, onPress }) => (
  <TouchableOpacity style={{ ...styles.card, backgroundColor: color }} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 120,
    margin: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5
  }
});
