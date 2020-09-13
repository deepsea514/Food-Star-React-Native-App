import * as React from 'react';
import {Container} from '@src/components/elements';
import {Place, mockRemarkablePlace} from '@src/data/mock-places';
import PlaceListItem from '@src/components/common/PlaceListItem';
import styles from './styles';

type TrendingTabProps = {};

const TrendingTab: React.FC<TrendingTabProps> = () => {
  return (
    <Container style={styles.tabContent}>
      {mockRemarkablePlace.trending.map((item: Place) => {
        return <PlaceListItem key={item.id} data={item} />;
      })}
    </Container>
  );
};

export default TrendingTab;
