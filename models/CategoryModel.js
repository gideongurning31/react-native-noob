class CategoryModel {
  constructor(id, title, color) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

export default CategoryModel;

export const CATEGORIES = [
  new CategoryModel('c1', 'Indonesian', '#F5D142'),
  new CategoryModel('c2', 'Western', '#F5A442'),
  new CategoryModel('c3', 'Japanese', '#FFC7FF'),
  new CategoryModel('c4', 'Asian', '#FFE194'),
  new CategoryModel('c5', 'Fast Food', '#B9FFB0'),
  new CategoryModel('c6', 'Bakery & Cakes', '#28FFBF'),
  new CategoryModel('c7', 'Snacks & Light Meals', '#9EECFF'),
  new CategoryModel('c8', 'Deserts & Beverages', '#47FCED')
];
