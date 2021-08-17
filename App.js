import React from 'react';
import { View } from 'react-native';
import { LinearProgress } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import StackNav from './global/Navigation';

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
        <StackNav></StackNav>
      </SafeAreaProvider>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
      <LinearProgress color='primary' />
    </View>
  );
};
