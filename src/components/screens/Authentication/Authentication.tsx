import * as React from 'react';
import {View, Image} from 'react-native';
import {Container, Text, Button} from '@src/components/elements';
import AuthContext from '@src/context/auth-context';
import useThemeColors from '@src/custom-hooks/useThemeColors';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type AuthenticationProps = {};

const Authentication: React.FC<AuthenticationProps> = () => {
  const navigation = useNavigation();
  const {primary} = useThemeColors();
  const {signIn} = React.useContext(AuthContext);

  const _onConnectWithPhoneNumberButtonPressed = () => {
    navigation.navigate('AuthWithPhoneNumberScreen');
  };
  const _onSocialNetworkConnectButtonPressed = () => {
    signIn();
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: primary,
        },
      ]}>
      <View style={styles.appIconContainer}>
        <Image
          source={require('../../../assets/app/app_icon.png')}
          style={styles.appIcon}
        />
      </View>
      <Container style={styles.loginMethodContainer}>
        <Text isBold isHeadingTitle>
          Get food you want.
        </Text>
        <Text isSecondary style={styles.introductionText}>
          Satisfy your cravings by getting the food you love from your favourite
          restaurants delivered to you fast. Delivery & takeout from the best
          local restaurants.
        </Text>
        <View style={styles.loginMethod}>
          <Button
            style={styles.button}
            isFullWidth
            onPress={_onConnectWithPhoneNumberButtonPressed}>
            <Text isBold isWhite>
              Connect with Phone Number
            </Text>
          </Button>
          <Button
            style={styles.button}
            backgroundColor="#4267b2"
            isFullWidth
            onPress={_onSocialNetworkConnectButtonPressed}>
            <Text isBold isWhite>
              Connect with Facebook
            </Text>
          </Button>
          <Button
            style={styles.button}
            backgroundColor="#4285F3"
            isFullWidth
            onPress={_onSocialNetworkConnectButtonPressed}>
            <Text isBold isWhite>
              Connect with Google
            </Text>
          </Button>
        </View>
      </Container>
    </View>
  );
};

export default Authentication;
