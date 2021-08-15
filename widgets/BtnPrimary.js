import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import palette from '../global/Palette';
import TextReg from './TextReg';

export default ({ onPress, style, children }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <View style={{ ...styles.button, ...style }}>
        <TextReg style={styles.text}>{children}</TextReg>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: palette.PRIMARY,
    padding: 10,
    minWidth: 100,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: palette.CANVAS,
    textAlign: 'center'
  }
});
