import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type ScreenRouteProp = RouteProp<any, any>;

type ScreenNavigationProp = StackNavigationProp<any, any>;

export type ScreenNavigationProps = {
  route: ScreenRouteProp;
  navigation: ScreenNavigationProp;
};
