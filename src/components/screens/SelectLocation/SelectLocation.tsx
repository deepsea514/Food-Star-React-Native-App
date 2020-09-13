import * as React from 'react';
import {View, Platform, PermissionsAndroid} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  LatLng,
  MapEvent,
  Region,
} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import styles from './styles';
import {darkModeStyle} from '@src/utils/googleMapStyle';

type SelectLocationProps = {};

const SelectLocation: React.FC<SelectLocationProps> = () => {
  const [currentLocation, setCurrentLocation] = React.useState<Region>({
    longitude: 0,
    latitude: 0,
    longitudeDelta: 0.0022,
    latitudeDelta: 0.0031,
  });
  const [markerLocation, setMarkerLocation] = React.useState<LatLng>();

  const _initUserLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const {longitude, latitude} = position.coords;
        setCurrentLocation((location) => {
          setMarkerLocation({
            longitude,
            latitude,
          });
          return {
            ...location,
            longitude,
            latitude,
          };
        });
      },
      (error) => {
        console.log(error.code, error.message);
      },
      {timeout: 15000, maximumAge: 10000},
    );
  };

  React.useEffect(() => {
    const requestAndroidLocationPermission = async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Food Delivery App Permission',
          message:
            'Food Delivery App needs access to your location ' +
            'so you see where you are on the map.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        _initUserLocation();
      } else {
        console.log('Camera permission denied');
      }
    };

    if (Platform.OS === 'android') {
      requestAndroidLocationPermission();
    } else {
      _initUserLocation();
    }
  }, []);

  const _onMapViewPressed = (event: MapEvent) => {
    const {
      nativeEvent: {
        coordinate: {latitude, longitude},
      },
    } = event;

    setMarkerLocation({
      latitude,
      longitude,
    });
  };

  const _onRegionChangeComplete = (region: Region) => {
    setCurrentLocation(region);
  };

  const _onMarkerDragEd = (event: MapEvent) => {
    setMarkerLocation(event.nativeEvent.coordinate);
  };

  return (
    <View style={styles.rootView}>
      <MapView
        loadingEnabled
        cacheEnabled
        loadingIndicatorColor="black"
        loadingBackgroundColor="black"
        provider={PROVIDER_GOOGLE}
        toolbarEnabled
        showsUserLocation
        showsMyLocationButton
        style={styles.mapView}
        customMapStyle={darkModeStyle}
        zoomControlEnabled
        onRegionChangeComplete={_onRegionChangeComplete}
        region={currentLocation}
        onPress={_onMapViewPressed}>
        {markerLocation && (
          <Marker
            draggable
            coordinate={markerLocation}
            onDragEnd={_onMarkerDragEd}
          />
        )}
      </MapView>
    </View>
  );
};

export default SelectLocation;
