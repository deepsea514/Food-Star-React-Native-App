import * as React from 'react';
import {ScrollView} from 'react-native';
import {Section, RadioButton, Icon} from '@src/components/elements';
import {RadioOption} from '@src/components/elements/RadioButton/RadioButton';
import {paymentMethods} from '@src/data/mock-payment-method';

type PaymentMethodProps = {};

const PaymentMethod: React.FC<PaymentMethodProps> = () => {
  const data: RadioOption[] = paymentMethods.map((item) => {
    const {id, name, icon} = item;
    return {
      label: name,
      value: id,
      rightElement: <Icon name={icon} size={20} />,
    };
  });

  const _onItemPressed = (item: RadioOption) => {
    return () => {
      console.log(item);
    };
  };

  return (
    <ScrollView>
      <Section title="Choose a payment method">
        <RadioButton data={data} onItemPressed={_onItemPressed} />
      </Section>
    </ScrollView>
  );
};

export default PaymentMethod;
