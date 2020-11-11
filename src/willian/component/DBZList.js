import React from 'react'
import {View, StyleSheet, SafeAreaView, FlatList, Text} from 'react-native'
import DBZListItem from './DBZListItem'

const DBZList = props => {
    const {personagens, onPressItem} = props

    const renderItem = ({item}) => {
        return (
            <DBZListItem 
                key={item.name} 
                personagem={item}
                onPressItemDetails={onPressItem}
            />
        )
    }

    const header= () => {
        return (
            <View style={style.headerStyle}>
                <Text style={style.titleStyle}>
                    Personagens do Mangá Dragon Ball
                </Text>
            </View>
        )
    }

    return (
        <View style={style.container}>
            <SafeAreaView>
                <FlatList
                    data={personagens}
                    renderItem={renderItem}
                    keyExtractor={(item) => {item.name}}
                    ListHeaderComponent={header}
                    stickyHeaderIndices={[0]}
                />
            </SafeAreaView>
        </View>
    )
}

const style = StyleSheet.create(
    {
        container: {
            backgroundColor: '#00008B'
        },
        headerStyle: {
            flex: 1,
            height: 50,
            width: '100%',
            backgroundColor: "#B0E0E6",
            justifyContent: "center",
            alignItems: 'center'
        },
        titleStyle: {
            color: '#FFFFF0',
            fontSize: 20
        }
    }
)

export default DBZList