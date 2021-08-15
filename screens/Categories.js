import React from 'react';
import { StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native';
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
            <CategoryCard color={data.item.color}>
              <TouchableOpacity onPress={() => navigation.navigate('categoryMeals', data.item)} activeOpacity={0.1} style={styles.card}>
                <Image style={styles.image} source={data.item.imagePath} />
                <TextReg style={styles.categoryText}>{data.item.title}</TextReg>
              </TouchableOpacity>
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
  card: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 60,
    width: 60
  },
  categoryText: {
    textAlign: 'center'
  }
});
