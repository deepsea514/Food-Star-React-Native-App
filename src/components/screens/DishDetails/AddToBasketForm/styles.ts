import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  formContainer: {
    marginTop: 10,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textField: {
    marginTop: 15,
  },
  buttonGroupSection: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  buttonGroupContainer: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'transparent',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
