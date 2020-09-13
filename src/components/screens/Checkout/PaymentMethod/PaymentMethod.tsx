import * as React from 'react';
import {Section, Container, Text, Icon, Button} from '@src/components/elements';
import styles from './styles';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type PaymentMethodProps = {};

const PaymentMethod: React.FC<PaymentMethodProps> = () => {
  const navigation = useNavigation();

  const _onAddAPromoButtonPressed = () => {
    navigation.navigate('PromotionScreen');
  };

  const _onPaymentMethodButtonPressed = () => {
    navigation.navigate('PaymentMethodScreen');
  };

  return (
    <Section title="Payment Method">
      <Container style={styles.paymentMethodContainer}>
        <View style={styles.paymentSelection}>
          <Button
            icon={<Icon name="money-check-alt" size={16} />}
            isTransparent
            onPress={_onPaymentMethodButtonPressed}>
            <Text style={styles.paymentMethodText}> Cash</Text>
          </Button>
        </View>
        <Button isTransparent onPress={_onAddAPromoButtonPressed}>
          <Text isPrimary>Add a promo</Text>
        </Button>
      </Container>
    </Section>
  );
};

export default PaymentMethod;
