import * as React from 'react';
import {View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import {StepIndicatorStyles} from 'react-native-step-indicator/lib/typescript/src/types';
import styles from './styles';
import useThemeColors from '@src/custom-hooks/useThemeColors';

type DeliveryStepProps = {};

const labels = [
  'Order submitted',
  'Order confirmed',
  'Preparing your order',
  'Order is ready at the restaurant',
  'Driver is picking up your order',
  'Order completed',
];

const DeliveryStep: React.FC<DeliveryStepProps> = () => {
  const {primary, text, background, card, secondary} = useThemeColors();

  const stepIndicatorStyles: StepIndicatorStyles = {
    currentStepIndicatorSize: 35,
    stepStrokeCurrentColor: primary,
    separatorFinishedColor: primary,
    separatorUnFinishedColor: secondary,
    stepIndicatorFinishedColor: primary,
    stepIndicatorUnFinishedColor: card,
    stepIndicatorCurrentColor: background,
    stepIndicatorLabelFontSize: 12,
    currentStepIndicatorLabelFontSize: 12,
    stepIndicatorLabelCurrentColor: text,
    stepIndicatorLabelFinishedColor: 'white',
    stepIndicatorLabelUnFinishedColor: text,
    labelColor: text,
    labelAlign: 'flex-start',
    currentStepLabelColor: primary,
    separatorStrokeWidth: 2,
  };

  return (
    <View style={styles.deliveryStepContainer}>
      <StepIndicator
        customStyles={stepIndicatorStyles}
        currentPosition={2}
        labels={labels}
        direction="vertical"
        stepCount={6}
      />
    </View>
  );
};

export default DeliveryStep;
