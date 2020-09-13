import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 40,
    position: 'absolute',
    top: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  coverPhotoContainer: {
    maxHeight: 225,
  },
  coverPhoto: {
    width: '100%',
    height: '100%',
  },
  addToBasketButtonContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToBasketButton: {
    alignItems: 'center',
    width: '100%',
  },
  addToBasketButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 2,
    color: 'white',
  },
});
