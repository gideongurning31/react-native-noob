import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
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
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('categoryMeals', data.item.id)}>
              <CategoryCard color={data.item.color}>
                <TextReg style={styles.categoryText}>{data.item.title}</TextReg>
              </CategoryCard>
            </TouchableOpacity>
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
  categoryText: {
    textAlign: 'center'
  }
});
