import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const RMListItem = (props) => {
  const { character, onPressItemDetails } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        onPressItemDetails(character);
      }}
    >
      <View style={style.line}>
        <Image style={style.avatar} source={{ uri: character.image }} />
        <Text style={style.lineText} key={character.id}>
          {character.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatar: {
    aspectRatio: 1,
    marginLeft: 10,
    flex: 1,
    borderRadius: 50,
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 20,
    flex: 7,
  },
});
export default RMListItem;
