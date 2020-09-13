import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, Section, Divider, Icon} from '@src/components/elements';
import {ScrollView} from 'react-native-gesture-handler';
import ListRowItem from '@src/components/elements/List/ListRowItem';
import {favoriteAddresses} from '@src/data/mock-address';
import styles from './styles';
import {View} from 'react-native';

type SavedAddressesProps = {};

const SavedAddresses: React.FC<SavedAddressesProps> = () => {
  const navigation = useNavigation();

  const _addAddressItemPressed = () => {
    navigation.navigate('AddAddressScreen');
  };

  return (
    <ScrollView>
      <Section title="Favorites">
        <Container style={styles.container}>
          {favoriteAddresses.map((item, index) => {
            const {id, name, description, isHome, isWork} = item;
            let leftIcon;
            if (isHome) {
              leftIcon = <Icon name="home" size={16} />;
            } else if (isWork) {
              leftIcon = <Icon name="briefcase" size={16} />;
            }
            return (
              <View key={index}>
                <ListRowItem
                  id={id}
                  title={name}
                  subTitle={description}
                  leftIcon={leftIcon}
                />
                <Divider />
              </View>
            );
          })}
          <ListRowItem
            title="Add an Address"
            subTitle="Save your favourite places"
            onPress={_addAddressItemPressed}
          />
        </Container>
      </Section>
    </ScrollView>
  );
};

export default SavedAddresses;
