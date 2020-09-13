import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Container, Text, Dialog, Button} from '@src/components/elements';
import {View} from 'react-native';

function Modal() {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <View style={{padding: 10}}>
      <Button onPress={() => setIsVisible(true)}>
        <Text>Open Modal</Text>
      </Button>
      <Dialog isVisible={isVisible} onBackdropPress={() => setIsVisible(false)}>
        <Container>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </Text>
          <Button
            style={{marginTop: 10}}
            isTransparent
            onPress={() => setIsVisible(false)}>
            <Text isPrimary>Close</Text>
          </Button>
        </Container>
      </Dialog>
    </View>
  );
}

storiesOf('Dialog', module).add('Dialog', () => <Modal />);
