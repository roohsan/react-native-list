import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import RMList from '../component/RMList';

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    axios.get('https://rickandmortyapi.com/api/character').then((response) => {
      const { results } = response.data;
      this.setState({
        characters: results,
      });
    });
  }

  render() {
    return (
      <View>
        <RMList
          characters={this.state.characters}
          onPressItem={(character) => {
            this.props.navigation.navigate('Rick and Morty Detalhes', {
              character: character,
            });
          }}
        />
      </View>
    );
  }
}
