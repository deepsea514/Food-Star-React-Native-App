import {ImageSourcePropType} from 'react-native';

const faker = require('faker');

export type Promotion = {
  id: string;
  name: string;
  description: string;
  tag: string;
  image: ImageSourcePropType;
};

export const promotions: Promotion[] = Array(10)
  .fill(0)
  .map((_) => ({
    id: faker.random.uuid(),
    name: faker.lorem.lines(1),
    description: faker.lorem.lines(1),
    tag: 'Limited Offer',
    image: require('../assets/promotions/promotion.png'),
  }));
