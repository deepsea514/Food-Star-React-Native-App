import * as React from 'react';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, Text, Touchable} from '@src/components/elements';
import {Dish} from '@src/data/mock-places';
import styles from './styles';

type DishItemProps = {
  data: Dish;
};

const DishItem: React.FC<DishItemProps> = ({data}) => {
  const {price, title, description, image} = data;
  const navigation = useNavigation();

  const _onPlaceItemPressed = () => {
    navigation.navigate('DishDetailsModal');
  };

  return (
    <Touchable onPress={_onPlaceItemPressed}>
      <Container style={styles.container}>
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.placeInfoContainer}>
          <View style={styles.placeInfo}>
            <Text style={styles.placeTitle}>{title}</Text>
            <Text style={styles.placeSubTitle}>{description}</Text>
            <Text isPrimary isBold>
              ${price}
            </Text>
          </View>
        </View>
      </Container>
    </Touchable>
  );
};

export default DishItem;
