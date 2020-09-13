import {ImageSourcePropType} from 'react-native';

type Category = {
  id: string;
  name: string;
  image: ImageSourcePropType;
};

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Lunch Box',
    image: require('@src/assets/categories/category-1.png'),
  },
  {
    id: '2',
    name: 'Drink',
    image: require('@src/assets/categories/category-2.png'),
  },
  {
    id: '3',
    name: 'Salad',
    image: require('@src/assets/categories/category-3.png'),
  },
  {
    id: '4',
    name: 'Hamburger',
    image: require('@src/assets/categories/category-4.png'),
  },
  {
    id: '5',
    name: 'Pizza',
    image: require('@src/assets/categories/category-5.png'),
  },
  {
    id: '6',
    name: 'Sushi',
    image: require('@src/assets/categories/category-6.png'),
  },
  {
    id: '7',
    name: 'Icecream',
    image: require('@src/assets/categories/category-7.png'),
  },
  {
    id: '8',
    name: 'Donuts',
    image: require('@src/assets/categories/category-8.png'),
  },
];
