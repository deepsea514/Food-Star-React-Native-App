import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Container, List} from '@src/components/elements';
const faker = require('faker');

const data = Array(15)
  .fill(0)
  .map((_) => ({
    id: faker.random.uuid(),
    title: faker.lorem.sentence(4),
    subTitle: faker.lorem.sentence(6),
  }));

storiesOf('List', module).add('List', () => (
  <Container style={{padding: 10}}>
    <List data={data} />
  </Container>
));
