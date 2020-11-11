import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import {slicer} from '../util'

export default class DBZDetailsPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            "personagem": props.route.params.personagem
        }
    }

    render(){
        return(
            <View style={style.container}>
                <Text style={style.titleStyle}>Nome: {this.state.personagem.name}</Text>
               <Image style={style.avatar} source={{uri:slicer(this.state.personagem.image_url)}}></Image>
                    <Text style={style.titleStyle}>
                    Página no MyAnimeList: {this.state.personagem.url}
                </Text> 
                <Text style={style.titleStyle}>id do personagem: {this.state.personagem.mal_id}</Text>
                <Text style={style.titleStyle}>papel do personagem: {this.state.personagem.role}</Text>
            </View>
        )
    }
}


const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00008B'
        },
        headerStyle: {
            flex: 1,
            height: 50,
            width: '100%',
            backgroundColor: "#1C1C1C",
            justifyContent: "center",
            alignItems: 'center'
        },
        titleStyle: {
            textAlign: "center",
            color: '#fff',
            fontSize: 22,
            
        },
        avatar: {
            aspectRatio: 1,
            borderRadius: 50,
            width: 150,
            height: 150
        }
    }
)