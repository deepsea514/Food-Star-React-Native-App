import * as React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, Button, Text} from '@src/components/elements';
import CartContext from '@src/context/cart-context';
import {formatCurrency} from '@src/utils/number-formatter';
import styles from './styles';

type BasketSummaryProps = {};

const BasketSummary: React.FC<BasketSummaryProps> = () => {
  const {cartItems, totalPrice} = React.useContext(CartContext);
  const navigation = useNavigation();

  const _onViewBasketButtonPressed = () => {
    navigation.navigate('CheckoutScreen');
  };

  return (
    <>
      {cartItems.length > 0 && (
        <Container style={styles.viewBasketButtonContainer}>
          <Button
            childrenContainerStyle={styles.viewBasketButton}
            onPress={_onViewBasketButtonPressed}>
            <View style={styles.viewBasketButtonTextContainer}>
              <Text isBold style={styles.viewBasketButtonText}>
                View Basket
              </Text>
              <Text style={styles.cardItemText}>{`${cartItems.length} ${
                cartItems.length > 1 ? 'items' : 'item'
              }`}</Text>
            </View>
            <Text style={styles.totalPriceText} isBold>
              {formatCurrency(totalPrice)}
            </Text>
          </Button>
        </Container>
      )}
    </>
  );
};

export default BasketSummary;
