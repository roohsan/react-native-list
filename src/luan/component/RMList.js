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
    backgroundColor: '#22A2BD',
  },
  headerStyle: {
    flex: 1,
    height: 50,
    width: '100%',
    backgroundColor: '#6EE240',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    color: '#104651',
    fontSize: 20,
  },
});

export default RMList;
