import React from 'react';
import { View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';
import RMListItem from './RMListItem';

const RMList = (props) => {
  const { characters, onPressItem } = props;

  const renderItem = ({ item }) => {
    return (
      <RMListItem
        key={item.name}
        character={item}
        onPressItemDetails={onPressItem}
      />
    );
  };

  const header = () => {
    return (
      <View style={style.headerStyle}>
        <Text style={style.titleStyle}>Rick and Morty Characters</Text>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <SafeAreaView>
        <FlatList
          data={characters}
          renderItem={renderItem}
          keyExtractor={(item) => {
            item.name;
          }}
          ListHeaderComponent={header}
          stickyHeaderIndices={[0]}
        />
      </SafeAreaView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#e2f977',
  },
  headerStyle: {
    flex: 1,
    height: 50,
    width: '100%',
    backgroundColor: '#e2a977',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    color: '#000',
    fontSize: 20,
  },
});

export default RMList;
