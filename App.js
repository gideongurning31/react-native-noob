import React from 'react';
import { StyleSheet, View, Touchable } from 'react-native';
import MyComponent from './components/MyComponent';

export default () => {
  return (
    <Touchable>
      <View style={styles.container}>
        <MyComponent />
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
