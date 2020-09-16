import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  tabSectionListContainer: {
    flex: 1,
  },
  coverPhotoContainer: {
    maxHeight: 225,
  },
  coverPhoto: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
  tabBar: {
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabText: {
    padding: 15,
    fontSize: 16,
    fontWeight: '500',
  },
  separator: {
    height: 0.5,
    width: '100%',
    alignSelf: 'flex-end',
  },
  sectionHeaderContainer: {
    height: 10,
    borderBottomWidth: 1,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 10,
    textAlign: 'left',
  },
  itemContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  itemTitle: {
    flex: 1,
    fontSize: 20,
  },
  itemPrice: {
    fontSize: 18,
  },
  itemDescription: {
    marginTop: 10,
    fontSize: 16,
  },
  itemRow: {
    flexDirection: 'row',
  },
});
