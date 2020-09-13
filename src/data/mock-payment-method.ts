type PaymentMethod = {
  id: string;
  name: string;
  icon: string;
};

export const paymentMethods: PaymentMethod[] = [
  {
    id: '1',
    name: 'Cash',
    icon: 'money-bill-alt',
  },
  {
    id: '2',
    name: 'ATM Card',
    icon: 'credit-card',
  },
  {
    id: '3',
    name: 'VISA / MASTER',
    icon: 'cc-visa',
  },
  {
    id: '4',
    name: 'PayPal',
    icon: 'cc-paypal',
  },
  {
    id: '5',
    name: 'Apple Pay',
    icon: 'cc-apple-pay',
  },
];
