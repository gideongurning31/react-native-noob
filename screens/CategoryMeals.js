import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import globalStyles from '../global/Styles';
import TextBold from '../widgets/TextBold';
import MealCard from '../widgets/MealCard';
import { MEALS } from '../models/MealsModel';

export default ({ route: { params } }) => {
  const mealsByCategory = MEALS.filter(meal => meal.categoryIds.indexOf(params.id) > -1);

  return (
    <View style={{ ...globalStyles.container, paddingTop: 15 }}>
      <TextBold style={styles.title}>
        {params.title.toUpperCase()} {['c1', 'c2', 'c3', 'c4'].indexOf(params.id) > -1 && 'FOOD'}
      </TextBold>
      <View style={styles.contentContainer}>
        <FlatList data={mealsByCategory} renderItem={({ item }) => <MealCard>{item}</MealCard>} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    marginVertical: 20
  },
  contentContainer: {
    flex: 1
  }
});
