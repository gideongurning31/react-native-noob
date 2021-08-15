import React from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';
import globalStyles from '../global/Styles';
import TextBold from '../widgets/TextBold';
import TextReg from '../widgets/TextReg';
import { MEALS } from '../models/MealsModel';

export default ({ route: { params } }) => {
  const mealsByCategory = MEALS.filter(meal => meal.categoryIds.indexOf(params.id) > -1);

  return (
    <View style={{ ...globalStyles.container, paddingTop: 15 }}>
      <Image style={styles.image} source={params.imagePath} />
      <TextBold style={styles.title}>
        {params.title.toUpperCase()} {['c1', 'c2', 'c3', 'c4'].indexOf(params.id) > -1 && 'FOOD'}
      </TextBold>
      <FlatList
        data={mealsByCategory}
        renderItem={({ item }) => (
          <View>
            <TextReg>{item.title}</TextReg>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25
  },
  image: {
    height: 100,
    width: 100
  },
  content: {
    flex: 1
  }
});
