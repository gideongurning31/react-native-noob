class CategoryModel {
  constructor(id, title, color, imagePath) {
    this.id = id;
    this.title = title;
    this.color = color;
    this.imagePath = imagePath;
  }
}

export default CategoryModel;

export const CATEGORIES = [
  new CategoryModel('c1', 'Indonesian', '#F5D142', require('../assets/images/c1.png')),
  new CategoryModel('c2', 'Western', '#F5A442', require('../assets/images/c2.png')),
  new CategoryModel('c3', 'Japanese', '#FFC7FF', require('../assets/images/c3.png')),
  new CategoryModel('c4', 'Asian', '#FFE194', require('../assets/images/c4.png')),
  new CategoryModel('c5', 'Fast Food', '#B9FFB0', require('../assets/images/c5.png')),
  new CategoryModel('c6', 'Bakery & Cakes', '#28FFBF', require('../assets/images/c6.png')),
  new CategoryModel('c7', 'Snacks & Light Meals', '#9EECFF', require('../assets/images/c7.png')),
  new CategoryModel('c8', 'Deserts & Beverages', '#47FCED', require('../assets/images/c8.png'))
];
