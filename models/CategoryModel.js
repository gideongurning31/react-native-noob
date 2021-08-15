class CategoryModel {
  constructor(id, title, color) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

export default CategoryModel;

export const CATEGORIES = [
  new CategoryModel('c1', 'Indonesian', '#f5d142'),
  new CategoryModel('c2', 'Western', '#f5428d'),
  new CategoryModel('c3', 'Japanese', '#ffc7ff'),
  new CategoryModel('c4', 'Other Asians', '#f54242'),
  new CategoryModel('c5', 'Fast Food', '#368dff'),
  new CategoryModel('c6', 'Snacks & Light Meals', '#9eecff'),
  new CategoryModel('c7', 'Bakery & Cakes', '#b9ffb0'),
  new CategoryModel('c8', 'Deserts & Beverages', '#47fced')
];
