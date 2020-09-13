import {ImageSourcePropType} from 'react-native';

const faker = require('faker');

export type Profile = {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: ImageSourcePropType;
  coverPhoto: ImageSourcePropType;
};

export const profile: Profile = {
  id: faker.random.uuid(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  avatar: require('../assets/profile/avatar.png'),
  coverPhoto: require('../assets/profile/cover-photo.jpg'),
};
