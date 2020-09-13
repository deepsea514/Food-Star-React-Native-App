import * as React from 'react';
import {StyleSheet} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {Container, Text, Divider} from '@src/components/elements';
import {TabSectionList} from '@src/components/elements';
import DishItem from '@src/components/common/DishItem';
import {mockPlaceDetails} from '@src/data/mock-places';
const faker = require('faker');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabText: {
    padding: 15,
    fontSize: 16,
    fontWeight: '500',
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
});

const data = Array(15)
  .fill(0)
  .map((_) => ({
    id: faker.random.uuid(),
    title: faker.lorem.sentence(4),
    subTitle: faker.lorem.sentence(6),
  }));

storiesOf('TabSectionList', module).add('TabSectionList', () => (
  <Container style={{flex: 1, padding: 10}}>
    <TabSectionList
      sections={mockPlaceDetails.dishSection || []}
      keyExtractor={(item) => item.title}
      stickySectionHeadersEnabled={false}
      scrollToLocationOffset={5}
      tabBarStyle={[styles.tabBar]}
      ItemSeparatorComponent={() => <Divider />}
      renderTab={({title, isActive}) => {
        const borderBottomWidth = isActive ? 2 : 0;
        return (
          <Container
            style={{
              borderBottomWidth,
              borderColor: 'white',
            }}>
            <Text isPrimary={isActive && true} style={styles.tabText}>
              {title}
            </Text>
          </Container>
        );
      }}
      renderSectionHeader={({section}) => (
        <Text style={styles.sectionHeaderText}>{section.title}</Text>
      )}
      renderItem={({item}) => {
        return <DishItem data={item} />;
      }}
    />
  </Container>
));
