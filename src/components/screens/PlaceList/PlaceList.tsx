import * as React from 'react';
import {Container, List} from '@src/components/elements';
import {mockPlaceList} from '@src/data/mock-places';
import PlaceListItem from '@src/components/common/PlaceListItem';
import styles from './styles';

type PlaceListProps = {};

const PlaceList: React.FC<PlaceListProps> = () => {
  return (
    <Container style={styles.root}>
      <List
        data={mockPlaceList}
        renderItem={({item}) => {
          return <PlaceListItem key={item.id} data={item} />;
        }}
      />
    </Container>
  );
};

export default PlaceList;
