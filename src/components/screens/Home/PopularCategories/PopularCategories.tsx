import * as React from 'react';
import {useTheme, useNavigation} from '@react-navigation/native';
import {Image, View} from 'react-native';
import {Text, Container, Touchable} from '@src/components/elements';
import {mockCategories} from '@src/data/mock-categories';
import styles from './styles';

type PopularCategoriesProps = {};

const PopularCategories: React.FC<PopularCategoriesProps> = () => {
  const navigation = useNavigation();
  const {
    colors: {border},
  } = useTheme();

  const _onButtonCategoryItemPressed = (name: string) => {
    return () => {
      navigation.navigate('PlaceListScreen', {title: name});
    };
  };

  return (
    <Container style={styles.categoryContainer}>
      {mockCategories.map((category) => {
        const {id, image, name} = category;
        return (
          <Touchable key={id} onPress={_onButtonCategoryItemPressed(name)}>
            <View style={[styles.categoryItem, {borderColor: border}]}>
              <Container>
                <Image style={styles.categoryImage} source={image} />
              </Container>
              <Container>
                <Text style={styles.categoryTitle}>{name}</Text>
              </Container>
            </View>
          </Touchable>
        );
      })}
    </Container>
  );
};

export default PopularCategories;
