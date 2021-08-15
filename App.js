import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import Categories from './screens/Categories';
import CategoryMeals from './screens/CategoryMeals';
import Favorites from './screens/Favorites';
import Filters from './screens/Filters';
import MealDetails from './screens/MealDetails';

export default () => {
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/JosefinSans-Regular.ttf'),
    bold: require('./assets/fonts/JosefinSans-Bold.ttf'),
    italic: require('./assets/fonts/JosefinSans-Italic.ttf'),
    boldItalic: require('./assets/fonts/JosefinSans-BoldItalic.ttf')
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Categories></Categories>
        <CategoryMeals></CategoryMeals>
        <Favorites></Favorites>
        <Filters></Filters>
        <MealDetails></MealDetails>
      </View>
    );
  }

  return loading();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    color: 'cyan',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25
  }
});

const loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>LOADING...</Text>
    </View>
  );
};
