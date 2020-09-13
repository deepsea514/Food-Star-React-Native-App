import * as React from 'react';
import {Animated, SafeAreaView, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Container, Text} from '@src/components/elements';
import HeadingInformation from './HeadingInformation';
import PopularDishes from './PopularDishes';
import TabSectionList from '@src/components/elements/TabSectionList';
import DishItem from '@src/components/common/DishItem';
import {mockPlaceDetails} from '@src/data/mock-places';
import styles from './styles';
import BasketSummary from './BasketSummary';

type PlaceDetailsProps = {};

const PlaceDetails: React.FC<PlaceDetailsProps> = () => {
  const {
    colors: {primary, border, card},
  } = useTheme();

  const [scrollY] = React.useState(new Animated.Value(0));

  const coverTranslateY = scrollY.interpolate({
    inputRange: [-4, 0, 10],
    outputRange: [-2, 0, 3],
  });

  const coverScale = scrollY.interpolate({
    inputRange: [-200, 0],
    outputRange: [2, 1],
    extrapolateRight: 'clamp',
  });

  const tabBarOpacity = scrollY.interpolate({
    inputRange: [200, 500],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.tabSectionListContainer}>
        <TabSectionList
          ListHeaderComponent={
            <>
              <Animated.View
                style={[
                  styles.coverPhotoContainer,
                  {
                    transform: [
                      {
                        translateY: coverTranslateY,
                      },
                    ],
                  },
                ]}>
                {mockPlaceDetails.coverImage && (
                  <Animated.Image
                    source={mockPlaceDetails.coverImage}
                    style={[
                      styles.coverPhoto,
                      {
                        transform: [
                          {
                            scale: coverScale,
                          },
                        ],
                      },
                    ]}
                  />
                )}
              </Animated.View>
              <HeadingInformation data={mockPlaceDetails} />
              <PopularDishes />
            </>
          }
          sections={mockPlaceDetails.dishSection || []}
          keyExtractor={(item) => item.title}
          stickySectionHeadersEnabled={false}
          scrollToLocationOffset={5}
          tabBarStyle={[styles.tabBar, {opacity: tabBarOpacity}]}
          tabBarScrollViewStyle={{backgroundColor: card}}
          ItemSeparatorComponent={() => (
            <Container style={[styles.separator, {backgroundColor: border}]} />
          )}
          renderTab={({title, isActive}) => {
            const borderBottomWidth = isActive ? 2 : 0;
            return (
              <Container
                style={{
                  borderBottomWidth,
                  borderColor: primary,
                }}>
                <Text isPrimary={isActive && true} style={styles.tabText}>
                  {title}
                </Text>
              </Container>
            );
          }}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeaderText}>{section.title}</Text>
          )}
          renderItem={({item}) => {
            return <DishItem data={item} />;
          }}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: scrollY,
                  },
                },
              },
            ],
            {
              useNativeDriver: true,
            },
          )}
        />
      </View>
      <BasketSummary />
    </SafeAreaView>
  );
};
export default PlaceDetails;
