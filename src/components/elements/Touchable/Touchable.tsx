import * as React from 'react';
import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  TouchableOpacityProps,
} from 'react-native';

type TouchableProps = {} & TouchableNativeFeedbackProps & TouchableOpacityProps;

const Touchable: React.FC<TouchableProps> = ({children, ...rest}) => {
  return Platform.OS === 'ios' ? (
    <TouchableOpacity {...rest}>{children}</TouchableOpacity>
  ) : (
    <TouchableNativeFeedback {...rest}>{children}</TouchableNativeFeedback>
  );
};

export default Touchable;
