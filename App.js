import React from 'react';
import { StyleSheet, View } from 'react-native';
import Categories from './screens/Categories';
import CategoryMeals from './screens/CategoryMeals';
import Favorites from './screens/Favorites';
import Filters from './screens/Filters';
import MealDetails from './screens/MealDetails';

export default () => {
  return (
    <View style={styles.container}>
      <Categories></Categories>
      <CategoryMeals></CategoryMeals>
      <Favorites></Favorites>
      <Filters></Filters>
      <MealDetails></MealDetails>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
