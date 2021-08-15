import { StyleSheet } from 'react-native';
import palette from './Palette';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.light,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: palette.primary,
    fontSize: 18
  },
  textRegular: {
    fontFamily: 'regular'
  },
  textBold: {
    fontFamily: 'bold'
  },
  textItalic: {
    fontFamily: 'italic'
  },
  textBoldItalic: {
    fontFamily: 'boldItalic'
  }
});
