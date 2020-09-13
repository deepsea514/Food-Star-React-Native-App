import * as React from 'react';
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';
import useThemeColors from '@src/custom-hooks/useThemeColors';

type LoadingIndicatorProps = {
  hasMargin?: boolean;
} & ActivityIndicatorProps;

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  hasMargin,
  ...rest
}) => {
  const {primary} = useThemeColors();
  let margin = 0;
  if (hasMargin) {
    margin = 15;
  }
  return (
    <ActivityIndicator
      color={primary}
      {...rest}
      style={{
        margin,
      }}
    />
  );
};
export default LoadingIndicator;
