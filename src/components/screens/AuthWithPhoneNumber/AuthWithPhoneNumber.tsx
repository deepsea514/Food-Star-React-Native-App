import * as React from 'react';
import {SafeAreaView, View, ScrollView, Alert} from 'react-native';
import {Text, TextField, Button, Dialog} from '@src/components/elements';
import useThemeColors from '@src/custom-hooks/useThemeColors';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type AuthWithPhoneNumberProps = {};

const AuthWithPhoneNumber: React.FC<AuthWithPhoneNumberProps> = () => {
  const navigation = useNavigation();
  const {card} = useThemeColors();
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const _onPhoneNumberFieldChange = (value: string) => {
    setPhoneNumber(value);
  };

  const _hideModal = () => {
    setIsModalVisible(false);
  };

  const _onNextButtonPressed = () => {
    if (!phoneNumber) {
      Alert.alert('Error', 'Please enter your phone number!');
      return;
    }
    setIsModalVisible(true);
  };
  const _onConfirmButtonPressed = () => {
    navigation.navigate('AuthVerificationCodeScreen');
    _hideModal();
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.formContainer}>
          <Text isBold isHeadingTitle>
            Enter your phone number
          </Text>
          <Text isSecondary hasMargin>
            Please enter your phone number to use our services
          </Text>
          <TextField
            style={[{backgroundColor: card}, styles.phoneNumberTextField]}
            value={phoneNumber}
            onChangeText={_onPhoneNumberFieldChange}
            hasMargin
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            autoFocus
          />
        </View>
        <Button isFullWidth onPress={_onNextButtonPressed}>
          <Text isBold>Next</Text>
        </Button>
      </ScrollView>
      <Dialog isVisible={isModalVisible} onBackdropPress={_hideModal}>
        <Text isCenter>Login with phone number</Text>
        <Text isHeadingTitle isCenter isBold style={styles.phoneNumberText}>
          {phoneNumber}
        </Text>
        <Text isCenter>
          We will send the authentication code to the phone number you entered.
        </Text>
        <Text isCenter>Do you want to continue?</Text>
        <View style={styles.confirmButtonContainer}>
          <Button isFullWidth onPress={_onConfirmButtonPressed}>
            <Text isBold>Confirm</Text>
          </Button>
        </View>
        <View style={styles.cancelButtonContainer}>
          <Button isFullWidth isTransparent onPress={_hideModal}>
            <Text>Cancel</Text>
          </Button>
        </View>
      </Dialog>
    </SafeAreaView>
  );
};

export default AuthWithPhoneNumber;
