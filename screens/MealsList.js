import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import globalStyles from '../global/Styles';
import TextBold from '../widgets/TextBold';
import MealCard from '../widgets/MealCard';

export default ({ meals, navigation, params }) => {
  return (
    <View style={{ ...globalStyles.container, paddingTop: 15 }}>
      {params && (
        <TextBold style={styles.title}>
          {params.title.toUpperCase()} {['c1', 'c2', 'c3', 'c4'].indexOf(params.id) > -1 && 'FOOD'}
        </TextBold>
      )}
      <View style={styles.contentContainer}>
        <FlatList data={meals} renderItem={({ item }) => <MealCard navigate={navigation.navigate}>{item}</MealCard>} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    marginVertical: 20
  },
  contentContainer: {
    flex: 1
  }
});
