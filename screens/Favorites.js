import React from 'react';
import MealsList from './MealsList';
import { MEALS } from '../models/MealsModel';

export default ({ navigation }) => {
  const favorites = ['m3', 'm6', 'm7', 'm9', 'm11'];
  return <MealsList navigation={navigation} meals={MEALS.filter(meal => favorites.includes(meal.id))} />;
};
