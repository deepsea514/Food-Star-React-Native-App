import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {RadioButton, Container} from '@src/components/elements';

const options: RadioOption[] = [
  {
    label: 'Option 1',
    value: '1',
  },
  {
    label: 'Option 2',
    value: '2',
  },
  {
    label: 'Option 3',
    value: '3',
  },
];

const _onItemPressed = (item: RadioOption) => {
  console.log('_onItemPressed -> item', item);
};

storiesOf('RadioButton', module).add('RadioButton', () => (
  <Container>
    <RadioButton data={options} onItemPressed={_onItemPressed} />
  </Container>
));
