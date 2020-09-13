import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Container, Rating} from '@src/components/elements';

storiesOf('Rating', module).add('Rating', () => (
  <Container
    style={{padding: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
    <Rating startingValue={3} value={5} itemSize={16} />
  </Container>
));
