import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  dishItemContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  checkBoxText: {
    padding: 10,
    paddingLeft: 0,
    paddingRight: 0,
    width: '100%',
  },
  checkBoxContainer: {
    flex: 4,
  },
  checkBoxTextContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
