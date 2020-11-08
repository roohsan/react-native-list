import React from 'react'
import {View, StyleSheet, SafeAreaView, FlatList, Text} from 'react-native'
import PeopleListItem from './PeopleListItem'

const PeopleList = props => {
    const {pokemons, onPressItem} = props

    const renderItem = ({item}) => {
        return (
            <PeopleListItem 
                key={item.name} 
                pokemon={item}
                onPressItemDetails={onPressItem}
            />
        )
    }

    const header= () => {
        return (
            <View style={style.headerStyle}>
                <Text style={style.titleStyle}>
                    Pokemons
                </Text>
            </View>
        )
    }

    return (
        <View style={style.container}>
            <SafeAreaView>
                <FlatList
                    data={pokemons}
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
            backgroundColor: 'black'
        },
        headerStyle: {
            flex: 1,
            height: 50,
            width: '100%',
            backgroundColor: "#e2a977",
            justifyContent: "center",
            alignItems: 'center'
        },
        titleStyle: {
            color: 'yellow',
            fontSize: 50
        }
    }
)

export default PeopleList