import React from 'react';
import {View, Dimensions} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {Carousel, Card} from '@src/components/elements';
import {mockPlaces} from '@src/data/mock-places';

storiesOf('Carousel', module)
  .add('Carousel', () => (
    <View style={{padding: 10}}>
      <Carousel
        data={mockPlaces}
        itemWidth={Dimensions.get('window').width / 2}
        renderContent={(item: Place, index, parallaxProps) => {
          const {image, title, subTitle} = item;
          return (
            <Card
              coverImage={image}
              title={title}
              subTitle={subTitle}
              parallaxProps={parallaxProps}
            />
          );
        }}
      />
    </View>
  ))
  .add('Carousel with Snap option enabled', () => (
    <View style={{padding: 10}}>
      <Carousel
        data={mockPlaces}
        enableSnap
        itemWidth={Dimensions.get('window').width}
        renderContent={(item: Place, index, parallaxProps) => {
          const {image, title, subTitle} = item;
          return (
            <Card
              coverImage={image}
              title={title}
              subTitle={subTitle}
              parallaxProps={parallaxProps}
            />
          );
        }}
      />
    </View>
  ));
