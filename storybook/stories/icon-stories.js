import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Container, Icon} from '@src/components/elements';

storiesOf('Icon', module).add('Icon', () => (
  <Container
    style={{padding: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
    <Icon name="compass" size={30} />
    <Icon name="compass" size={40} solid />
    <Icon name="compass" size={50} isPrimary />
  </Container>
));
