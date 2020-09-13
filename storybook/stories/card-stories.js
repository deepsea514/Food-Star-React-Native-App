import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View, Dimensions} from 'react-native';
import {Card, Text} from '@src/components/elements';

storiesOf('Card', module)
  .add('Basic card', () => (
    <Card title="What is Lorem Ipsum?" subTitle="Lorem Ipsum">
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries
      </Text>
    </Card>
  ))
  .add('Card with cover images', () => (
    <View
      style={{width: Dimensions.get('window').width / 2, flexDirection: 'row'}}>
      <Card
        coverImage={require('@src/assets/dish-details/cover-photo.jpg')}
        title="What is Lorem Ipsum?"
        isSmallCover
        subTitle="Lorem Ipsum">
        <Text>Lorem Ipsum is simply dummy text of the printing</Text>
      </Card>
      <Card
        coverImage={require('@src/assets/dish-details/cover-photo.jpg')}
        title="What is Lorem Ipsum?"
        isSmallCover
        subTitle="Lorem Ipsum">
        <Text>Lorem Ipsum is simply dummy text of the printing</Text>
      </Card>
    </View>
  ));
