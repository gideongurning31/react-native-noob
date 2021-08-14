import { StyleSheet } from 'react-native';

export const palette = {
  dark1: '#6F4C5B',
  dark2: '#9E7777',
  light1: '#DEBA9D',
  light2: '#F5E8C7',
  canvas: '#DEDEDE'
};

export const globalStyles = StyleSheet.create({
  selectedNumber: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: palette.dark1
  }
});
