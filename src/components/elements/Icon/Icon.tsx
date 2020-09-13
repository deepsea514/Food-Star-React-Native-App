import * as React from 'react';
import IconFontAwesome5, {
  FontAwesome5IconProps,
} from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';

interface OwnProps {
  isPrimary?: boolean;
  useIonicons?: boolean;
}

type IconProps = OwnProps & FontAwesome5IconProps;

const Icon: React.FC<IconProps> = ({
  isPrimary,
  useIonicons,
  color,
  ...rest
}) => {
  const {
    colors: {text, primary},
  } = useTheme();
  let iconColor = isPrimary ? primary : text;
  if (color) {
    iconColor = color;
  }

  return useIonicons ? (
    <Ionicons {...rest} color={iconColor} />
  ) : (
    <IconFontAwesome5 {...rest} color={iconColor} />
  );
};

export default Icon;
