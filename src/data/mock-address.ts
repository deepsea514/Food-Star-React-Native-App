const faker = require('faker');

export type Address = {
  id: string;
  name: string;
  description: string;
  isHome?: boolean;
  isWork?: boolean;
};

export const savedAddresses: Address[] = Array(15)
  .fill(0)
  .map((_) => ({
    id: faker.random.uuid(),
    name: `${faker.address.streetName()} - ${faker.address.city()}`,
    description: faker.address.streetAddress(),
  }));

export const favoriteAddresses: Address[] = Array(2)
  .fill(0)
  .map((_, index) => ({
    id: faker.random.uuid(),
    name: index === 0 ? 'Home' : 'Work',
    description: `${faker.address.streetAddress()} - ${faker.address.city()}`,
    isHome: index === 0,
    isWork: index === 1,
  }));
