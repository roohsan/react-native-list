import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {toUpperFirst} from '../util'
import { AC, AL, AP, AM , BA, CE, ES, GO, MA, MT, MS, MG, PA, PB, PR, PE, PI, RJ, RN, RS, RO, RR, SC, SP, SE, TO, DF } from '../../../assets/images';
 
const EstadosListItem = props => {
    const {estado, onPressItemDetails} = props
    const uf = estado.uf
    const state = estado.state

    const img = (i) => {
        if (i == 'AC')
            return AC
        else if (i == 'AL')
            return AL
        else if (i == 'AM')
            return AM
        else if (i == 'AP')
            return AP
        else if (i == 'BA')
        return BA
        else if (i == 'CE')
        return CE
        else if (i == 'ES')
        return ES
        else if (i == 'GO')
        return GO
        else if (i == 'MA')
        return MA
        else if (i == 'MT')
        return MT
        else if (i == 'MS')
        return MS
        else if (i == 'MG')
        return MG
        else if (i == 'PA')
        return PA
        else if (i == 'PB')
        return PB
        else if (i == 'PR')
        return PR
        else if (i == 'PE')
        return PE
        else if (i == 'PI')
        return PI
        else if (i == 'RJ')
        return RJ
        else if (i == 'RN')
        return RN
        else if (i == 'RS')
        return RS
        else if (i == 'RO')
        return RO
        else if (i == 'RR')
        return RR
        else if (i == 'SC')
        return SC
        else if (i == 'SP')
        return SP
        else if (i == 'SE')
        return SE
        else if (i == 'TO')
        return TO
        else if (i == 'DF')
        return DF
    }
    return (
        <TouchableOpacity onPress={() => {
            onPressItemDetails(estado)
        }}>
        <View style={style.line}>
        <Image style={style.avatar} source={img(uf)}/>
            <Text style={style.linetext} key={state}>
                {`${
                    toUpperFirst(state)
                } `}
            </Text>            
        </View>
        </TouchableOpacity>
    )
}
 
const style = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#e6f2ff',
        alignItems: 'center',
        flexDirection: 'row'
    },
    linetext:{
        fontSize:20,
        paddingLeft: 20,
        flex: 7,
        color: '#fff'
    },
    avatar:{
        aspectRatio: 1,
        flex: 1,
        marginLeft: 10,
        borderRadius: 5
    }
}
)
 
export default EstadosListItem