import * as React from 'react';
import {Container} from '@src/components/elements';
import {Place, mockRemarkablePlace} from '@src/data/mock-places';
import PlaceListItem from '@src/components/common/PlaceListItem';
import styles from './styles';

type FeaturedTabProps = {};

const FeaturedTab: React.FC<FeaturedTabProps> = () => {
  return (
    <Container style={styles.tabContent}>
      {mockRemarkablePlace.featured.map((item: Place) => {
        return <PlaceListItem key={item.id} data={item} />;
      })}
    </Container>
  );
};

export default FeaturedTab;
