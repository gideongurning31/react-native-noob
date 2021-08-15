import React from 'react';
import { View } from 'react-native';
import globalStyles from '../global/Styles';
import TextReg from '../widgets/TextReg';

export default ({ route: { params } }) => {
  return (
    <View style={globalStyles.container}>
      <TextReg>
        {params.title.toUpperCase()} {['c1', 'c2', 'c3', 'c4'].indexOf(params.id) > -1 && 'FOOD'}
      </TextReg>
    </View>
  );
};
