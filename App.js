import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EstadosDetailsPage from './src/adenilson/pages/EstadosDetailsPage';
import EstadosPage from './src/adenilson/pages/EstadosPage';
import PeopleDetailsPage from './src/rogerio/pages/PeopleDetailsPage';
import PeoplePage from './src/rogerio/pages/PeoplePage';
import RMDetailsPage from './src/luan/pages/RMDetailsPage';
import RMPage from './src/luan/pages/RMPage';

/*const Stack = createStackNavigator();*/
const Drawer = createDrawerNavigator();

function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator initialRouterName="EstadosPage">
          <Drawer.Screen name="Lista de Estados" component={EstadosPage} />
          <Drawer.Screen name="Pokemons Listas" component={PeoplePage} />
          <Drawer.Screen name="Rick and Morty Lista" component={RMPage} />
          <Drawer.Screen
            name="Detalhes do Estado"
            component={EstadosDetailsPage}
            options={() => ({
              drawerLabel: () => null,
              title: undefined,
              drawerIcon: () => null,
            })}
          />
          <Drawer.Screen
            name="Pokemon Detalhes"
            component={PeopleDetailsPage}
            options={() => ({
              drawerLabel: () => null,
              title: undefined,
              drawerIcon: () => null,
            })}
          />
          <Drawer.Screen
            name="Rick and Morty Detalhes"
            component={RMDetailsPage}
            options={() => ({
              drawerLabel: () => null,
              title: undefined,
              drawerIcon: () => null,
            })}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

class Hidden extends React.Component {
  render() {
    return null;
  }
}
export default App;
