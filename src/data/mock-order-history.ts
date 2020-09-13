const faker = require('faker');

export type OrderHistory = {
  id: string;
  date: string;
  name: string;
  totalItems: number;
  totalPrice: number;
};

export const orderHistoryList: OrderHistory[] = Array(10)
  .fill(0)
  .map((_) => ({
    id: faker.random.uuid(),
    date: new Date(faker.date.past()).toDateString(),
    name: faker.commerce.productName(),
    totalPrice: faker.commerce.price(5, 60),
    totalItems: faker.random.number(5),
  }));
