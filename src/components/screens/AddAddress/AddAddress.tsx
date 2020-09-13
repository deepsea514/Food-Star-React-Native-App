import * as React from 'react';
import {TextField, List, Divider} from '@src/components/elements';
import {View} from 'react-native';
import {savedAddresses, Address} from '@src/data/mock-address';
import styles from './styles';

type AddAddressProps = {};

const AddAddress: React.FC<AddAddressProps> = () => {
  const _prepareListData = (addresses: Address[]) => {
    return addresses.map((item) => {
      const {id, description, name} = item;
      return {
        id,
        title: name,
        subTitle: description,
      };
    });
  };

  const _renderListHeader = () => {
    return (
      <>
        <View style={styles.searchTextFieldContainer}>
          <TextField placeholder="Enter Address" leftIcon="map-marker-alt" />
        </View>
        <Divider />
      </>
    );
  };

  return (
    <List
      data={_prepareListData(savedAddresses)}
      ListHeaderComponent={_renderListHeader()}
    />
  );
};

export default AddAddress;
