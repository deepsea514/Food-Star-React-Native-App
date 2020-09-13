import {ImageSourcePropType} from 'react-native';

const faker = require('faker');

export type Driver = {
  id: string;
  name: string;
  ratings: string;
  averageRating: string;
  avatar: ImageSourcePropType;
};

export const driver: Driver = {
  id: faker.random.uuid(),
  name: faker.name.findName(),
  ratings: '144',
  averageRating: '4.6',
  avatar: require('@src/assets/drivers/avatar.png'),
};
