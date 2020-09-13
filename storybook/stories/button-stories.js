import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {Button, Text} from '@src/components/elements';

storiesOf('Button', module)
  .add('Basic button', () => (
    <View style={{padding: 10}}>
      <Button>
        <Text>Press me!</Text>
      </Button>
      <Button style={{ marginTop: 10, width: '75%' }}>
        <Text>Press me!</Text>
      </Button>
      <Button style={{ marginTop: 10, width: '50%' }}>
        <Text>Press me!</Text>
      </Button>
    </View>
  ))
  .add('Transparent button', () => (
    <View style={{padding: 10}}>
      <Text isPrimary>Press me!</Text>
    </View>
  ));
