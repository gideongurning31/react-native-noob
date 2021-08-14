import React from 'react';
import { StyleSheet, View, TextInput, Button, TouchableWithoutFeedback } from 'react-native';

export default () => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View>
      <TextInput style={styles.input} placeholder='Placeholder dude'></TextInput>
      <Button title='BUTTON' />
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    width: 200,
    padding: 10
  }
});
