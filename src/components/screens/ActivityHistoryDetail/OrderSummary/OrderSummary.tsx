import * as React from 'react';
import {View} from 'react-native';
import {Container, Text, Section, Divider} from '@src/components/elements';
import styles from './styles';
import {formatCurrency} from '@src/utils/number-formatter';
import {OrderDetail} from '@src/data/mock-activity-history';

type OrderSummaryProps = {
  orderDetail: OrderDetail;
};

const OrderSummary: React.FC<OrderSummaryProps> = ({
  orderDetail: {name, price, shippingFee, totalItems},
}) => {
  const totalPrice = price * totalItems;

  return (
    <Section title="Order Summary">
      <Container>
        <View style={styles.menuContainer}>
          <View style={styles.menuInfo}>
            <View>
              <Text style={styles.mainDishText} isBold>
                {name}
              </Text>
            </View>
          </View>
          <Text isBold>{formatCurrency(totalPrice)}</Text>
        </View>
        <Divider />
        <View style={styles.priceContainer}>
          <View style={styles.subTotalContainer}>
            <Text>Subtotal</Text>
            <Text>{formatCurrency(totalPrice)}</Text>
          </View>
          <View style={styles.deliveryFee}>
            <Text>Delivery: 6.1km</Text>
            <Text>{formatCurrency(shippingFee)}</Text>
          </View>
          <View style={styles.deliveryFee}>
            <Text>Total</Text>
            <Text>{formatCurrency(totalPrice + shippingFee)}</Text>
          </View>
        </View>
      </Container>
    </Section>
  );
};

export default OrderSummary;
