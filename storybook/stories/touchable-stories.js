import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Touchable, Card, Text} from '@src/components/elements';
import {View} from 'react-native';

storiesOf('Touchable', module).add('Touchable', () => (
  <View
    style={{padding: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
    <Touchable onPress={() => console.log('pressed')}>
      <Card>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </Text>
      </Card>
    </Touchable>
  </View>
));
