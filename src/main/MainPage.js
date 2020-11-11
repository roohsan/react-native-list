import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { swipe } from '../../assets/images';

export default class MainPage extends React.Component {

  render() {
    return (
      <View style={style.container}>
          <Text style={style.info}>Para iniciar, arraste para o lado e selecione sua lista! </Text>
        <Image
          style={style.avatar}
          source={ swipe }
        />
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
    color: '#000',
    fontSize: 35,
    fontWeight: "bold",
    width: 250
  },
  avatar: {
    width: 150,
    height: 150,
    aspectRatio: 1,
  },
});
