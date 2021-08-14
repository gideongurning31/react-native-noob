import React from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';

export default props => {
  return (
    <Text {...props} style={{ ...globalStyles.font, ...props.style }}>
      {props.children}
    </Text>
  );
};
