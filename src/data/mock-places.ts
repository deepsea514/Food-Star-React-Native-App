import {ImageSourcePropType} from 'react-native';

const faker = require('faker');

export type Dish = {
  id: string;
  title: string;
  description: string;
  price: string;
  image?: ImageSourcePropType;
  coverImage?: ImageSourcePropType;
  sideDishes?: DishSection[];
};

export type DishSection = {
  title: string;
  data: Dish[];
};

export type Place = {
  id: string;
  title: string;
  coverImage?: ImageSourcePropType;
  image: ImageSourcePropType;
  subTitle: string;
  distance: number;
  time: number;
  rating: number;
  dishSection?: DishSection[];
};

export type RemarkablePlaceTab = {
  [name: string]: Place[];
};

export const mockDishDetails: Dish = {
  id: faker.random.uuid(),
  title: faker.commerce.productName(),
  description: faker.lorem.lines(3),
  price: faker.commerce.price(5, 60),
  coverImage: require('@src/assets/dish-details/cover-photo.jpg'),
  sideDishes: [
    {
      title: 'Cake',
      data: Array(5)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(2, 10),
          image: require('@src/assets/dish-details/dish-1.jpg'),
        })),
    },
    {
      title: 'Drink',
      data: Array(3)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(2, 10),
          image: require('@src/assets/dish-details/dish-2.jpg'),
        })),
    },
    {
      title: 'Salad',
      data: Array(6)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(2, 10),
          image: require('@src/assets/dish-details/dish-3.jpg'),
        })),
    },
  ],
};

export const mockPlaceDetails: Place = {
  id: '1',
  title: 'Neapolitan pizza, Italy. Neapolitan pizza',
  coverImage: require('@src/assets/place-details/cover-photo.jpg'),
  image: require('@src/assets/place-details/main-photo.jpg'),
  subTitle: 'Western, Spaghetti',
  distance: 75,
  time: 90,
  rating: 4,
  dishSection: [
    {
      title: 'Burgers',
      data: Array(3)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          image: require('@src/assets/dish-details/dish-1.jpg'),
        })),
    },
    {
      title: 'Pizza',
      data: Array(3)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          image: require('@src/assets/dish-details/dish-2.jpg'),
        })),
    },
    {
      title: 'Sushi and rolls',
      data: Array(4)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          image: require('@src/assets/dish-details/dish-3.jpg'),
        })),
    },
    {
      title: 'Pasta',
      data: Array(4)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          image: require('@src/assets/dish-details/dish-1.jpg'),
        })),
    },
    {
      title: 'Dessert',
      data: Array(6)
        .fill(0)
        .map((_) => ({
          id: faker.random.uuid(),
          title: faker.commerce.productName(),
          description: faker.lorem.lines(2),
          price: faker.commerce.price(5, 60),
          image: require('@src/assets/dish-details/dish-2.jpg'),
        })),
    },
  ],
};

export const mockPlaceList: Place[] = Array(10)
  .fill(0)
  .map((_) => {
    const image = require('@src/assets/place-details/main-photo.jpg');
    return {
      id: faker.random.uuid(),
      title: faker.commerce.department(),
      image,
      subTitle: faker.lorem.lines(2),
      distance: 75,
      time: 90,
      rating: 4,
    };
  });

export const mockPlaces: Place[] = Array(3)
  .fill(0)
  .map((_) => {
    const image = require('@src/assets/place-details/main-photo.jpg');
    return {
      id: faker.random.uuid(),
      title: faker.commerce.department(),
      image,
      subTitle: faker.lorem.lines(2),
      distance: 75,
      time: 90,
      rating: 4,
    };
  });

export const mockRemarkablePlace: RemarkablePlaceTab = {
  featured: [
    {
      id: '1',
      title: 'Neapolitan pizza, Spaghetti - Italy',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'Western, Spaghetti',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '2',
      title: 'Banh mi - Saigon - 200 Bui Thi Xuan',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'Eastern, BanhMi, Breads',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '3',
      title: 'Moules frites, Belgium - United State',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'US, Fast food, Burger, Chicken',
      distance: 70,
      time: 35,
      rating: 5,
    },
    {
      id: '4',
      title: 'Spaghetti - Italy',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'Western, Spaghetti',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '5',
      title: 'Banh mi - Saigon',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'Eastern, BanhMi, Breads',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '6',
      title: 'KFC - United State',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'US, Fast food, Burger, Chicken',
      distance: 70,
      time: 35,
      rating: 5,
    },
    {
      id: '7',
      title: 'Khachapuri, Georgia',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'Western, Spaghetti',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '8',
      title: 'Banh mi - Saigon',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'Eastern, BanhMi, Breads',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '9',
      title: 'KFC - United State',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'US, Fast food, Burger, Chicken',
      distance: 70,
      time: 35,
      rating: 5,
    },
  ],
  newest: [
    {
      id: '1',
      title: 'Spaghetti - Italy',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'Western, Spaghetti',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '2',
      title: 'Banh mi - Saigon',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'Eastern, BanhMi, Breads',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '3',
      title: 'KFC - United State',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'US, Fast food, Burger, Chicken',
      distance: 70,
      time: 35,
      rating: 5,
    },
    {
      id: '4',
      title: 'Haggis, neeps and tatties, Scotland',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'Western, Spaghetti',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '5',
      title: 'Banh mi - Saigon',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'Eastern, BanhMi, Breads',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '6',
      title: 'KFC - United State',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'US, Fast food, Burger, Chicken',
      distance: 70,
      time: 35,
      rating: 5,
    },
    {
      id: '7',
      title: 'Neapolitan pizza, Spaghetti - Italy',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'Western, Spaghetti',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '8',
      title: 'Haggis, neeps and tatties, Scotland',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'Eastern, BanhMi, Breads',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '9',
      title: 'KFC - United State',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'US, Fast food, Burger, Chicken',
      distance: 70,
      time: 35,
      rating: 5,
    },
  ],
  trending: [
    {
      id: '1',
      title: 'Spaghetti  - Italy',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'Western, Spaghetti',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '2',
      title: 'Banh mi - Saigon',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'Eastern, BanhMi, Breads',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '3',
      title: 'Gumbo, Louisiana, US - United State',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'US, Fast food, Burger, Chicken',
      distance: 70,
      time: 35,
      rating: 5,
    },
    {
      id: '4',
      title: 'Spaghetti - Italy',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'Western, Spaghetti',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '5',
      title: 'Banh mi - Saigon',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'Eastern, BanhMi, Breads',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '6',
      title: 'KFC - United State',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'US, Fast food, Burger, Chicken',
      distance: 70,
      time: 35,
      rating: 5,
    },
    {
      id: '7',
      title: 'Jollof rice, West Africa',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'Western, Spaghetti',
      distance: 75,
      time: 90,
      rating: 4,
    },
    {
      id: '8',
      title: 'Singapore noodles, Hong Kong',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'Eastern, BanhMi, Breads',
      distance: 91,
      time: 64,
      rating: 5,
    },
    {
      id: '9',
      title: 'KFC - United State',
      image: require('@src/assets/place-details/main-photo.jpg'),
      subTitle: 'US, Fast food, Burger, Chicken',
      distance: 70,
      time: 35,
      rating: 5,
    },
  ],
};
