import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
  },
  placeInfoContainer: {
    flex: 1,
  },
  placeInfo: {
    marginTop: 0,
  },
  placeTitle: {
    fontWeight: 'bold',
  },
  placeSubTitle: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 12,
  },
});
