import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearProgress } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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
      <SafeAreaProvider>
        <View style={styles.container}>
          <Categories></Categories>
          <CategoryMeals></CategoryMeals>
          <Favorites></Favorites>
          <Filters></Filters>
          <MealDetails></MealDetails>
        </View>
      </SafeAreaProvider>
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
  }
});

const loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
      <LinearProgress color='primary' />
    </View>
  );
};
