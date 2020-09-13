import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Section, Container, Carousel, Card} from '@src/components/elements';
import {Dimensions} from 'react-native';
import {mockPlaces} from '@src/data/mock-places';

storiesOf('Section', module).add('Section', () => (
  <Container style={{padding: 10}}>
    <Section title="Best restaurants" actionButtonText="View More">
      <Carousel
        data={mockPlaces}
        itemWidth={Dimensions.get('window').width / 2}
        renderContent={(item: Place, index, parallaxProps) => {
          const {image, title, subTitle} = item;
          return (
            <Card
              isSmallCover
              coverImage={image}
              title={title}
              subTitle={subTitle}
              parallaxProps={parallaxProps}
            />
          );
        }}
      />
    </Section>
  </Container>
));
