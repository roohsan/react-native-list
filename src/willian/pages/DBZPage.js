import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import DBZList from '../component/DBZList'

export default class DBZPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      personagens: []
    }
  }
 
  componentDidMount(){
    axios
    .get('https://api.jikan.moe/v3/manga/42/characters')
    .then(response => {
      const {characters} = response.data
      this.setState({
        personagens:characters
      })
    })
  }
 
  render(){
    return (
      <View>
        <DBZList personagens={this.state.personagens} 
                     onPressItem={ (personagem) => {
                         this.props.navigation.navigate('Detalhe do Personagem',
                         {"personagem": personagem})
                     }}
        />
      </View>
    );
  }
 
}