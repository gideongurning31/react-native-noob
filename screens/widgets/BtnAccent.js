import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { palette } from '../../constants/globalStyles';
import StdText from './StdText';

export default props => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.5}>
      <View style={{ ...styles.button, ...props.style }}>
        <StdText style={styles.text}>{props.children}</StdText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: palette.light1,
    padding: 10,
    margin: 10,
    minWidth: 100,
    borderRadius: 5
  },
  text: {
    color: palette.dark1,
    textAlign: 'center'
  }
});
