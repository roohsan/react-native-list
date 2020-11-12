import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const FotoListItem = (props) => {
  const { foto, onPressItemDetails } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        onPressItemDetails(foto);
      }}
    >
      <View style={style.line}>
        <Image style={style.avatar}
		source={{ uri: foto.download_url }} />
        <Text style={style.lineText} key={foto.id}>
          {foto.author}
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
	color: '#D3D3D3',
    paddingLeft: 20,
    flex: 7,
  },
});

export default FotoListItem;
