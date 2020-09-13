import * as React from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Rating, Button, Icon, Text} from '@src/components/elements';
import {Place} from '@src/data/mock-places';
import styles from './styles';

type PlaceCardInfoProps = {
  data: Place;
  ratingStarBackgroundColor?: string;
};

const PlaceCardInfo: React.FC<PlaceCardInfoProps> = ({
  data,
  ratingStarBackgroundColor,
}) => {
  const {distance, rating, time} = data;
  const {
    colors: {border},
  } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Rating
          value={rating}
          itemSize={16}
          readonly
          ratingStarBackgroundColor={ratingStarBackgroundColor}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={[styles.button, {backgroundColor: border}]}
          icon={<Icon isPrimary name="map-marker-alt" size={10} />}>
          <Text isPrimary style={styles.buttonText}>{`${distance}m`}</Text>
        </Button>
        <Button
          style={[styles.button, {backgroundColor: border}]}
          icon={<Icon isPrimary name="clock" size={10} />}>
          <Text isPrimary style={styles.buttonText}>{`${time}'`}</Text>
        </Button>
      </View>
    </View>
  );
};

export default PlaceCardInfo;
