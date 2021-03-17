import * as React from 'react';
import {FlatList, FlatListProps, ListRenderItem} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';
import Divider from '../Divider';
import useThemeColors from '@src/custom-hooks/useThemeColors';
import ListRowItem, {ListRowItemProps} from './ListRowItem';
import styles from './styles';

interface OwnProps {
  data: ListRowItemProps[];
}

type ListProps = OwnProps & Partial<FlatListProps<any>>;

const List: React.FC<ListProps> = ({data, renderItem, ...rest}) => {
  const {card} = useThemeColors();
  const listRef = React.useRef(null);

  useScrollToTop(listRef);

  const _renderDefaultItem: ListRenderItem<ListRowItemProps> = ({item}) => {
    return <ListRowItem {...item} />;
  };

  return (
    <FlatList
      {...rest}
      ref={listRef}
      keyExtractor={(item, index) => `${item.id} - ${index}`}
      data={data}
      contentContainerStyle={[
        {
          backgroundColor: card,
        },
        styles.contentContainer,
      ]}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem || _renderDefaultItem}
    />
  );
};

export default List;
