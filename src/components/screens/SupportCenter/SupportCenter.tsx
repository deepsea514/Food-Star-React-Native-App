import * as React from 'react';
import {ScrollView, View} from 'react-native';
import {
  Section,
  Icon,
  Container,
  Text,
  Button,
  Divider,
} from '@src/components/elements';
import ListRowItem from '@src/components/elements/List/ListRowItem';
import LottieView from 'lottie-react-native';
import styles from './styles';

type SupportCenterPros = {};

const SupportCenter: React.FC<SupportCenterPros> = () => {
  return (
    <ScrollView>
      <Container style={styles.contactsupportCenterContainer}>
        <View style={styles.supportCenterLeft}>
          <Text isHeadingTitle isPrimary isBold>
            Live chat with our support team
          </Text>
          <Button style={styles.supportCenterButton}>
            <Text isWhite isBold>
              Start
            </Text>
          </Button>
        </View>
        <View style={styles.supportCenterRight}>
          <LottieView
            source={require('@src/assets/animations/support-center.json')}
            autoPlay
            style={styles.supportCenterLottieView}
          />
        </View>
      </Container>
      <Section title="Frequently Asked Questions">
        <ListRowItem
          title="My order didn't delivered"
          rightIcon={<Icon name="chevron-right" />}
        />
        <Divider />
        <ListRowItem
          title="My orders came with missing items"
          rightIcon={<Icon name="chevron-right" />}
        />
        <Divider />
        <ListRowItem
          title="How to change my delivery addresses?"
          rightIcon={<Icon name="chevron-right" />}
        />
        <Divider />
        <ListRowItem
          title="How to setup my payment pethods?"
          rightIcon={<Icon name="chevron-right" />}
        />
        <Divider />
        <ListRowItem
          title="Where can I change my password?"
          rightIcon={<Icon name="chevron-right" />}
        />
        <Divider />
        <ListRowItem
          title="How to request a refund?"
          rightIcon={<Icon name="chevron-right" />}
        />
        <Divider />
        <ListRowItem
          title="How can I contact with my drivers"
          rightIcon={<Icon name="chevron-right" />}
        />
      </Section>
    </ScrollView>
  );
};

export default SupportCenter;
