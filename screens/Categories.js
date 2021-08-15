import React from 'react';
import { View } from 'react-native';
import globalStyles from '../global/Styles';
import TextReg from '../widgets/TextReg';
import BtnPrimary from '../widgets/BtnPrimary';
import BtnAccent from '../widgets/BtnAccent';

export default ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <TextReg>CATEGORIES SCREEN</TextReg>
      <BtnPrimary>BUTTON</BtnPrimary>
      <BtnAccent>BUTTON</BtnAccent>
    </View>
  );
};
