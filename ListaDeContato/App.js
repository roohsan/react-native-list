import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import PeopleDetailsPage from './src/pages/PeopleDetailsPage';
import PeoplePage from './src/pages/PeoplePage';
import RMDetailsPage from './src/pages/RMDetailsPage';
import RMPage from './src/pages/RMPage';
//const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function App() {
  return (
    <View style={style.container}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="PeoplePage">
          <Drawer.Screen name="Pokemons Listas" component={PeoplePage} />
          <Drawer.Screen
            name="Pokemon Detalhes"
            component={PeopleDetailsPage}
          />
          <Drawer.Screen name="Rick and Morty Lista" component={RMPage} />
          <Drawer.Screen
            name="Rick and Morty Detalhes"
            component={RMDetailsPage}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
