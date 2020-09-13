import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Carousel, Section, Card, Text} from '@src/components/elements';
import {Dimensions} from 'react-native';
import {mockPlaces, Place} from '@src/data/mock-places';

type PopularDishesProps = {};

const PopularDishes: React.FC<PopularDishesProps> = () => {
  const navigation = useNavigation();

  const _onButtonActionPressed = () => {
    navigation.navigate('PlaceListScreen', {title: "What's Popular Here"});
  };

  const _onPlaceItemPressed = () => {
    navigation.navigate('DishDetailsModal');
  };

  return (
    <Section
      title="What's Popular Here"
      actionButtonText="View more"
      onButtonActionPressed={_onButtonActionPressed}>
      <Carousel
        data={mockPlaces}
        itemWidth={Dimensions.get('window').width / 2 - 15}
        renderContent={(item: Place, _, parallaxProps) => {
          const {image, title, subTitle} = item;
          return (
            <Card
              coverImage={image}
              isSmallCover
              title={title}
              subTitle={subTitle}
              parallaxProps={parallaxProps}
              onPress={_onPlaceItemPressed}>
              <Text isPrimary isBold>
                $14.4
              </Text>
            </Card>
          );
        }}
      />
    </Section>
  );
};

export default PopularDishes;
