import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryItem: {
    flexDirection: 'column',
    alignItems: 'center',
    width: Dimensions.get('window').width / 4,
    padding: 10,
    borderWidth: 0.3,
  },
  categoryImage: {
    height: 50,
    width: 50,
  },
  categoryTitle: {
    fontSize: 12,
    marginTop: 10,
    fontWeight: 'bold',
  },
});
