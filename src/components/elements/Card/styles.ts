import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  card: {
    // backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  coverImageContainer: {
    height: 180,
    backgroundColor: 'transparent',
  },
  coverImageSmallContainer: {
    height: 120,
    backgroundColor: 'transparent',
  },
  coverImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  parallaxImageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  cardBody: {
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  cardTitle: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    marginTop: 2,
    marginBottom: 10,
    fontSize: 12,
  },
});
