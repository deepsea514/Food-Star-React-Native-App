import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Container, TabView, Text} from '@src/components/elements';

const tabData = [
  {
    key: '0',
    title: 'Tab 1',
    content: () => <Text>Tab 1</Text>,
  },
  {
    key: '1',
    title: 'Tab 2',
    content: () => <Text>Tab 2</Text>,
  },
  {
    key: '3',
    title: 'Tab 3',
    content: () => <Text>Tab 3</Text>,
  },
];

storiesOf('TabView', module).add('TabView', () => (
  <Container style={{padding: 10, flex: 1}}>
    <TabView tabData={tabData} isTabBarFullWidth />
  </Container>
));
