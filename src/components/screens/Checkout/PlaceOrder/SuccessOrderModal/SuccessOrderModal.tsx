import * as React from 'react';
import {View, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import {Container, Text, Button, Dialog} from '@src/components/elements';
import CartContext from '@src/context/cart-context';
import styles from './styles';

type OrderSuccessModalProps = {
  isVisible: boolean;
  setIsVisble: (value: React.SetStateAction<boolean>) => void;
};

const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
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
  const {clearCart} = React.useContext(CartContext);

  const _onAnimationFinish = () => {
    setIsAnimationFinished(true);
  };

  const _onBackdropPress = () => {
    setIsVisble(false);
    setIsAnimationFinished(false);
  };

  const _onOrderSomethingElseButtonPressed = () => {
    clearCart();
    setIsVisble(false);
    navigation.navigate('HomeScreen');
  };

  const _onTrackOrderButtonPressed = () => {
    clearCart();
    setIsVisble(false);
    navigation.dispatch(StackActions.replace('TrackOrderScreen'));
  };

  return (
    <Dialog isVisible={isVisible} onBackdropPress={_onBackdropPress}>
      <Container style={styles.container}>
        <View style={styles.content}>
          <LottieView
            source={require('@src/assets/animations/order-success.json')}
            autoPlay
            loop={false}
            onAnimationFinish={_onAnimationFinish}
            style={styles.lottieView}
          />
          {!isAnimationFinished && (
            <Animated.View
              style={[styles.processingOrderContainer, {opacity: fadeOut}]}>
              <Text isBold>Processing Your Order...</Text>
            </Animated.View>
          )}
          <Animated.View
            style={[styles.successMessageContainer, {opacity: fadeIn}]}>
            <Text isHeadingTitle isBold isPrimary>
              Thank you for your order.
            </Text>
            <Text isCenter style={styles.successMessage}>
              You can track the delivery in the "Orders" section.
            </Text>
          </Animated.View>
        </View>
        <Animated.View
          style={[styles.footerButtonContainer, {opacity: fadeIn}]}>
          <Button isFullWidth onPress={_onTrackOrderButtonPressed}>
            <Text isWhite isBold>
              Track My Order
            </Text>
          </Button>
          <Button
            isFullWidth
            isTransparent
            style={styles.orderSomethingButton}
            onPress={_onOrderSomethingElseButtonPressed}>
            <Text>Order Something Else</Text>
          </Button>
        </Animated.View>
      </Container>
    </Dialog>
  );
};
export default OrderSuccessModal;
