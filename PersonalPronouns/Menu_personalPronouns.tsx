import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';


const MenupersonalPronouns = ({navigation}: any) => {
    const navigateToScreen = (screenName: any) => {
        navigation.navigate(screenName);
    };

    return (
        <View>
            <TouchableOpacity onPress={() => navigateToScreen('SubjectivePronoun')}>
                <Text>SubjectivePronoun</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateToScreen('ObjectivePronoun')}>
                <Text>ObjectivePronoun</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateToScreen('PossessiveAdjective')}>
                <Text>PossessiveAdjective</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateToScreen('PossessivePronoun')}>
                <Text>PossessivePronoun</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateToScreen('ReflexivePronoun')}>
                <Text>ReflexivePronoun</Text>
            </TouchableOpacity>
            
        </View>
    );
};
export default MenupersonalPronouns