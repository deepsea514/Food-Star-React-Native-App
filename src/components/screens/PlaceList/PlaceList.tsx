import * as React from 'react';
import {View} from 'react-native';
import {List} from '@src/components/elements';
import {mockPlaceList} from '@src/data/mock-places';
import PlaceListItem from '@src/components/common/PlaceListItem';
import styles from './styles';

type PlaceListProps = {};

const PlaceList: React.FC<PlaceListProps> = () => {
  return (
    <View style={styles.root}>
      <List
        data={mockPlaceList}
        renderItem={({item}) => {
          return <PlaceListItem key={item.id} data={item} />;
        }}
      />
    </View>
  );
};

export default PlaceList;
