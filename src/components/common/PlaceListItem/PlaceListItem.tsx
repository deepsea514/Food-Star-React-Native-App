import * as React from 'react';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, Text, Touchable} from '@src/components/elements';
import {Place} from '@src/data/mock-places';
import styles from './styles';
import PlaceCardInfo from '../PlaceCardInfo';

type PlaceListItemProps = {
  data: Place;
};

const PlaceListItem: React.FC<PlaceListItemProps> = ({data}) => {
  const {image, title, subTitle} = data;
  const navigation = useNavigation();

  const _onPlaceItemPressed = () => {
    navigation.navigate('PlaceDetailsScreen');
  };

  return (
    <Touchable onPress={_onPlaceItemPressed}>
      <Container style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.placeInfoContainer}>
          <View style={styles.placeInfo}>
            <Text style={styles.placeTitle}>{title}</Text>
            <Text style={styles.placeSubTitle}>{subTitle}</Text>
          </View>
          <PlaceCardInfo data={data} />
        </View>
      </Container>
    </Touchable>
  );
};

export default PlaceListItem;
