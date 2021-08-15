import React from 'react';
import { StyleSheet, View, FlatList, Image } from 'react-native';
import globalStyles from '../global/Styles';
import TextReg from '../widgets/TextReg';
import CategoryCard from '../widgets/CategoryCard';
import { CATEGORIES } from '../models/CategoryModel';

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        numColumns={2}
        renderItem={data => {
          return (
            <CategoryCard color={data.item.color} onPress={() => navigation.navigate('categoryMeals', data.item)} activeOpacity={0.5}>
              <Image style={styles.image} source={data.item.imagePath} />
              <TextReg style={styles.categoryText}>{data.item.title}</TextReg>
            </CategoryCard>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    paddingTop: 20
  },
  image: {
    height: 60,
    width: 60
  },
  categoryText: {
    textAlign: 'center'
  }
});
