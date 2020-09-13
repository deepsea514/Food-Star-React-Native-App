import * as React from 'react';
import {SafeAreaView, View, ScrollView, Alert} from 'react-native';
import {Text, TextField, Button} from '@src/components/elements';
import useThemeColors from '@src/custom-hooks/useThemeColors';
import styles from './styles';
import EmailSentModal from './EmailSentModal';

type ForgotPasswordProps = {};

const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const {card} = useThemeColors();
  const [email, setEmail] = React.useState('');
  const [sentEmailModalVisible, setSentEmailModalVisible] = React.useState(
    false,
  );

  const _onPasswordFieldChange = (value: string) => {
    setEmail(value);
  };

  const _onConfirmButtonPressed = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email!');
      return;
    }
    setSentEmailModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.formContainer}>
          <Text isBold isHeadingTitle>
            Forgot your password?
          </Text>
          <Text isSecondary hasMargin>
            Please enter your email address and we'll send you a link to reset
            your password
          </Text>
          <TextField
            autoFocus
            style={[{backgroundColor: card}, styles.emailTextField]}
            value={email}
            onChangeText={_onPasswordFieldChange}
            hasMargin
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>
        <Button isFullWidth onPress={_onConfirmButtonPressed}>
          <Text isBold>Confirm</Text>
        </Button>
      </ScrollView>
      <EmailSentModal
        isVisible={sentEmailModalVisible}
        setIsVisble={setSentEmailModalVisible}
      />
    </SafeAreaView>
  );
};

export default ForgotPassword;
