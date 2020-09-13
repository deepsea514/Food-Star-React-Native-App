import * as React from 'react';
import {SafeAreaView, View, ScrollView, Alert, Image} from 'react-native';
import {Text, TextField, Button} from '@src/components/elements';
import useThemeColors from '@src/custom-hooks/useThemeColors';
import styles from './styles';
import AuthContext from '@src/context/auth-context';
import {useNavigation} from '@react-navigation/native';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const navigation = useNavigation();
  const {signIn} = React.useContext(AuthContext);
  const {card} = useThemeColors();
  const [password, setPassword] = React.useState('');

  const _onPasswordFieldChange = (value: string) => {
    setPassword(value);
  };

  const _onNextButtonPressed = () => {
    if (!password) {
      Alert.alert('Error', 'Please enter your password!');
      return;
    }
    signIn();
  };
  const _onForgotPasswordButtonPressed = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.formContainer}>
          <Image
            source={require('../../../assets/profile/avatar.png')}
            style={styles.avatar}
          />
          <Text isBold isHeadingTitle>
            Welcome! Vu Nguyen
          </Text>
          <Text isSecondary hasMargin>
            Please enter your password to use our services
          </Text>
          <TextField
            autoFocus
            style={[{backgroundColor: card}, styles.passwordTextField]}
            value={password}
            onChangeText={_onPasswordFieldChange}
            hasMargin
            placeholder="Enter your password"
            secureTextEntry={true}
          />
        </View>
        <Button isFullWidth onPress={_onNextButtonPressed}>
          <Text isBold>Next</Text>
        </Button>
        <Button
          isFullWidth
          isTransparent
          onPress={_onForgotPasswordButtonPressed}
          style={styles.forgotPasswordButton}>
          <Text>Forgot Password</Text>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
