import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Container from '../Container';
import Text from '../Text';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';

export type RadioOption = {
  value: string;
  label: string;
  rightElement?: React.ReactElement;
};

type RadioButtonProps = {
  data: RadioOption[];
  defaultValue?: string;
  onItemPressed: (option: RadioOption) => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  data,
  onItemPressed,
  defaultValue,
}) => {
  const {
    colors: {primary, border, text},
  } = useTheme();
  const [selectedValue, setSelectedValue] = React.useState<string>();
  const _onPress = (item: RadioOption) => {
    return () => {
      setSelectedValue(item.value);
      onItemPressed(item);
    };
  };

  return (
    <>
      {data.map((item) => {
        const {value, label, rightElement} = item;
        let isChecked = value === defaultValue;
        if (selectedValue) {
          isChecked = value === selectedValue;
        }
        return (
          <Container
            key={value}
            style={[styles.container, {borderBottomColor: border}]}>
            <TouchableOpacity style={styles.button} onPress={_onPress(item)}>
              <Container style={styles.checkBoxContainer}>
                <View>
                  <CheckBox
                    style={styles.checkBox}
                    value={isChecked}
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
          </Container>
        );
      })}
    </>
  );
};

export default RadioButton;
