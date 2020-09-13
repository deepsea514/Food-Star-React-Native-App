import * as React from 'react';
import {
  Rating as BaseRating,
  RatingProps as BaseRatingProps,
} from 'react-native-ratings';
import {useTheme} from '@react-navigation/native';

interface OwnProps {
  value?: number;
  readonly?: boolean;
  itemSize?: number;
  ratingStarBackgroundColor?: string;
}
type RatingProps = OwnProps & BaseRatingProps;

const Rating: React.FC<RatingProps> = ({
  value,
  readonly,
  itemSize,
  ratingStarBackgroundColor,
  ...rest
}) => {
  const {
    colors: {primary, card},
  } = useTheme();
  return (
    <BaseRating
      type="custom"
      readonly={readonly}
      startingValue={value}
      imageSize={itemSize}
      ratingColor={primary}
      tintColor={ratingStarBackgroundColor ? ratingStarBackgroundColor : card}
      {...rest}
    />
  );
};

Rating.defaultProps = {
  itemSize: 16,
  value: 1,
};

export default Rating;
