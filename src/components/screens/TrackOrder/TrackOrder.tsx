import * as React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import DeliveryTime from './DeliveryTime';
import DeliveryStep from './DeliveryStep';
import DriverInformation from './DriverInformation';
import {Divider, Container, Button, Text} from '@src/components/elements';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import DeliveryMapView from './DeliveryMapView';

type TrackOrderProps = {};

const TrackOrder: React.FC<TrackOrderProps> = () => {
  const navigation = useNavigation();
  const [isMapViewVisible, setIsMapViewVisible] = React.useState(false);

  const _onOrderSomethingElseButtonPressed = () => {
    navigation.navigate('HomeScreen');
  };

  const _onMapViewButtonPressed = () => {
    setIsMapViewVisible(!isMapViewVisible);
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContentContainerStyle}>
        <Container>
          <DeliveryTime />
          <Divider />
          <DriverInformation />
        </Container>
        {isMapViewVisible ? <DeliveryMapView /> : <DeliveryStep />}
      </ScrollView>
      <Container style={styles.footerButtonContainer}>
        <Button isFullWidth onPress={_onMapViewButtonPressed}>
          <Text isWhite isBold style={styles.mapViewText}>
            {!isMapViewVisible ? 'Map View' : 'Order Status View'}
          </Text>
        </Button>
        <Button
          isFullWidth
          isTransparent
          onPress={_onOrderSomethingElseButtonPressed}
          style={styles.cancelOrderButton}>
          <Text>Cancel your order</Text>
        </Button>
      </Container>
    </SafeAreaView>
  );
};

export default TrackOrder;
