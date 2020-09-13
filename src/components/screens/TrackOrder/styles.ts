import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollViewContentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 150,
  },
  deliveryTimeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  deliveryStepContainer: {
    paddingTop: 10,
    paddingLeft: 25,
    paddingRight: 25,
    height: '100%',
  },
  driverContainer: {},
  driverAvatar: {
    width: 60,
    height: 60,
  },
  driverAverageRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  driverRatingIcon: {
    marginRight: 5,
  },
  driverRightItemContainer: {
    flex: 5,
  },
  footerButtonContainer: {
    width: '100%',
    padding: 10,
    paddingTop: 15,
  },
  cancelOrderButton: {
    marginTop: 10,
  },
  mapViewText: {
    marginLeft: 5,
  },
  mapViewContainer: {
    height: '100%',
  },
  mapView: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  currentLocationMarkerContainer: {
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 5,
  },
  marker: {
    width: 28,
    height: 28,
  },
  driverMarkerContainer: {
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 10,
  },
});
