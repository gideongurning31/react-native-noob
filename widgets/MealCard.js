import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import palette from '../global/Palette';
import TextReg from './TextReg';

export default ({ children }) => (
  <TouchableOpacity style={styles.container} activeOpacity={0.5}>
    <TextReg style={styles.title}>{children.title}</TextReg>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    minWidth: '80%',
    minHeight: 200,
    backgroundColor: palette.LIGHT,
    justifyContent: 'center',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 5
  },
  title: {
    textAlign: 'center'
  }
});
