import * as React from 'react';
import Modal, {ModalProps} from 'react-native-modal';
import Container from '../Container';
import Text from '../Text';
import styles from './styles';
import Divider from '../Divider';
import {View} from 'react-native';
import Button from '../Button';

type DialogProps = {
  title?: string;
  isTitleCentered?: boolean;
} & Partial<ModalProps>;

const Dialog: React.FC<DialogProps> = ({
  title,
  isTitleCentered,
  children,
  ...rest
}) => {
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
        <View>
          <Button isTransparent>
            <Text isPrimary>Rate Food Star</Text>
          </Button>
          <Divider />
          <Button isTransparent>
            <Text>Remind me later</Text>
          </Button>
          <Divider />
          <Button isTransparent>
            <Text>No, thanks</Text>
          </Button>
        </View>
      </Container>
    </Modal>
  );
};

export default Dialog;
