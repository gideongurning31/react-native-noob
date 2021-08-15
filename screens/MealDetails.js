import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import globalStyles from '../global/Styles';
import palette from '../global/Palette';
import TextBold from '../widgets/TextBold';
import TextReg from '../widgets/TextReg';

export default ({ route: { params } }) => {
  return (
    <View style={{ ...globalStyles.container, ...styles.container }}>
      <View style={styles.content}>
        <Image source={{ uri: params.imageUrl }} style={styles.image} />
        <TextBold style={styles.title}>{params.title}</TextBold>
        <TextReg style={styles.textCenter}>
          {params.duration} minutes - {params.complexity} - {params.affordability}
        </TextReg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    paddingVertical: 5
  },
  content: {
    maxWidth: '80%',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  },
  textCenter: {
    textAlign: 'center'
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125,
    marginVertical: 25,
    borderWidth: 2,
    borderColor: palette.PRIMARY
  }
});
