import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import {toUpperFirst} from '../util'

const PeopleListItem = props => {
    const {pokemon, onPressItemDetails} = props
    const name = pokemon.name
    const url = pokemon.url
    const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
    const imageUrl = 'https://pokeres.bastionbot.org/images/pokemon/' + pokemonNumber + '.png'
    return(
        <TouchableOpacity onPress={() => {
            onPressItemDetails(pokemon)
        }} >
            <View style={style.line}>
             <Image style={style.avatar} source={{uri: imageUrl}} />
                <Text style={style.lineText} key={name}>
                {`${
                        toUpperFirst(name)
                    } 
                     
                `}
                </Text>
            </View>
        </TouchableOpacity>
    )

}

const style = StyleSheet.create({
        line: {
            height:50,
            borderBottomWidth: 1,
            borderBottomColor: '#bbb',
            alignItems: 'center',
            flexDirection: 'row'
        },
        avatar: {
            height:50,
            width:50,
            aspectRatio: 1,
            marginLeft: 10,
            flex: 1,

            
        },
        lineText: {
            fontSize: 10,
            paddingLeft: 20,
            flex: 7,
            color: '#fff'
        }
    }
)
export default PeopleListItem













