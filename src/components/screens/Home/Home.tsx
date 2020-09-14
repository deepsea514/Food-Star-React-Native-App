import * as React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {ScrollView, SafeAreaView, InteractionManager} from 'react-native';
import {SearchBar, LoadingIndicator} from '@src/components/elements';
import PopularPlaces from './PopularPlaces';
import RecommendedPlaces from './RecommendedPlaces';
import MerchantCampaigns from './MerchantCampaigns';
import PopularCategories from './PopularCategories';
import HotDeals from './HotDeals';
import RemarkablePlaces from './RemarkablePlaces';
import AppReviewPrompt from '@src/components/common/AppReviewPrompt';

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const [
    isNavigationTransitionFinished,
    setIsNavigationTransitionFinished,
  ] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        setIsNavigationTransitionFinished(true);
      });
      return () => task.cancel();
    }, []),
  );

  return (
    <SafeAreaView>
      <ScrollView stickyHeaderIndices={[0]}>
        <SearchBar placeholder="Find places, dishes, restaurants..." />
        <PopularCategories />
        {isNavigationTransitionFinished ? (
          <>
            <PopularPlaces />
            <MerchantCampaigns />
            <RecommendedPlaces />
            <HotDeals />
            <RemarkablePlaces />
          </>
        ) : (
          <LoadingIndicator size="large" hasMargin />
        )}
      </ScrollView>
      <AppReviewPrompt />
    </SafeAreaView>
  );
};

export default Home;
