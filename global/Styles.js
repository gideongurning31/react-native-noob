import { StyleSheet } from 'react-native';
import palette from './Palette';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.LIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: palette.PRIMARY,
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
