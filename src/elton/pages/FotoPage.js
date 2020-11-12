import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import FotoList from '../component/FotoList';

export default class RestPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fotos: [],
    };
  }

  componentDidMount() {
    axios.get(`https://picsum.photos/v2/list?page=2&limit=15`)
      .then(res => {
        const fotos = res.data;
        this.setState({ fotos });
      })
  }
  
  render() {
    return (
      <View>
        <FotoList
          fotos={this.state.fotos}
          onPressItem={(foto) => {
            this.props.navigation.navigate('Detalhes da Foto', {
              "foto": foto,
            });
          }}
        />
      </View>
    );
  }
}