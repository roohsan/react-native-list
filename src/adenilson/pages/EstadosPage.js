import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import EstadosList from '../component/EstadosList'

export default class EstadosPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      estados: []
    }
  }
 
  componentDidMount(){
    axios
    .get('https://covid19-brazil-api.now.sh/api/report/v1')
    .then(response => {
      const {data} = response.data
      this.setState({
        estados: data
      })
    })
  }
 
  render(){
    return (
      <View>
        <EstadosList estados={this.state.estados} 
        onPressItem={ (estado) => {
                this.props.navigation.navigate('Detalhes do Estado',
                {"estado": estado})
        }}/>
      </View>
    );
  }
 
}