import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IrregularVerbs from './IrregularVerbs/IrregularVerbs';
import HomeScreen from './Home';
import MenuScreen from './Menu';
import MenupersonalPronouns from './PersonalPronouns/Menu_personalPronouns'; 
import ObjectivePronoun from './PersonalPronouns/Pronounses/ObjectivePronoun';
import PossessiveAdjective from "./PersonalPronouns/Pronounses/PossessiveAdjective"
import PossessivePronoun from "./PersonalPronouns/Pronounses/PossessivePronoun"
import ReflexivePronoun from "./PersonalPronouns/Pronounses/ReflexivePronoun"
import SubjectivePronoun from "./PersonalPronouns/Pronounses/SubjectivePronoun"



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
                <Stack.Screen name="Irregular Verbs" component={IrregularVerbs} />
                <Stack.Screen name="Personal Pronouns" component={MenupersonalPronouns} />
                <Stack.Screen name="ObjectivePronoun" component={ObjectivePronoun} />
                <Stack.Screen name="PossessiveAdjective" component={PossessiveAdjective} />
                <Stack.Screen name="PossessivePronoun" component={PossessivePronoun} />
                <Stack.Screen name="ReflexivePronoun" component={ReflexivePronoun} />
                <Stack.Screen name="SubjectivePronoun" component={SubjectivePronoun} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
