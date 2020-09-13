import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Container, TextField} from '@src/components/elements';

storiesOf('TextField', module).add('TextField', () => (
  <Container
    style={{padding: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
    <TextField placeholder="Enter Address" leftIcon="map-marker-alt" />
  </Container>
));
