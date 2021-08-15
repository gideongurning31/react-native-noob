import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import globalStyles from '../global/Styles';
import TextReg from '../widgets/TextReg';
import { CATEGORIES } from '../models/CategoryModel';

const renderCategoryList = data => {
  return <TextReg style={{ margin: 10 }}>{data.item.title}</TextReg>;
};

export default ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <FlatList data={CATEGORIES} numColumns={2} renderItem={renderCategoryList} />
    </View>
  );
};

const styles = StyleSheet.create({});
