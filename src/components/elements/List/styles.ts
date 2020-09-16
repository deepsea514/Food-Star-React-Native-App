import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  leftItem: {
    marginRight: 15,
  },
  rightItem: {
    flex: 2,
    alignItems: 'flex-end',
  },
  contentContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  content: {
    flex: 11,
  },
  titleText: {
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'left',
  },
  subTitle: {
    textAlign: 'left',
  },
  note: {
    fontSize: 12,
    textAlign: 'left',
  },
});
