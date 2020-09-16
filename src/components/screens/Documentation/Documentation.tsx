import {Text} from '@src/components/elements';
import * as React from 'react';
import {I18nManager, View} from 'react-native';
import StoryBook from '../../../../storybook';
import styles from './styles';

type DocumentationProps = {};

const Documentation: React.FC<DocumentationProps> = () => {
  return (
    <View style={styles.root}>
      {I18nManager.isRTL && (
        <Text isHeadingTitle isPrimary isBold style={styles.title}>
          Sorry, this page hasn't supported the RTL layout yet
        </Text>
      )}
      <StoryBook />
    </View>
  );
};

export default Documentation;
