import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons as Icons } from '@expo/vector-icons';
import palette from './Palette';
import CategoriesScreen from '../screens/Categories';
import CategoryMealsScreen from '../screens/CategoryMeals';
import MealDetailsScreen from '../screens/MealDetails';
import FavoritesScreen from '../screens/Favorites';

const Tabnav = createBottomTabNavigator();
const Stack = createStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={headerOptions}>
        <Stack.Screen name='categories' component={CategoriesScreen} options={{ title: 'FOOD CATEGORIES' }} />
        <Stack.Screen name='categoryMeals' component={CategoryMealsScreen} options={{ title: 'MEALS BY CATEGORY' }} />
        <Stack.Screen name='mealDetails' component={MealDetailsScreen} options={{ title: 'MEAL DETAILS' }} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Tabnav.Navigator initialRouteName='meals' screenOptions={{ ...headerOptions, ...tabBarOptions }}>
        <Tabnav.Screen
          name='meals'
          component={StackNav}
          options={{
            headerShown: false,
            title: 'MEALS',
            tabBarIcon: ({ color, size }) => <Icons name='silverware-fork-knife' color={color} size={size} />
          }}
        />
        <Tabnav.Screen
          name='favorites'
          component={FavoritesScreen}
          options={{
            title: 'FAVORITES',
            tabBarIcon: ({ color, size }) => <Icons name='star' color={color} size={size} />
          }}
        />
      </Tabnav.Navigator>
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

const tabBarOptions = {
  tabBarShowLabel: false,
  tabBarStyle: {
    height: 60,
    backgroundColor: palette.PRIMARY
  },
  tabBarActiveTintColor: palette.LIGHT,
  tabBarInactiveTintColor: palette.ACCENT
};
