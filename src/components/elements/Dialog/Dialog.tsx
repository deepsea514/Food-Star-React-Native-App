import * as React from 'react';
import {View} from 'react-native';
import Modal, {ModalProps} from 'react-native-modal';
import Container from '../Container';
import Text from '../Text';
import styles from './styles';
import Divider from '../Divider';

type DialogProps = {
  title?: string;
  isTitleCentered?: boolean;
  footer?: React.ReactNode;
} & Partial<ModalProps>;

const Dialog: React.FC<DialogProps> = ({
  title,
  isTitleCentered,
  footer,
  children,
  ...rest
}) => {
  return (
    <Modal
      {...rest}
      useNativeDriver
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating>
      <Container style={styles.container}>
        {title && (
          <>
            <Text
              isBold
              isHeadingTitle
              isPrimary
              isCenter={isTitleCentered}
              style={styles.title}>
              {title}
            </Text>
            <Divider />
          </>
        )}
        <View style={styles.contentContainer}>{children}</View>
        {footer && footer}
      </Container>
    </Modal>
  );
};

export default Dialog;
