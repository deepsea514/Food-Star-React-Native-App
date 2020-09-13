import * as React from 'react';
import {View, Image} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  MapEvent,
  Region,
  Polyline,
} from 'react-native-maps';
import styles from './styles';
import {darkModeStyle} from '@src/utils/googleMapStyle';
import {useTheme} from '@react-navigation/native';

type DeliveryMapViewProps = {};

const DeliveryMapView: React.FC<DeliveryMapViewProps> = () => {
  const {
    colors: {primary},
  } = useTheme();
  const [currentLocation, setCurrentLocation] = React.useState<Region>({
    longitude: -122.406417,
    latitude: 37.785834,
    longitudeDelta: 0.0022,
    latitudeDelta: 0.0031,
  });

  const _onRegionChangeComplete = (region: Region) => {
    setCurrentLocation(region);
  };

  const _onMapViewPressed = (event: MapEvent) => {
    const {
      nativeEvent: {coordinate},
    } = event;

    console.log('_onMapViewPressed -> coordinate', coordinate);
  };

  return (
    <View style={styles.mapViewContainer}>
      <MapView
        loadingEnabled
        cacheEnabled
        loadingIndicatorColor="black"
        loadingBackgroundColor="black"
        provider={PROVIDER_GOOGLE}
        style={styles.mapView}
        customMapStyle={darkModeStyle}
        onRegionChangeComplete={_onRegionChangeComplete}
        onPress={_onMapViewPressed}
        region={currentLocation}>
        <Marker
          coordinate={{
            longitude: -122.406417,
            latitude: 37.785834,
          }}>
          <View style={styles.currentLocationMarkerContainer}>
            <Image
              source={require('../../../assets/drivers/location.png')}
              style={styles.marker}
            />
          </View>
        </Marker>
        <Marker
          coordinate={{
            ...currentLocation,
            longitude: -122.40755639970303,
            latitude: 37.78638161404493,
          }}>
          <View style={styles.driverMarkerContainer}>
            <Image
              source={require('../../../assets/drivers/driver-marker.png')}
              style={styles.marker}
            />
          </View>
        </Marker>
        <Polyline
          lineDashPattern={[3, 3, 3, 3]}
          coordinates={[
            {latitude: 37.78651041289761, longitude: -122.40747157484294},
            {latitude: 37.78662062947493, longitude: -122.406404055655},
            {latitude: 37.78569323533935, longitude: -122.40623038262129},
            {
              latitude: 37.785834,
              longitude: -122.406417,
            },
          ]}
          strokeColor={primary}
          strokeWidth={2}
        />
      </MapView>
    </View>
  );
};

export default DeliveryMapView;
