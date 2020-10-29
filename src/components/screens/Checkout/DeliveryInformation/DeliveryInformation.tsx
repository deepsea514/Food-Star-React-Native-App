import * as React from 'react';
import {View, Image, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AndroidEvent} from '@react-native-community/datetimepicker';
import {
  Container,
  Text,
  Button,
  Section,
  Divider,
  DateTimePicker,
} from '@src/components/elements';
import styles from './styles';

type DeliveryInformationProps = {};

const DeliveryInformation: React.FC<DeliveryInformationProps> = () => {
  const navigation = useNavigation();
  const [date, setDate] = React.useState(new Date(1598051730000));
  const [showDateTimePicker, setShowDateTimePicker] = React.useState(false);

  const onChangeAddressButtonPressed = () => {
    navigation.navigate('ChangeAddressScreen');
  };

  const onChange = (event: AndroidEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDateTimePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const _onChangeTimeButtonPressed = () => {
    setShowDateTimePicker(!showDateTimePicker);
  };

  return (
    <Section
      title="Deliver to"
      actionButtonText="Change address"
      onButtonActionPressed={onChangeAddressButtonPressed}>
      <Container>
        <View style={styles.deliveryContainer}>
          <View style={styles.locationContainer}>
            <Image
              source={require('@src/assets/checkout/map.png')}
              style={styles.locationImage}
            />
          </View>
          <View>
            <Text isBold style={styles.locationInfo}>
              588 Blanda Square - Virginia
            </Text>
            <Text
              isSecondary
              accessibilityRole="link"
              style={styles.locationInfo}>
              Add floor / unit number
            </Text>
            <Text isSecondary style={styles.locationInfo}>
              Add a note to driver
            </Text>
          </View>
        </View>
        <Divider />
        <View style={styles.deliveryTimeContainer}>
          <View>
            <Text isSecondary style={styles.deliveryTime}>
              Delivery time
            </Text>
            <Text>Deliver now (15 mins)</Text>
          </View>
          <View style={styles.changeTimeContainer}>
            <Button isTransparent onPress={_onChangeTimeButtonPressed}>
              <Text isPrimary>
                {showDateTimePicker ? 'Done' : 'Change time'}
              </Text>
            </Button>
          </View>
        </View>
      </Container>
      {showDateTimePicker && (
        <DateTimePicker
          value={date}
          mode="datetime"
          onChange={onChange}
          style={styles.dateTimePicker}
        />
      )}
    </Section>
  );
};

export default DeliveryInformation;
