import React from 'react';
import { View } from 'react-native';
import globalStyles from '../global/Styles';
import TextReg from './widgets/TextReg';

export default () => {
  return (
    <View style={globalStyles.container}>
      <TextReg>FAVORITES SCREEN</TextReg>
    </View>
  );
};
