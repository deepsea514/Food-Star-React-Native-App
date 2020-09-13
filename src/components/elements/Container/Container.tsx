import * as React from 'react';
import {View, ViewProps} from 'react-native';
import {useTheme} from '@react-navigation/native';

interface OwnProps {
  children?: React.ReactNode;
}

type ContainerProps = OwnProps & ViewProps;

const Container: React.FC<ContainerProps> = ({children, style, ...rest}) => {
  const {
    colors: {card},
  } = useTheme();
  return (
    <View style={[{backgroundColor: card}, style]} {...rest}>
      {children}
    </View>
  );
};

export default Container;
