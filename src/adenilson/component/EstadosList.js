import React from 'react';
import {View, StyleSheet, SafeAreaView, FlatList, Text} from 'react-native'
import EstadosListItem from './EstadosListItem'
 
const EstadosList = props => {
    const {estados, onPressItem} = props

    const renderItem = ({item}) => {
        return (
            <EstadosListItem 
            key={item.state} 
            estado={item}
            onPressItemDetails={onPressItem}
            />
        )
    }

      const header= () => {
        return (
            <View style={style.header}>
                <Text style={style.headertext}>
                COVID-19: Estados mais Infectados
                </Text>
            </View>
        )
    }

    return (
        <View style={style.container}>
            <SafeAreaView>
                <FlatList
                    data={estados}
                    renderItem={renderItem}
                    keyExtractor={(item) => {item.state}}
                    ListHeaderComponent={header}
                    stickyHeaderIndices={[0]}
                />
            </SafeAreaView>
        </View>
    )
}
 
const style = StyleSheet.create({
    container: {
        backgroundColor: '#99ccff'
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
 
export default EstadosList