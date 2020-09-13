import * as React from 'react';
import Modal, {ModalProps} from 'react-native-modal';
import Container from '../Container';
import Text from '../Text';
import styles from './styles';
import Divider from '../Divider';
import {View} from 'react-native';

type DialogProps = {
  title?: string;
} & Partial<ModalProps>;

const Dialog: React.FC<DialogProps> = ({title, children, ...rest}) => {
  return (
    <Modal
      {...rest}
      useNativeDriver
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
      backdropTransitionOutTiming={0}>
      <Container style={styles.container}>
        {title && (
          <>
            <Text isBold isHeadingTitle isPrimary style={styles.title}>
              {title}
            </Text>
            <Divider />
          </>
        )}
        <View style={styles.contentContainer}>{children}</View>
      </Container>
    </Modal>
  );
};

export default Dialog;
