import * as React from 'react';
import {View, Dimensions, I18nManager} from 'react-native';
import SnapCarousel, {
  AdditionalParallaxProps,
  Pagination,
} from 'react-native-snap-carousel';
import styles from './styles';

interface OwnProps {
  renderContent: (
    item: any,
    index: number,
    parallaxProps?: AdditionalParallaxProps,
  ) => React.ReactNode;
  data: any[];
  hasPagination?: boolean;
  hasParallaxImages?: boolean;
  itemWidth?: number;
  inactiveSlideOpacity?: number;
  enableSnap?: boolean;
}

type CarouselProps = OwnProps;

const Carousel: React.FC<CarouselProps> = ({
  renderContent,
  data,
  hasPagination,
  itemWidth,
  inactiveSlideOpacity,
  enableSnap,
}) => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const renderCarouselItem = (
    item: any,
    parallaxProps?: AdditionalParallaxProps,
  ) => {
    if (renderContent) {
      return renderContent(item.item, item.index, parallaxProps);
    }
    return null;
  };

  const pagination = (dotsLength: number) => {
    return (
      <Pagination
        containerStyle={styles.paginationContainer}
        dotsLength={dotsLength}
        activeDotIndex={activeSlide}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  const onCarouselSnapToItem = (index: number) => {
    setActiveSlide(index);
  };

  if (data) {
    return (
      <View>
        <View>
          <SnapCarousel
            data={data}
            renderItem={renderCarouselItem}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={itemWidth}
            onSnapToItem={onCarouselSnapToItem}
            inactiveSlideOpacity={inactiveSlideOpacity}
            inactiveSlideScale={1}
            showsHorizontalScrollIndicator={true}
            decelerationRate="normal"
            activeSlideAlignment={I18nManager.isRTL ? 'end' : 'start'}
            enableSnap={enableSnap}
            removeClippedSubviews={false}
          />
        </View>
        {hasPagination && <View>{pagination(data.length)}</View>}
      </View>
    );
  }
  return null;
};

Carousel.defaultProps = {
  itemWidth: Dimensions.get('window').width,
  inactiveSlideOpacity: 1,
  enableSnap: false,
};

export default Carousel;
