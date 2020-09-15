import {Platform} from 'react-native';

export const getStoreName = () => {
  return Platform.OS === 'android' ? 'Play Store' : 'App Store';
};

export const getStoreURL = () => {
  return 'https://codecanyon.net/item/food-star-react-native-food-delivery-template/28398069';
};
