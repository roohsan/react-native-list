import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import PeoppleList from '../component/PeopleList'

export default class PeoplePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pokemons: []
    }
  }
 
  componentDidMount(){
    axios
    .get('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
      const {results} = response.data
      this.setState({
        pokemons: results
      })
    })
  }
 
  render(){
    return (
      <View>
        <PeoppleList pokemons={this.state.pokemons} 
                     onPressItem={ (pokemon) => {
                         this.props.navigation.navigate('Pokemon Detalhes',
                         {"pokemon": pokemon})
                     }}
        />
      </View>
    );
  }
 
}