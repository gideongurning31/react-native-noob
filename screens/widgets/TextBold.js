import React from 'react';
import { Text } from 'react-native';
import globalStyles from '../../global/Styles';

export default props => {
  return (
    <Text {...props} style={{ ...globalStyles.text, ...globalStyles.textBold, ...props.style }}>
      {props.children}
    </Text>
  );
};
