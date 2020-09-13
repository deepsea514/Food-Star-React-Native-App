import * as React from 'react';
import {
  Image,
  ViewProps,
  StyleProp,
  TextStyle,
  ImageSourcePropType,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Touchable from '../Touchable';
import Container from '../Container';
import Text from '../Text';
import styles from './styles';
import {
  ParallaxImage,
  AdditionalParallaxProps,
} from 'react-native-snap-carousel';

type OwnProps = {
  coverImage?: ImageSourcePropType;
  title?: string;
  subTitle?: string;
  parallaxProps?: AdditionalParallaxProps;
  isSmallCover?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  subTitleStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
};

type CardProps = OwnProps & ViewProps;

const Card: React.FC<CardProps> = ({
  coverImage,
  title,
  subTitle,
  children,
  parallaxProps,
  isSmallCover,
  onPress,
  titleStyle,
  subTitleStyle,
  style,
  ...rest
}) => {
  const {
    colors: {card},
  } = useTheme();

  const _renderCard = () => {
    return (
      <Container
        style={[{backgroundColor: card}, styles.card, style]}
        {...rest}>
        {coverImage && (
          <Container
            style={
              isSmallCover
                ? styles.coverImageSmallContainer
                : styles.coverImageContainer
            }>
            {parallaxProps ? (
              <ParallaxImage
                parallaxFactor={0.4}
                source={coverImage}
                style={styles.coverImage}
                containerStyle={styles.parallaxImageContainer}
                {...parallaxProps}
              />
            ) : (
              <Image source={coverImage} style={styles.coverImage} />
            )}
          </Container>
        )}
        <Container style={styles.cardBody}>
          {title && (
            <Text numberOfLines={1} style={[styles.cardTitle, titleStyle]}>
              {title}
            </Text>
          )}
          {subTitle && (
            <Text
              numberOfLines={1}
              style={[styles.cardSubtitle, subTitleStyle]}>
              {subTitle}
            </Text>
          )}
          {children}
        </Container>
      </Container>
    );
  };

  return onPress ? (
    <Touchable onPress={onPress}>{_renderCard()}</Touchable>
  ) : (
    _renderCard()
  );
};

export default Card;
