import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {toUpperFirst} from '../util'

const DBZListItem = props => {
    const {personagem, onPressItemDetails} = props
    const name = personagem.name
    return(
        <TouchableOpacity onPress={() => {
            onPressItemDetails(personagem)
        }} >
            <View style={style.line}>
                <Image style={style.avatar} source={{uri:personagem.image_url}}/>
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
            height:60,
            borderBottomWidth: 1,
            borderBottomColor: '#bbb',
            alignItems: 'center',
            flexDirection: 'row'
        },
        avatar: {
            aspectRatio: 1,
            marginLeft: 10,
            flex: 1,
            borderRadius: 50
        },
        lineText: {
            fontSize: 20,
            paddingLeft: 20,
            flex: 7,
            color:"#E6E6FA"	
        }
    }
)
export default DBZListItem













