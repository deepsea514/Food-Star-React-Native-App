import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native';
import {CheckBox, Container} from '@src/components/elements';

storiesOf('Checkbox', module).add('Checkbox', () => (
  <Container>
    <CheckBox label="Check me please" onPress={() => console.log('checked')} />
  </Container>
));
