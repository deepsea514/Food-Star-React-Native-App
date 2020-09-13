import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Carousel, Section, Card} from '@src/components/elements';
import {Dimensions} from 'react-native';
import {mockPlaces, Place} from '@src/data/mock-places';
import PlaceCardInfo from '@src/components/common/PlaceCardInfo';

type PopularPlacesProps = {};

const PopularPlaces: React.FC<PopularPlacesProps> = () => {
  const navigation = useNavigation();

  const _onButtonActionPressed = () => {
    navigation.navigate('PlaceListScreen', {title: 'Popular Near You'});
  };

  const _onPlaceItemPressed = () => {
    navigation.navigate('PlaceDetailsScreen');
  };

  return (
    <Section
      title="Popular Near You"
      actionButtonText="View more"
      onButtonActionPressed={_onButtonActionPressed}>
      <Carousel
        data={mockPlaces}
        hasParallaxImages
        itemWidth={Dimensions.get('window').width - 50}
        renderContent={(item: Place, index, parallaxProps) => {
          const {image, title, subTitle} = item;
          return (
            <Card
              coverImage={image}
              title={title}
              subTitle={subTitle}
              parallaxProps={parallaxProps}
              onPress={_onPlaceItemPressed}>
              <PlaceCardInfo data={item} />
            </Card>
          );
        }}
      />
    </Section>
  );
};

export default PopularPlaces;
