import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import globalStyles from '../global/Styles';
import TextBold from '../widgets/TextBold';

export default ({ route: { params } }) => {
  return (
    <View style={{ ...globalStyles.container, paddingTop: 15 }}>
      <Image style={styles.image} source={params.imagePath} />
      <TextBold style={styles.title}>
        {params.title.toUpperCase()} {['c1', 'c2', 'c3', 'c4'].indexOf(params.id) > -1 && 'FOOD'}
      </TextBold>
      <View style={styles.content}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25
  },
  image: {
    height: 100,
    width: 100
  },
  content: {
    flex: 1
  }
});
