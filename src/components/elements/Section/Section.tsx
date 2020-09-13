import * as React from 'react';
import {View} from 'react-native';
import Button from '../Button';
import Text from '../Text';
import styles from './styles';

interface SectionProps {
  children?: React.ReactNode;
  title?: string;
  actionButtonText?: string;
  onButtonActionPressed?: () => void;
}

const Section: React.FC<SectionProps> = ({
  children,
  title,
  actionButtonText,
  onButtonActionPressed,
}) => {
  const _onButtonActionPressed = () => {
    if (onButtonActionPressed) {
      onButtonActionPressed();
    }
  };

  return (
    <View>
      <View style={styles.sectionTitleContainer}>
        {title && <Text style={styles.sectionTitle}>{title}</Text>}
        {actionButtonText && (
          <Button onPress={_onButtonActionPressed} isTransparent>
            <Text style={styles.actionButtonText} isPrimary>
              {actionButtonText}
            </Text>
          </Button>
        )}
      </View>
      {children}
    </View>
  );
};

export default Section;
