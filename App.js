import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { palette } from './constants/globalStyles';
import Header from './screens/widgets/Header';
import StartGame from './screens/StartGame';
import PlayGame from './screens/PlayGame';

export default () => {
  const [numberPlayed, setNumberPlayed] = useState();
  const startGameHandler = usersNumber => setNumberPlayed(usersNumber);

  return (
    <View style={styles.container}>
      <Header />
      {!numberPlayed && <StartGame startGame={startGameHandler} />}
      {numberPlayed && <PlayGame usersNumber={numberPlayed} restartGame={() => setNumberPlayed()} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.canvas,
    alignItems: 'center'
  }
});
