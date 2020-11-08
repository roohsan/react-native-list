import React from 'react';
import { View, Text } from 'react-native';

export default class RMDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: props.route.params.character,
    };
  }

  render() {
    return (
      <View>
        <Text>{this.state.character.name}</Text>
      </View>
    );
  }
}
