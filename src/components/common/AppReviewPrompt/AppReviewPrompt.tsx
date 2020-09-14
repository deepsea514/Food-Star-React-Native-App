import * as React from 'react';
import {Dialog, Text} from '@src/components/elements';
import {getStoreName} from '@src/utils/store-info';

type AppReviewPromptProps = {};

const AppReviewPrompt: React.FC<AppReviewPromptProps> = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  const _onBackdropPress = () => {
    setIsVisible(false);
  };

  return (
    <Dialog
      title="Enjoying Food Star app?"
      isTitleCentered
      isVisible={isVisible}
      onBackdropPress={_onBackdropPress}>
      <Text isCenter>
        If you enjoy Food Star, please take a moment to rate it in{' '}
        {getStoreName()}. Your support is deeply appreciated!
      </Text>
    </Dialog>
  );
};

export default AppReviewPrompt;
