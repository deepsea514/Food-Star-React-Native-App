import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  root: {
    flex: 1,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  closeIconContainer: {
    width: 20,
  },
  searchBarIconContainer: {
    flex: 1,
  },
  separator: {
    height: 0.5,
    width: '100%',
    alignSelf: 'flex-end',
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 10,
    textAlign: 'left',
  },
});
