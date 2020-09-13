import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import RNCheckBox from '@react-native-community/checkbox';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import Container from '../Container';
import Text from '../Text';

type CheckBoxProps = {
  label: string;
  onPress: (checked: boolean) => void;
  rightElement?: React.ReactElement;
};

const CheckBox: React.FC<CheckBoxProps> = ({label, onPress, rightElement}) => {
  const {
    colors: {primary, text},
  } = useTheme();
  const [checked, setChecked] = React.useState<boolean>(false);
  const _onPress = () => {
    setChecked(!checked);
    onPress(!checked);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={_onPress}>
      <Container style={styles.checkBoxContainer}>
        <View>
          <RNCheckBox
            style={styles.checkBox}
            value={checked}
            onCheckColor="transparent"
            onTintColor={primary}
            onFillColor={primary}
            tintColors={{
              true: primary,
              false: text,
            }}
            onAnimationType="bounce"
            offAnimationType="bounce"
          />
        </View>
        <View>
          <Text>{label}</Text>
        </View>
      </Container>
      {rightElement && (
        <Container style={styles.rightElementContainer}>
          {rightElement}
        </Container>
      )}
    </TouchableOpacity>
  );
};

export default CheckBox;
