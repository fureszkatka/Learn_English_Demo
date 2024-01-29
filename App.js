import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IrregularVerbs from './IrregularVerbs/IrregularVerbs';
import HomeScreen from './Home';
import MenuScreen from './Menu';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: 'lightblue', // Set the background color
          card: 'white', // Set the card (screen) background color
          text: 'black', // Set the text color
        },
      }}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#a20944',
          },
          headerTintColor: 'white', // Set the header text color
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        initialRouteName="topics">
        <Stack.Screen name="Learn English" component={MenuScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Irregular-Verbs" component={IrregularVerbs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
