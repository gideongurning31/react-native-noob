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
      <BtnPrimary style={{ margin: 10 }} onPress={() => navigation.navigate('categoryMeals')}>
        to Category Meals
      </BtnPrimary>
      <BtnAccent style={{ margin: 10 }} onPress={() => navigation.navigate('mealDetails')}>
        to Meal Details
      </BtnAccent>
    </View>
  );
};
