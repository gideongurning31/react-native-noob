import React from 'react';
import MealsList from './MealsList';
import { MEALS } from '../models/MealsModel';

export default ({ navigation, route: { params } }) => {
  const mealsByCategory = MEALS.filter(meal => meal.categoryIds.indexOf(params.id) > -1);
  return <MealsList navigation={navigation} params={params} meals={mealsByCategory} />;
};
