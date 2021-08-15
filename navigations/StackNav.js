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
          <Stack.Screen name='categories' component={CategoriesScreen} options={{ title: 'FOOD CATEGORIES' }} />
          <Stack.Screen name='categoryMeals' component={CategoryMealsScreen} options={{ title: 'CATEGORY MEALS' }} />
          <Stack.Screen name='mealDetails' component={MealDetailsScreen} options={{ title: 'MEAL DETAILS' }} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const headerOptions = {
  headerStyle: {
    backgroundColor: palette.PRIMARY
  },
  headerTitleAlign: 'center',
  headerTitleStyle: {
    flex: 1,
    fontFamily: 'bold',
    color: palette.LIGHT
  },
  headerTintColor: palette.CANVAS
};
