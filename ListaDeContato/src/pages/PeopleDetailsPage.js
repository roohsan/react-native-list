import React,{useEffect} from 'react'
import {View, Text,StyleSheet} from 'react-native'
import { color } from 'react-native-reanimated'

export default class PeopleDetailsPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            "pokemon": props.route.params.pokemon
        }
    }

    render(){
        return(
            <View style={style.line}> 
                <Text style={style.lineText}>{this.state.pokemon.name}</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    line: {
        height:50,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row'

        
    },
    lineText: {
        fontSize: 50,
        paddingLeft: 20,
        flex: 7,
        color:'red',
        alignItems: 'center'
    }
}
)