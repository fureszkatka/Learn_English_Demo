import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import IrregularVerbs from './IrregularVerbs/IrregularVerbs';

import MenuScreen from './Menu';

import MenupersonalPronouns from './PersonalPronouns/Menu_personalPronouns'; 
import ObjectivePronoun from './PersonalPronouns/Pronounses/ObjectivePronoun';
import PossessiveAdjective from './PersonalPronouns/Pronounses/PossessiveAdjective'
import PossessivePronoun from './PersonalPronouns/Pronounses/PossessivePronoun'
import SubjectivePronoun from './PersonalPronouns/Pronounses/SubjectivePronoun'

import Tenses_Menu from './Tenses/Tenses_Menu';

import Present_Menu from './Tenses/Present/Present_Menu';
import PresentContinuous from './Tenses/Present/PresentContinuous';
import PresentSimple from './Tenses/Present/PresentSimple'
import PresentPerfectContinuous from './Tenses/Present/PresentPerfectContinuous'
import PresentPerfectSimple from './Tenses/Present/PresentPerfectSimple';

import PastSimple from './Tenses/Past/PastSimple';
import PastContinuous from './Tenses/Past/PastContinuous';
import PastPerfectSimple from './Tenses/Past/PastPerfectSimple';
import PastPerfectContinuous from './Tenses/Past/PastPerfectContinuous';
import Past_Menu from './Tenses/Past/Past_Menu';

import FutureSimple from './Tenses/Future/FutureSimple';
import FutureContinuous from './Tenses/Future/FutureContinuous';
import FuturePerfectSimple from './Tenses/Future/FuturePerfectSimple';
import FuturePerfectContinuous from './Tenses/Past/PastPerfectContinuous';
import Future_Menu from './Tenses/Future/Future_Menu';

import Superlatives from './Superlatives/Superlatives';

import PasiveSentences from './PassiveSentences/PasiveSentences'

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
                }} initialRouteName="topics"
            >
                <Stack.Screen name="Learn English" component={MenuScreen} />
                <Stack.Screen name="Irregular Verbs" component={IrregularVerbs} />

                <Stack.Screen name="Personal Pronouns" component={MenupersonalPronouns} />
                <Stack.Screen name="ObjectivePronoun" component={ObjectivePronoun} />
                <Stack.Screen name="PossessiveAdjective" component={PossessiveAdjective} />
                <Stack.Screen name="PossessivePronoun" component={PossessivePronoun} />
                <Stack.Screen name="SubjectivePronoun" component={SubjectivePronoun} />

                <Stack.Screen name="TensesMenu" component={Tenses_Menu} />
                <Stack.Screen name="Present_Menu" component={Present_Menu} />
                <Stack.Screen name="PresentSimple" component={PresentSimple} />
                <Stack.Screen name="PresentContinuous" component={PresentContinuous} />
                <Stack.Screen name="PresentPerfectContinuous" component={PresentPerfectContinuous} />
                <Stack.Screen name="PresentPerfectSimple" component={PresentPerfectSimple} />

                <Stack.Screen name="Past_Menu" component={Past_Menu} />
                <Stack.Screen name="PastSimple" component={PastSimple} />
                <Stack.Screen name="PastContinuous" component={PastContinuous} />
                <Stack.Screen name="PastPerfectSimple" component={PastPerfectSimple} />
                <Stack.Screen name="PastPerfectContinuous" component={PastPerfectContinuous} />

                <Stack.Screen name="Future_Menu" component={Future_Menu} />
                <Stack.Screen name="FutureSimple" component={FutureSimple} />
                <Stack.Screen name="FutureContinuous" component={FutureContinuous} />
                <Stack.Screen name="FuturePerfectSimple" component={FuturePerfectSimple} />
                <Stack.Screen name="FuturePerfectContinuous" component={FuturePerfectContinuous} />

                <Stack.Screen name="Superlatives" component={Superlatives} />

                <Stack.Screen name="PasiveSentences" component={PasiveSentences} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
