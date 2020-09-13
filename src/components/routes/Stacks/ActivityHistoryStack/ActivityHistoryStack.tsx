import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ActivityHistory from '@src/components/screens/ActivityHistory';
import ActivityHistoryDetail from '@src/components/screens/ActivityHistoryDetail';
import {ScreenNavigationProps} from '../types';

type ActivityHistoryStackProps = {} & ScreenNavigationProps;
const Stack = createStackNavigator();

const ActivityHistoryStack: React.FC<ActivityHistoryStackProps> = () => {
  return (
    <Stack.Navigator initialRouteName="ActivityHistoryScreen">
      <Stack.Screen
        options={() => {
          return {
            title: 'Activity History',
          };
        }}
        name="ActivityHistoryScreen"
        component={ActivityHistory}
      />
      <Stack.Screen
        options={() => {
          return {
            title: 'Detail',
          };
        }}
        name="ActivityHistoryDetailScreen"
        component={ActivityHistoryDetail}
      />
    </Stack.Navigator>
  );
};

export default ActivityHistoryStack;
