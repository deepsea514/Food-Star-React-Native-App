import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
    marginTop: -5,
  },
  ratingContainer: {
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: -5,
  },
  button: {
    padding: 8,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 50,
    marginRight: 10,
    marginTop: 5,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '500',
  },
});
