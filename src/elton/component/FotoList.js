import React from 'react';
import { View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';
import FotoListItem from './FotoListItem';

const FotoList = (props) => {
  const { fotos, onPressItem } = props;

  const renderItem = ({ item }) => {
    return (
      <FotoListItem
        key={item.author}
        foto={item}
        onPressItemDetails={onPressItem}
      />
    );
  };

  const header = () => {
    return (
      <View style={style.headerStyle}>
        <Text style={style.titleStyle}>
		Lista de Fotos</Text>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <SafeAreaView>
        <FlatList
          data={fotos}
          renderItem={renderItem}
          keyExtractor={(item) => {
            item.author;
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
    backgroundColor: '#263238',
  },
  headerStyle: {
    flex: 1,
    height: 50,
    width: '100%',
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
	fontSize: 20,
    color: '#00bfa5',
	flex: 7,
	marginTop: 18,
  },
});

export default FotoList;
