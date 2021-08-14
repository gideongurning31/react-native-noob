import React from 'react';
import { StyleSheet, View } from 'react-native';
import { globalStyles, palette } from './constants/globalStyles';
import Header from './screens/widgets/Header';

export default () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.canvas
  }
});
