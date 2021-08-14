import React from 'react';
import { StyleSheet, View } from 'react-native';
import { globalStyles, palette } from './constants/globalStyles';
import Header from './screens/widgets/Header';
import StartGame from './screens/StartGame';

export default () => {
  return (
    <View style={styles.container}>
      <Header />
      <StartGame />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.canvas
  }
});
