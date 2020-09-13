import * as React from 'react';
import {View, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import {Container, Text, Button, Dialog} from '@src/components/elements';
import styles from './styles';

type EmailSentModalProps = {
  isVisible: boolean;
  setIsVisble: (value: React.SetStateAction<boolean>) => void;
};

const EmailSentModal: React.FC<EmailSentModalProps> = ({
  isVisible,
  setIsVisble,
}) => {
  const navigation = useNavigation();
  const fadeIn = React.useRef(new Animated.Value(0)).current;
  const fadeOut = React.useRef(new Animated.Value(1)).current;
  const [isAnimationFinished, setIsAnimationFinished] = React.useState(false);
  React.useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: isAnimationFinished ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeOut, {
      toValue: isAnimationFinished ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isAnimationFinished, fadeIn, fadeOut]);

  const _onAnimationFinish = () => {
    setIsAnimationFinished(true);
  };

  const _onBackToLoginButtonPressed = () => {
    setIsVisble(false);
    navigation.dispatch(StackActions.replace('LoginScreen'));
  };

  return (
    <Dialog isVisible={isVisible}>
      <Container style={styles.container}>
        <View style={styles.content}>
          <LottieView
            source={require('@src/assets/animations/email-sent.json')}
            autoPlay
            duration={6000}
            loop={false}
            onAnimationFinish={_onAnimationFinish}
            style={styles.lottieView}
          />
          {!isAnimationFinished && (
            <Animated.View
              style={[styles.processingOrderContainer, {opacity: fadeOut}]}>
              <Text isBold>Sending an email to you...</Text>
            </Animated.View>
          )}
          <Animated.View
            style={[styles.successMessageContainer, {opacity: fadeIn}]}>
            <Text isHeadingTitle isBold isPrimary>
              Check in your email!
            </Text>
            <Text isCenter style={styles.successMessage}>
              We've just emailed you with the instructions to reset your
              password.
            </Text>
          </Animated.View>
        </View>
        <Animated.View
          style={[styles.footerButtonContainer, {opacity: fadeIn}]}>
          <Button isFullWidth onPress={_onBackToLoginButtonPressed}>
            <Text isWhite isBold>
              Back to Login
            </Text>
          </Button>
        </Animated.View>
      </Container>
    </Dialog>
  );
};
export default EmailSentModal;
