import React from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';

export default props => {
  return (
    <Text {...props} style={{ ...globalStyles.fontBold, ...props.style }}>
      {props.children}
    </Text>
  );
};
