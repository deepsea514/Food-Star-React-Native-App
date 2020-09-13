import * as React from 'react';
import {Container, Text} from '@src/components/elements';
import styles from './styles';

type DeliveryTimeProps = {};

const DeliveryTime: React.FC<DeliveryTimeProps> = () => {
  return (
    <Container style={styles.deliveryTimeContainer}>
      <Text isSecondary>Estimated Delivery Time</Text>
      <Text isPrimary isHeadingTitle isBold>
        04:14 PM
      </Text>
    </Container>
  );
};

export default DeliveryTime;
