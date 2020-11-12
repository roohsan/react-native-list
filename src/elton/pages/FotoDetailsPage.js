import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class FotoDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foto: props.route.params.foto,
    };
  }

  render() {
    return (
	  <View style={style.container}>
		<Image style={style.avatar}
		source={{ uri: this.state.foto.download_url }}/>
        <Text style={style.titleStyle}>
		Autor: {this.state.foto.author}</Text>
		<Text style={style.titleStyle}>
		Largura: {this.state.foto.width}</Text>
		<Text style={style.titleStyle}>
		Altura: {this.state.foto.height}</Text>
		<Text style={style.titleStyle}>
		Fonte: {this.state.foto.url}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
	backgroundColor: '#263238',
  },
  titleStyle: {
    textAlign: "center",
    color: '#D3D3D3',
    fontSize: 20,
	paddingTop: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    aspectRatio: 1,
    borderRadius: 50,
  },
});
