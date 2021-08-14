import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Text>Start Game Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  }
});
