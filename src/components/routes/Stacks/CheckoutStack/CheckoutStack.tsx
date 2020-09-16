import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Checkout from '@src/components/screens/Checkout';
import ChangeAddress from '@src/components/screens/ChangeAddress';
import SavedAddresses from '@src/components/screens/SavedAddresses';
import AddAddress from '@src/components/screens/AddAddress';
import SelectLocation from '@src/components/screens/SelectLocation';
import Promotion from '@src/components/screens/Promotion';
import PaymentMethod from '@src/components/screens/PaymentMethod';
import TrackOrder from '@src/components/screens/TrackOrder';
import {Icon, Button} from '@src/components/elements';
import styles from './styles';
import {ScreenNavigationProps} from '../types';
import {I18nManager} from 'react-native';

type CheckoutStackProps = {} & ScreenNavigationProps;
const Stack = createStackNavigator();

const CheckoutStack: React.FC<CheckoutStackProps> = (props) => {
  const {navigation} = props;
  const chevronIconName = I18nManager.isRTL ? 'chevron-right' : 'chevron-left';

  const _renderHeaderLeft = () => {
    return (
      <Button isTransparent onPress={() => navigation.goBack()}>
        <Icon
          style={styles.headerBackIcon}
          name={chevronIconName}
          size={25}
          light
          isPrimary
        />
      </Button>
    );
  };

  const _renderHeaderRight = () => {
    return (
      <Icon
        name="map"
        size={18}
        isPrimary
        onPress={() => navigation.navigate('SelectLocationScreen')}
      />
    );
  };

  return (
    <Stack.Navigator initialRouteName="CheckoutScreen">
      <Stack.Screen
        name="CheckoutScreen"
        options={{
          headerLeftContainerStyle: styles.headerLeftContainer,
          headerLeft: _renderHeaderLeft,
          headerTitle: 'Neapolitan Pizza',
        }}
        component={Checkout}
      />
      <Stack.Screen
        name="ChangeAddressScreen"
        options={{
          headerTitle: '588 Blanda Square - Virginia',
          headerRight: _renderHeaderRight,
          headerRightContainerStyle: styles.headerRightContainer,
        }}
        component={ChangeAddress}
      />
      <Stack.Screen
        name="SavedAddressesScreen"
        options={{
          headerTitle: 'Saved Address',
        }}
        component={SavedAddresses}
      />
      <Stack.Screen
        name="AddAddressScreen"
        options={{
          headerTitle: 'Add An Address',
          headerRight: _renderHeaderRight,
          headerRightContainerStyle: styles.headerRightContainer,
        }}
        component={AddAddress}
      />
      <Stack.Screen
        name="SelectLocationScreen"
        options={{
          headerTitle: '588 Blanda Square - Virginia',
        }}
        component={SelectLocation}
      />
      <Stack.Screen
        name="PromotionScreen"
        options={{
          headerTitle: 'Add A Promo',
        }}
        component={Promotion}
      />
      <Stack.Screen
        name="PaymentMethodScreen"
        options={{
          headerTitle: 'Choose a payment',
        }}
        component={PaymentMethod}
      />
      <Stack.Screen
        name="TrackOrderScreen"
        options={{
          headerTitle: 'Track your order',
        }}
        component={TrackOrder}
      />
    </Stack.Navigator>
  );
};

export default CheckoutStack;
