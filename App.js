import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { palette } from './constants/globalStyles';
import Header from './screens/widgets/Header';
import StartGame from './screens/StartGame';
import PlayGame from './screens/PlayGame';

export default () => {
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/AtkinsonHyperlegible-Regular.ttf'),
    italic: require('./assets/fonts/AtkinsonHyperlegible-Italic.ttf'),
    bold: require('./assets/fonts/AtkinsonHyperlegible-Bold.ttf')
  });

  const [numberPlayed, setNumberPlayed] = useState();
  const startGameHandler = usersNumber => setNumberPlayed(usersNumber);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Header />
        {!numberPlayed && <StartGame startGame={startGameHandler} />}
        {numberPlayed && <PlayGame usersNumber={numberPlayed} restartGame={() => setNumberPlayed()} />}
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.canvas,
    alignItems: 'center'
  }
});
