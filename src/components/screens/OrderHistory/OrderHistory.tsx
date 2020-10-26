import * as React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {List, Button, Text} from '@src/components/elements';
import {orderHistoryList} from '@src/data/mock-order-history';
import {ListRowItemProps} from '@src/components/elements/List/ListRowItem';

type OrderHistoryProps = {};

const OrderHistory: React.FC<OrderHistoryProps> = () => {
  const data: ListRowItemProps[] = orderHistoryList.map((item) => {
    const {id, date, name, totalItems, totalPrice} = item;
    return {
      id,
      title: name,
      subTitle: `${totalItems} items | ${totalPrice}`,
      note: date,
      rightContainerStyle: styles.rightItemContainerStyle,
      rightIcon: (
        <Button isTransparent>
          <Text isBold isPrimary>
            Reorder
          </Text>
        </Button>
      ),
    };
  });
  return (
    <View style={styles.root}>
      <List data={data} />
    </View>
  );
};

export default OrderHistory;
