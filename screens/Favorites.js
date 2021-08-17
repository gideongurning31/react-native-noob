import React from 'react';
import { StyleSheet, View } from 'react-native';
import globalStyles from '../global/Styles';
import TextReg from '../widgets/TextReg';

export default () => {
  return (
    <View style={styles.container}>
      <TextReg>FAVORITES SCREEN</TextReg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    paddingTop: 20
  }
});
