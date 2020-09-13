import * as React from 'react';
import {useTheme} from '@react-navigation/native';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
  StyleProp,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  backgroundColor?: string;
  icon?: React.ReactElement;
  isTransparent?: boolean;
  isFullWidth?: boolean;
  isChildrenCentered?: boolean;
  isLoading?: boolean;
  childrenContainerStyle?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  backgroundColor,
  isTransparent,
  isFullWidth,
  isChildrenCentered = true,
  isLoading,
  style,
  childrenContainerStyle,
  ...rest
}) => {
  const {
    colors: {primary: baseBackgroundColor},
  } = useTheme();
  let buttonBackgroundColor = backgroundColor || baseBackgroundColor;
  let buttonBorderColor = backgroundColor || baseBackgroundColor;
  let buttonBorderWidth = 1;
  let padding = 15;
  let width = 'auto';
  let align:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined = 'flex-start';

  if (isTransparent) {
    buttonBackgroundColor = 'transparent';
    buttonBorderWidth = 0;
    padding = 0;
  }
  if (isFullWidth) {
    width = '100%';
  }
  if (isChildrenCentered) {
    align = 'center';
  }

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: buttonBackgroundColor,
          borderColor: buttonBorderColor,
          borderWidth: buttonBorderWidth,
          padding: padding,
          width,
        },
        style,
      ]}
      {...rest}>
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <View
        style={[
          styles.buttonChildrenContainer,
          {
            width,
            justifyContent: align,
          },
          childrenContainerStyle,
        ]}>
        {isLoading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          children
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
