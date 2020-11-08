import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class RMDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: props.route.params.character,
    };
  }

  render() {
    return (
      <View style={style.container}>
        <Image
          style={style.avatar}
          source={{ uri: this.state.character.image }}
        />
        <Text style={style.info}>Name: {this.state.character.name}</Text>
        <Text style={style.info}>Status: {this.state.character.status}</Text>
        <Text style={style.info}>Species: {this.state.character.species}</Text>
        <Text style={style.info}>
          Origin: {this.state.character.origin.name}
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    color: '#104651',
    fontSize: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
});
