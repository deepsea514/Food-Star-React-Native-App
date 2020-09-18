import {
  IOSNativeProps,
  AndroidNativeProps,
} from '@react-native-community/datetimepicker';
import * as React from 'react';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import useThemeColors from '@src/custom-hooks/useThemeColors';

type DateTimePickerProps = IOSNativeProps | AndroidNativeProps;

const DateTimePicker: React.FC<DateTimePickerProps> = (props) => {
  const {text} = useThemeColors();
  return <RNDateTimePicker {...props} textColor={text} />;
};

export default DateTimePicker;
