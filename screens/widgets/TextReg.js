import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default props => {
  return (
    <Text {...props} style={{ ...styles.text, ...props.style }}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'regular',
    fontSize: 20
  }
});
