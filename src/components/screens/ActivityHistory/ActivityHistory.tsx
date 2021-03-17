import * as React from 'react';
import {View, Image} from 'react-native';
import {List} from '@src/components/elements';
import {activityHistoryList} from '@src/data/mock-activity-history';
import styles from './styles';
import {formatCurrency} from '@src/utils/number-formatter';
import {ListRowItemProps} from '@src/components/elements/List/ListRowItem';
import {useNavigation} from '@react-navigation/native';

type ActivityHistoryProps = {};

const ActivityHistory: React.FC<ActivityHistoryProps> = () => {
  const navigation = useNavigation();

  const data: ListRowItemProps[] = activityHistoryList.map((item) => {
    const {
      restaurantName,
      date,
      orderDetail: {totalItems, price},
      bookingId,
    } = item;
    return {
      id: bookingId,
      title: restaurantName,
      subTitle: `${totalItems} items | ${formatCurrency(totalItems * price)}`,
      note: date,
      onPress: () => navigation.navigate('ActivityHistoryDetailScreen'),
      leftIcon: (
        <Image
          source={require('@src/assets/common/food.png')}
          style={styles.listItemImage}
        />
      ),
    };
  });
  return (
    <View style={styles.root}>
      <List data={data} />
    </View>
  );
};

export default ActivityHistory;
