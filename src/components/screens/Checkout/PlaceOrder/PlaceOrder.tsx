import * as React from 'react';
import {View} from 'react-native';
import {Container, Text, Button} from '@src/components/elements';
import SuccessOrderModal from './SuccessOrderModal';
import styles from './styles';
import {formatCurrency} from '@src/utils/number-formatter';

type PlaceOrderProps = {
  totalPrice: number;
  shippingFee: number;
};

const PlaceOrder: React.FC<PlaceOrderProps> = ({totalPrice, shippingFee}) => {
  const [
    isSuccessOrderModalVisible,
    setIsSuccessOrderModalVisible,
  ] = React.useState(false);

  const _onPlaceOrderButtonPressed = () => {
    setIsSuccessOrderModalVisible(true);
  };

  return (
    <Container style={styles.placeOrderContainer}>
      <View style={styles.totalPriceContainer}>
        <Text style={styles.totalPriceText}>Total</Text>
        <Text isBold style={styles.totalPriceText}>
          {formatCurrency(totalPrice + shippingFee)}
        </Text>
      </View>
      <Button isFullWidth onPress={_onPlaceOrderButtonPressed}>
        <Text isBold style={styles.placeOrderText}>
          Place Order
        </Text>
      </Button>
      <SuccessOrderModal
        isVisible={isSuccessOrderModalVisible}
        setIsVisble={setIsSuccessOrderModalVisible}
      />
    </Container>
  );
};

export default PlaceOrder;
