import * as React from 'react';
import {View, Image} from 'react-native';
import {driver} from '@src/data/mock-driver';
import ListRowItem from '@src/components/elements/List/ListRowItem';
import {Text, Icon} from '@src/components/elements';
import styles from './styles';

type DriverInformationProps = {};

const {id, name, avatar, ratings, averageRating} = driver;

const DriverInformation: React.FC<DriverInformationProps> = () => {
  return (
    <ListRowItem
      id={id}
      title={name}
      note="Your driver"
      subTitle="Delivery time 14:04 PM"
      containerStyle={styles.driverContainer}
      leftIcon={<Image source={avatar} style={styles.driverAvatar} />}
      rightIcon={
        <View>
          <View style={styles.driverAverageRatingContainer}>
            <Icon name="star" solid isPrimary style={styles.driverRatingIcon} />
            <Text isPrimary>{averageRating}</Text>
          </View>
          <Text isSecondary>{ratings} ratings</Text>
        </View>
      }
      rightContainerStyle={styles.driverRightItemContainer}
    />
  );
};

export default DriverInformation;
