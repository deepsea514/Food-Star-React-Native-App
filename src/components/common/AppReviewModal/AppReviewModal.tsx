import * as React from 'react';
import {Linking, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import dayjs from 'dayjs';
import {Button, Dialog, Divider, Text} from '@src/components/elements';
import {getStoreName, getStoreURL} from '@src/utils/store-info';
import {AppReviewConfig} from '@src/constants';

const {REMIND_LATER_DATE, CANCELED, USES_UNTIL_SHOW} = AppReviewConfig;

type AppReviewModalProps = {
  storeURL?: string;
  daysBeforeReminding?: number;
  usesUntilShow?: number;
  rateButtonText?: string;
  remindLaterButtonText?: string;
  cancelButtonText?: string;
};

const AppReviewModal: React.FC<AppReviewModalProps> = ({
  storeURL = getStoreURL(),
  daysBeforeReminding = 1,
  usesUntilShow = 0,
  rateButtonText = 'Rate Food Star',
  remindLaterButtonText = 'Remind me later',
  cancelButtonText = 'No, thanks',
}) => {
  const [isShowAppReview, setIsShowAppReview] = React.useState(false);

  React.useEffect(() => {
    const handleShowAppReviewModal = async () => {
      try {
        const appReviewCanceled = await AsyncStorage.getItem(CANCELED);
        const appReviewRemindLaterDate =
          (await AsyncStorage.getItem(REMIND_LATER_DATE)) || '';
        const usesUntilShowAppReview =
          (await AsyncStorage.getItem(USES_UNTIL_SHOW)) || '';

        if (appReviewCanceled === '1') {
          return;
        }

        if (parseInt(usesUntilShowAppReview, 10) < usesUntilShow) {
          return;
        }

        if (dayjs().isBefore(appReviewRemindLaterDate)) {
          return;
        }

        setIsShowAppReview(true);
      } catch (e) {
        console.log('Failed to fetch the data from storage');
      }
    };

    handleShowAppReviewModal();
  }, [usesUntilShow]);

  const _onCancelButtonPress = () => {
    AsyncStorage.setItem(CANCELED, '1');
    setIsShowAppReview(false);
  };

  const _onRemindLaterButtonPress = () => {
    AsyncStorage.setItem(
      REMIND_LATER_DATE,
      dayjs().add(daysBeforeReminding, 'day').toString(),
    );
    setIsShowAppReview(false);
  };

  const _onRateButtonPress = () => {
    AsyncStorage.setItem(CANCELED, '1');
    setIsShowAppReview(false);
    Linking.openURL(storeURL);
  };

  const _renderFooter = () => {
    return (
      <View>
        <Button isTransparent onPress={_onRateButtonPress}>
          <Text isPrimary>{rateButtonText}</Text>
        </Button>
        <Divider />
        <Button isTransparent onPress={_onRemindLaterButtonPress}>
          <Text>{remindLaterButtonText}</Text>
        </Button>
        <Divider />
        <Button isTransparent onPress={_onCancelButtonPress}>
          <Text>{cancelButtonText}</Text>
        </Button>
      </View>
    );
  };

  return (
    <Dialog
      title={'Enjoying Food Star app?'}
      isTitleCentered
      isVisible={isShowAppReview}
      footer={_renderFooter()}>
      <Text isCenter>
        If you enjoy Food Star, please take a moment to rate it in{' '}
        {getStoreName()}. Your support is deeply appreciated!
      </Text>
    </Dialog>
  );
};

export default AppReviewModal;
