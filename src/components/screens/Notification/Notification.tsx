import * as React from 'react';
import {I18nManager, ScrollView, View} from 'react-native';
import {Icon, Divider} from '@src/components/elements';
import ListRowItem from '@src/components/elements/List/ListRowItem';
import useThemeColors from '@src/custom-hooks/useThemeColors';
import {notifications, Notification} from '@src/data/mock-notification';
import styles from './styles';

type NotificationScreenProps = {};

const NotificationScreen: React.FC<NotificationScreenProps> = () => {
  const chevronIconName = I18nManager.isRTL ? 'chevron-left' : 'chevron-right';
  const {primary} = useThemeColors();
  return (
    <ScrollView>
      {notifications.map((item: Notification) => {
        return (
          <View key={item.id}>
            <ListRowItem
              leftIcon={
                <View
                  style={[
                    {backgroundColor: primary},
                    styles.notificationIconContainer,
                  ]}>
                  <Icon name="envelope" solid color="white" />
                </View>
              }
              rightIcon={<Icon name={chevronIconName} />}
              {...item}
            />
            <Divider />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default NotificationScreen;
