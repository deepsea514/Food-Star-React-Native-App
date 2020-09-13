import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from '@src/components/elements';
import Notification from '@src/components/screens/Notification';
import {ScreenNavigationProps} from '../types';
import styles from './styles';
import {Alert, AlertButton} from 'react-native';

type NotificationStackProps = {} & ScreenNavigationProps;
const Stack = createStackNavigator();

const NotificationStack: React.FC<NotificationStackProps> = () => {
  const alertButtons: AlertButton[] = [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    {text: 'OK'},
  ];

  const _renderAddAddressHeaderRight = () => {
    return (
      <Icon
        name="trash-alt"
        size={18}
        isPrimary
        onPress={() =>
          Alert.alert(
            'Delete all',
            'Once you delete all messages, you cannot undo it',
            alertButtons,
          )
        }
      />
    );
  };

  return (
    <Stack.Navigator initialRouteName="NotificationScreen">
      <Stack.Screen
        options={() => {
          return {
            title: 'Notifications',
            headerRight: _renderAddAddressHeaderRight,
            headerRightContainerStyle: styles.headerRightContainer,
          };
        }}
        name="NotificationScreen"
        component={Notification}
      />
    </Stack.Navigator>
  );
};

export default NotificationStack;
