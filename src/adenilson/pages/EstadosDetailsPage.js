import React from 'react'
import {StyleSheet,View, Text, Image} from 'react-native'
import { AC, AL, AP, AM , BA, CE, ES, GO, MA, MT, MS, MG, PA, PB, PR, PE, PI, RJ, RN, RS, RO, RR, SC, SP, SE, TO, DF } from '../../../assets/images';

export default class EstadosDetailsPage extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            "estado": props.route.params.estado
        }
    }
    
    
    render(){
        return (
            <View style={style.container}>
            <View style={style.header}>
                <Text style={style.headertext}>
                {this.state.estado.state}
                </Text>
                </View>
                <Image style={style.avatar} source={img(this.state.estado.uf)}/>
            <View style={style.line}>
                <Text style={style.linetext}>UF: 
                {this.state.estado.uf}  
                </Text>
            <Text style={style.linetext}>Casos: 
                {this.state.estado.cases}  
                </Text>
                <Text style={style.linetext}>Suspeitas: 
                {this.state.estado.suspects}  
                </Text>
                <Text style={style.linetext}>Recuperados: 
                {this.state.estado.refuses}  
                </Text>
                <Text style={style.linetext}>Mortes: 
                {this.state.estado.deaths}  
                </Text>
            </View>
            </View>
        )
    }
}
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

const style = StyleSheet.create({
    container: {
        backgroundColor: '#99ccff',
        flex: 1,
    },
    line: {
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'column'
    },
    linetext:{
        fontSize:20,
        paddingLeft: 20,
        color: '#000'
    },
    avatar:{
        marginTop: 60,
        alignSelf: 'center',
        marginLeft: 10,
        borderRadius: 5,
    },
    header: {
        backgroundColor: '#DCDCDC',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#111',
        alignItems: 'center'
    }, headertext: {
        fontSize:20,
        flex: 7,
        color: '#222',
        marginTop: 18
    }
}
)