import React from 'react';
import { StyleSheet, TouchableOpacity, View, ImageBackground } from 'react-native';
import palette from '../global/Palette';
import TextBold from './TextBold';
import TextReg from './TextReg';

export default ({ children }) => (
  <TouchableOpacity style={styles.mainContainer} activeOpacity={0.5}>
    <ImageBackground source={{ uri: children.imageUrl }} style={styles.backgroundImage}>
      <View style={styles.textContainer}>
        <TextBold style={styles.text}>{children.title}</TextBold>
        <TextReg style={styles.text}>
          {children.duration} minutes - {children.complexity} - {children.affordability}
        </TextReg>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  mainContainer: {
    minWidth: '80%',
    minHeight: 200,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5,
    overflow: 'hidden'
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end'
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 15
  },
  text: {
    textAlign: 'center',
    color: palette.CANVAS
  }
});
