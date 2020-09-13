import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Text, Divider} from '@src/components/elements';
import {View} from 'react-native';

storiesOf('Divider', module).add('Divider', () => (
  <View style={{padding: 10}}>
    <Text>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
    </Text>
    <Divider style={{marginTop: 10, marginBottom: 10}} />
    <Text>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
    </Text>
    <Divider style={{marginTop: 10, marginBottom: 10}} />
    <Text>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
    </Text>
  </View>
));
