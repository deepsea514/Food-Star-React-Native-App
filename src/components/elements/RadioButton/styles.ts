import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
  checkBox: {
    width: 18,
    height: 18,
    marginRight: 20,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightElementContainer: {
    alignItems: 'flex-end',
  },
});
