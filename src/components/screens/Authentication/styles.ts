import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  appIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appIcon: {
    width: '60%',
    height: '60%',
  },
  loginMethodContainer: {
    padding: 25,
    paddingBottom: 35,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  introductionText: {
    marginTop: 5,
  },
  loginMethod: {
    marginTop: 20,
  },
  button: {
    marginTop: 10,
  },
});
