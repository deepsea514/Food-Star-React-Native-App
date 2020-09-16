import {I18nManager, StyleSheet} from 'react-native';

export default StyleSheet.create({
  headerLeftContainer: {
    paddingLeft: 10,
  },
  headerRightContainer: {
    paddingRight: 10,
  },
  headerBackIcon: {
    width: I18nManager.isRTL ? 'auto' : 100,
    height: 25,
  },
});
