import * as React from 'react';
import {View} from 'react-native';
import StoryBook from '../../../../storybook';
import styles from './styles';

type DocumentationProps = {};

const Documentation: React.FC<DocumentationProps> = () => {
  return (
    <View style={styles.root}>
      <StoryBook />
    </View>
  );
};

export default Documentation;
