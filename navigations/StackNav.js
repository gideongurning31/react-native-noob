import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import palette from '../global/Palette';
import CategoriesScreen from '../screens/Categories';
import CategoryMealsScreen from '../screens/CategoryMeals';
import MealDetailsScreen from '../screens/MealDetails';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={headerOptions}>
          <Stack.Screen name='CATEGORIES' component={CategoriesScreen} />
          <Stack.Screen name='CATEGORY MEALS' component={CategoryMealsScreen} />
          <Stack.Screen name='MEAL DETAILS' component={MealDetailsScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const headerOptions = {
  headerStyle: {
    backgroundColor: palette.primary
  },
  headerTitleAlign: 'center',
  headerTitleStyle: {
    flex: 1,
    fontFamily: 'bold',
    color: palette.light
  }
};
