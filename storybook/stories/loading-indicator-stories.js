import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Container, Icon, LoadingIndicator} from '@src/components/elements';

storiesOf('Loading Indicator', module).add('Loading Indicator', () => (
  <Container
    style={{padding: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
    <LoadingIndicator size="small" />
    <LoadingIndicator size="large" />
  </Container>
));
